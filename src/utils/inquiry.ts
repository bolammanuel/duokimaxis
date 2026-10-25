export interface Inquiry {
  name: string;
  email: string;
  service: string;
  message: string;
  website: string;
}
export type InquiryErrors = Partial<Record<keyof Inquiry, string>>;
export interface EmailConfiguration {
  serviceId: string;
  templateId: string;
  publicKey: string;
}
type EmailTransport = (
  service: string,
  template: string,
  parameters: Record<string, string>,
  options: { publicKey: string },
) => Promise<{ status: number }>;

export function validateInquiry(inquiry: Inquiry): InquiryErrors {
  const errors: InquiryErrors = {};
  if (!inquiry.name.trim()) errors.name = 'Please tell us your name.';
  else if (inquiry.name.trim().length > 100) errors.name = 'Please use 100 characters or fewer.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiry.email.trim()) || inquiry.email.length > 254)
    errors.email = 'Please enter a valid email address.';
  if (inquiry.message.trim().length < 10)
    errors.message = 'Tell us a little more, using at least 10 characters.';
  else if (inquiry.message.length > 3000)
    errors.message = 'Please keep your message under 3,000 characters.';
  if (!inquiry.service.trim())
    errors.service = 'Please select an area, or choose “Let’s work it out together”.';
  if (inquiry.website)
    errors.website = 'We couldn’t prepare this inquiry. Please contact us by email.';
  return errors;
}

export function canSendInquiry(configuration: EmailConfiguration): boolean {
  return Boolean(configuration.serviceId && configuration.templateId && configuration.publicKey);
}

export function prepareInquiry(inquiry: Inquiry, recipient: string) {
  const subject = `Project inquiry: ${inquiry.service.replace(/[\r\n]/g, ' ')}`;
  const body = `Hello Duokim Axis,\n\n${inquiry.message.trim()}\n\nName: ${inquiry.name.trim()}\nEmail: ${inquiry.email.trim()}\nInterested in: ${inquiry.service}\n`;
  return {
    subject,
    body,
    mailto: `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
  };
}

export async function sendInquiry(
  inquiry: Inquiry,
  configuration: EmailConfiguration,
  transport?: EmailTransport,
): Promise<void> {
  if (Object.keys(validateInquiry(inquiry)).length)
    throw new Error('Please check the details in your inquiry.');
  if (!canSendInquiry(configuration))
    throw new Error('Direct delivery is unavailable. Please send your inquiry by email.');
  const send =
    transport ??
    (async (...args: Parameters<EmailTransport>) => {
      const emailjs = await import('@emailjs/browser');
      return emailjs.send(...args);
    });
  const response = await send(
    configuration.serviceId,
    configuration.templateId,
    {
      from_name: inquiry.name.trim(),
      reply_to: inquiry.email.trim(),
      service: inquiry.service,
      message: inquiry.message.trim(),
    },
    { publicKey: configuration.publicKey },
  );
  if (response.status < 200 || response.status >= 300)
    throw new Error('The inquiry was not accepted. Please try again or email us directly.');
}
