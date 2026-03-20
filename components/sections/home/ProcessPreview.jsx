import Link from 'next/link';
import { processSteps } from '@/content/process';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function ProcessPreview() {
  return (
    <section className="section surface-light parallax-band">
      <div className="container stack-lg">
        <SectionHeading
          eyebrow="Process"
          title="A structured path from discovery to deployment."
          description="Falcon guides each engagement through clear stages so businesses know what is being built, why it matters, and how it will be supported."
        />
        <div className="timeline-preview">
          {processSteps.map((step) => (
            <article className="timeline-item" key={step.title}>
              <p className="eyebrow">{step.eyebrow}</p>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
        <Link className="button button-secondary" href="/process">
          View process
        </Link>
      </div>
    </section>
  );
}
