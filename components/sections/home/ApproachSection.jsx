import { SectionHeading } from '@/components/ui/SectionHeading';

const approachSteps = [
  {
    title: 'Discovery',
    description: 'Understand the business and operating reality.',
  },
  {
    title: 'Strategy',
    description: 'Define a clear AI objective aligned with priorities.',
  },
  {
    title: 'Development',
    description: 'Build a custom solution designed for the specific use case.',
  },
  {
    title: 'Adoption',
    description: 'Support adoption with follow-up, maintenance, and iteration.',
  },
];

export function ApproachSection() {
  return (
    <section className="section approach-section">
      <div className="approach-bg" aria-hidden="true">
        <img
          src="https://i.postimg.cc/jjj5JrsM/pexels-cottonbro-6805161.jpg"
          alt=""
        />
      </div>
      <div className="container">
        <div className="approach-header-wrapper">
          <SectionHeading
            title="Falcon is built to deliver real solutions, not generic AI promises."
            description="We bridge the gap between AI potential and business reality with a delivery path designed for production-ready adoption."
            invert
          />
        </div>
        <div className="card-grid">
          {approachSteps.map((step) => (
            <article className="approach-card reveal-card" key={step.title}>
              <div className="approach-card-header">
                <div className="approach-card-title-group">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                <div className="approach-card-icon">
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
              <div className="approach-card-visual">
                {/* Visual placeholder to match the design style */}
                <div className="visual-element"></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
