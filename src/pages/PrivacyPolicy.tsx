import { Link } from 'react-router-dom';
import { ANALYTICS_ID, CONTACT_EMAIL } from '../config';
import { canSendInquiry } from '../utils/inquiry';
import { EMAIL_CONFIG } from '../config';

export function PrivacyPolicy() {
  return (
    <article className="container legal-page">
      <header className="page-intro">
        <p className="eyebrow">Website information</p>
        <h1 tabIndex={-1}>Your privacy.</h1>
        <p className="page-lead">
          A plain explanation of what happens to information you enter on this website.
        </p>
        <p className="legal-date">Updated 24 October 2026</p>
      </header>
      <div className="legal-content">
        <section>
          <h2>Project inquiries</h2>
          <p>
            The project form asks for your name, email address, area of interest, and message.{' '}
            {canSendInquiry(EMAIL_CONFIG)
              ? 'When you submit it, EmailJS processes those details to deliver the inquiry to our team. We use your message to discuss your project and respond to you.'
              : 'It prepares an email draft in your browser. The draft is not sent by this website. You choose whether to open it in your email application and send it to our team.'}
          </p>
          <p>
            Your project details are not saved in this website’s local storage. If you send an
            email, your email provider and our inbox provider process the message as part of normal
            email delivery.
          </p>
        </section>
        <section>
          <h2>Analytics and preferences</h2>
          {ANALYTICS_ID ? (
            <>
              <p>
                Google Analytics is optional. We load it only after you choose to allow analytics,
                to understand visits and page use. We do not include your inquiry details in
                analytics events.
              </p>
              <p>
                Your choice is saved in your browser. You can change it through “Privacy settings”
                in the footer. Choosing to continue without analytics does not prevent you from
                using the site.
              </p>
            </>
          ) : (
            <p>
              Google Analytics is not enabled on this website. We do not currently set analytics
              cookies.
            </p>
          )}
        </section>
        <section>
          <h2>Fonts and external services</h2>
          <p>
            The site loads its typefaces from Google Fonts. Your browser contacts Google to retrieve
            those files. Links that open your email application or another website are handled by
            the application or service you choose.
          </p>
        </section>
        <section>
          <h2>Questions about your information</h2>
          <p>
            For questions about a message you have sent, or to request a correction or removal,
            contact <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Include enough context
            for us to identify the relevant conversation.
          </p>
        </section>
        <p className="legal-return">
          <Link to="/contact">Back to the conversation →</Link>
        </p>
      </div>
    </article>
  );
}
