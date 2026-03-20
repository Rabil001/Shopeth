import { SectionHeading } from '@/components/ui/SectionHeading';

export function ChallengeSection() {
  return (
    <section className="section surface-light">
      <div className="container two-column-grid">
        <SectionHeading
          eyebrow="The challenge"
          title="Many businesses want AI, but struggle to connect it to real priorities."
          description="Adoption fails when the solution comes before the business goal. Falcon begins with clarity so the system you build actually fits your operations."
        />
        <div className="panel floating-panel">
          <p>
            Falcon focuses on business context first: goals, workflows, team priorities, and the role AI should play in measurable progress.
          </p>
        </div>
      </div>
    </section>
  );
}
