import { PageHero } from '@/components/ui/PageHero';
import { Timeline } from '@/components/ui/Timeline';
import { processSteps } from '@/content/process';

export const metadata = {
  title: 'Process',
  description: 'See how Falcon discovers, defines, builds, deploys, and supports AI solutions.',
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="From business understanding to deployment, Falcon follows a clear AI delivery path."
        description="Our process keeps strategy, implementation, and support aligned around real business outcomes."
      />
      <Timeline items={processSteps} />
    </>
  );
}
