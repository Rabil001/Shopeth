import Link from 'next/link';
import { industries } from '@/content/industries';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function IndustriesPreview() {
  return (
    <section className="section surface-dark">
      <div className="container stack-lg">
        <SectionHeading
          eyebrow="Industries"
          title="Tailored for tech companies and IT-driven teams."
          description="Falcon shapes AI solutions around sector-specific priorities, workflows, and implementation realities."
          invert
        />
        <div className="card-grid">
          {industries.map((industry) => (
            <article className="glass-card" key={industry.title}>
              <h3>{industry.title}</h3>
              <p>{industry.description}</p>
            </article>
          ))}
        </div>
        <Link className="button button-secondary button-secondary-dark" href="/industries">
          See industries
        </Link>
      </div>
    </section>
  );
}
