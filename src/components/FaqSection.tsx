import { Plus } from 'lucide-react';
import { FAQS } from '../data/content';

export function FaqSection() {
  return (
    <div className="faq-list">
      {FAQS.map((faq) => (
        <details key={faq.question}>
          <summary>
            {faq.question}
            <Plus size={20} aria-hidden="true" />
          </summary>
          <p>{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
