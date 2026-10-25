import { useEffect, useRef, useState, type FormEvent } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { ArrowUpRight, ArrowLeft, Check, Copy, Loader2 } from 'lucide-react';
import { CONTACT_EMAIL, EMAIL_CONFIG } from '../config';
import { INQUIRY_OPTIONS } from '../data/content';
import {
  canSendInquiry,
  prepareInquiry,
  sendInquiry,
  validateInquiry,
  type Inquiry,
  type InquiryErrors,
} from '../utils/inquiry';
import { trackInquirySent } from '../utils/analytics';

export function ContactForm() {
  const [search] = useSearchParams();
  const navigate = useNavigate();
  const requestedService = search.get('service');
  const [inquiry, setInquiry] = useState<Inquiry>({
    name: '',
    email: '',
    service: 'not-sure',
    message: '',
    website: '',
  });
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [busy, setBusy] = useState(false);
  const [deliveryError, setDeliveryError] = useState('');
  const [draft, setDraft] = useState<ReturnType<typeof prepareInquiry> | null>(null);
  const [copyStatus, setCopyStatus] = useState('');
  const draftTitle = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const hasDelivery = canSendInquiry(EMAIL_CONFIG);
  const serviceName =
    INQUIRY_OPTIONS.find((option) => option.id === inquiry.service)?.name ||
    INQUIRY_OPTIONS[0].name;
  const completeInquiry = { ...inquiry, service: serviceName };
  useEffect(() => {
    const service =
      INQUIRY_OPTIONS.find((option) => option.id === requestedService)?.id || 'not-sure';
    setInquiry((previous) => ({ ...previous, service }));
    setDraft(null);
  }, [requestedService]);

  function update(field: keyof Inquiry, value: string) {
    setInquiry((previous) => ({ ...previous, [field]: value }));
    setErrors((previous) => ({ ...previous, [field]: undefined }));
    setDeliveryError('');
  }

  async function submit(event: FormEvent) {
    event.preventDefault();
    if (busy) return;
    const validation = validateInquiry(inquiry);
    setErrors(validation);
    if (Object.keys(validation).length) {
      requestAnimationFrame(() =>
        formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus(),
      );
      return;
    }
    if (!hasDelivery) {
      setDraft(prepareInquiry(completeInquiry, CONTACT_EMAIL));
      requestAnimationFrame(() => draftTitle.current?.focus());
      return;
    }
    setBusy(true);
    setDeliveryError('');
    try {
      await sendInquiry(completeInquiry, EMAIL_CONFIG);
      trackInquirySent(inquiry.service);
      navigate('/thank-you', { state: { inquirySent: true } });
    } catch {
      setDeliveryError(
        'We couldn’t send your inquiry. Your details are still here. Please try again, or send it through your email app below.',
      );
    } finally {
      setBusy(false);
    }
  }

  if (draft)
    return (
      <div className="inquiry-draft">
        <span className="draft-symbol">
          <Check size={25} aria-hidden="true" />
        </span>
        <h2 ref={draftTitle} tabIndex={-1}>
          Your email draft is ready.
        </h2>
        <p>
          Open it in your email app, check the details, and send it to{' '}
          <strong>{CONTACT_EMAIL}</strong>.
        </p>
        <p className="draft-note">Preparing this draft hasn’t sent a message.</p>
        <a className="button" href={draft.mailto}>
          Open email draft <ArrowUpRight size={20} aria-hidden="true" />
        </a>
        <label htmlFor="inquiry-draft">Your message</label>
        <textarea id="inquiry-draft" value={draft.body} readOnly rows={8} />
        <div className="draft-actions">
          <button
            type="button"
            className="text-button"
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(
                  `To: ${CONTACT_EMAIL}\nSubject: ${draft.subject}\n\n${draft.body}`,
                );
                setCopyStatus('Copied to clipboard.');
              } catch {
                document.querySelector<HTMLTextAreaElement>('#inquiry-draft')?.select();
                setCopyStatus('Your message is selected. You can copy it now.');
              }
            }}
          >
            <Copy size={17} aria-hidden="true" />
            Copy details
          </button>
          <button
            type="button"
            className="text-button"
            onClick={() => {
              setDraft(null);
              setCopyStatus('');
              requestAnimationFrame(() => document.getElementById('inquiry-name')?.focus());
            }}
          >
            <ArrowLeft size={17} aria-hidden="true" />
            Edit your message
          </button>
        </div>
        <p role="status" className="copy-status">
          {copyStatus}
        </p>
      </div>
    );

  return (
    <form ref={formRef} className="inquiry-form" onSubmit={submit} noValidate aria-busy={busy}>
      <div className="form-heading">
        <span className="eyebrow">A little about your project</span>
        <span className="form-required">All fields required</span>
      </div>
      <div className="form-pair">
        <div className="field">
          <label htmlFor="inquiry-name">Your name</label>
          <input
            id="inquiry-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={100}
            value={inquiry.name}
            onChange={(event) => update('name', event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'inquiry-name-error' : undefined}
            disabled={busy}
            placeholder="What should we call you?"
          />
          {errors.name && (
            <p className="field-error" id="inquiry-name-error">
              {errors.name}
            </p>
          )}
        </div>
        <div className="field">
          <label htmlFor="inquiry-email">Email address</label>
          <input
            id="inquiry-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            value={inquiry.email}
            onChange={(event) => update('email', event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'inquiry-email-error' : undefined}
            disabled={busy}
            placeholder="you@organisation.com"
          />
          {errors.email && (
            <p className="field-error" id="inquiry-email-error">
              {errors.email}
            </p>
          )}
        </div>
      </div>
      <div className="field">
        <label htmlFor="inquiry-service">What can we help with?</label>
        <select
          id="inquiry-service"
          name="service"
          required
          value={inquiry.service}
          onChange={(event) => update('service', event.target.value)}
          aria-invalid={Boolean(errors.service)}
          aria-describedby={errors.service ? 'inquiry-service-error' : undefined}
          disabled={busy}
        >
          {INQUIRY_OPTIONS.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
        {errors.service && (
          <p className="field-error" id="inquiry-service-error">
            {errors.service}
          </p>
        )}
      </div>
      <div className="field">
        <label htmlFor="inquiry-message">What are you thinking?</label>
        <textarea
          id="inquiry-message"
          name="message"
          rows={6}
          required
          minLength={10}
          maxLength={3000}
          value={inquiry.message}
          onChange={(event) => update('message', event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={`inquiry-message-hint${errors.message ? ' inquiry-message-error' : ''}`}
          disabled={busy}
          placeholder="A little about your organisation, what needs to change, and any timing you have in mind…"
        />
        <div className="field-hint" id="inquiry-message-hint">
          <span>A rough idea is a good place to start.</span>
          <span>{inquiry.message.length.toLocaleString()} / 3,000</span>
        </div>
        {errors.message && (
          <p className="field-error" id="inquiry-message-error">
            {errors.message}
          </p>
        )}
      </div>
      <div className="form-honeypot" aria-hidden="true">
        <label htmlFor="inquiry-website">Leave this field empty</label>
        <input
          id="inquiry-website"
          name="website"
          type="text"
          autoComplete="off"
          tabIndex={-1}
          value={inquiry.website}
          onChange={(event) => update('website', event.target.value)}
        />
      </div>
      {errors.website && (
        <p className="field-error" role="alert">
          {errors.website}
        </p>
      )}
      {deliveryError && (
        <div className="delivery-error" role="alert">
          <p>{deliveryError}</p>
          <a href={prepareInquiry(completeInquiry, CONTACT_EMAIL).mailto}>
            Open an email draft <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      )}
      <div className="form-submit">
        <button type="submit" className="button" disabled={busy}>
          {busy ? (
            <>
              <Loader2 size={19} className="loading-icon" aria-hidden="true" />
              Sending your inquiry…
            </>
          ) : (
            <>
              {hasDelivery ? 'Send your inquiry' : 'Prepare email draft'}
              <ArrowUpRight size={20} aria-hidden="true" />
            </>
          )}
        </button>
        <p>
          {hasDelivery
            ? 'Your message goes directly to our team.'
            : 'You’ll review and send this from your email app.'}
        </p>
      </div>
      <p className="form-privacy">
        We use these details to discuss your project.{' '}
        <Link to="/privacy">How we handle your information</Link>.
      </p>
    </form>
  );
}
