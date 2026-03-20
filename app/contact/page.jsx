import { PageHero } from '@/components/ui/PageHero';
import { ContactForm } from '@/components/ui/ContactForm';

export const metadata = {
  title: 'Contact',
  description: 'Book a call with Falcon to discuss your AI goals, business priorities, and implementation needs.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Book a call and start the right AI conversation for your business."
        description="Tell Falcon about your goals, current priorities, and where AI could support your business."
      />
      <section className="section surface-light">
        <div className="container contact-grid">
          <article className="panel">
            <p className="eyebrow">Why reach out</p>
            <h2>Start with clarity, not guesswork.</h2>
            <p>
              Falcon begins by understanding your business, identifying the right opportunity, and shaping an AI direction that fits your operations.
            </p>
          </article>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
