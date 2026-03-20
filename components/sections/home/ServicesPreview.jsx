import Link from 'next/link';
import { services } from '@/content/services';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function ServicesPreview() {
  return (
    <section className="section surface-light">
      <div className="container stack-lg">
        <SectionHeading
          eyebrow="Services"
          title="A full AI delivery path from strategy to support."
          description="Falcon combines consultative discovery with custom development and practical implementation."
        />
        <div className="card-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <p className="eyebrow">{service.eyebrow}</p>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
        <Link className="button button-secondary" href="/services">
          View all services
        </Link>
      </div>
    </section>
  );
}
