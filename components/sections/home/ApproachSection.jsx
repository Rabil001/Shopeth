import { SectionHeading } from '@/components/ui/SectionHeading';

const steps = [
  'Understand the business and operating reality.',
  'Define a clear AI objective aligned with priorities.',
  'Build a custom solution designed for the specific use case.',
  'Support adoption with follow-up, maintenance, and iteration.',
];

export function ApproachSection() {
  return (
    <section className="section surface-dark cinematic-grid">
      <div className="container">
        <SectionHeading
          eyebrow="Falcon approach"
          title="Falcon is built to deliver real solutions, not generic AI promises."
          description="Our process turns business understanding into AI systems that can be deployed, maintained, and improved over time."
          invert
        />
        <div className="card-grid">
          {steps.map((step, index) => (
            <article className="glass-card reveal-card" key={step}>
              <span className="step-index">0{index + 1}</span>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
