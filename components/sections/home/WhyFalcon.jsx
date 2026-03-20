import { SectionHeading } from '@/components/ui/SectionHeading';

export function WhyFalcon() {
  return (
    <section className="section surface-dark">
      <div className="container two-column-grid align-start">
        <SectionHeading
          eyebrow="Why Falcon"
          title="Built for businesses that need an AI partner, not just a technical vendor."
          description="Falcon combines strategy, development, implementation, and support to help businesses adopt AI with confidence."
          invert
        />
        <article className="glass-card glow-card">
          <ul className="benefit-list">
            <li>Business understanding before model development</li>
            <li>Goals shaped around priorities and measurable outcomes</li>
            <li>Custom systems adapted to a specific use case</li>
            <li>Ongoing support after deployment</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
