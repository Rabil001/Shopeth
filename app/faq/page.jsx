import { PageHero } from '@/components/ui/PageHero';
import { faqs } from '@/content/site';

export const metadata = {
  title: 'FAQ',
  description: 'Answers to common questions about Falcon AI strategy, development, deployment, and support.',
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Common questions about working with Falcon."
        description="A quick look at how Falcon approaches AI strategy, custom development, and long-term support."
      />
      <section className="section surface-light">
        <div className="container stack-lg">
          {faqs.map((faq) => (
            <article className="faq-card" key={faq.question}>
              <h2>{faq.question}</h2>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
