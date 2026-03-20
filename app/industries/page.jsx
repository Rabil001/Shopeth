import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { industries } from '@/content/industries';

export const metadata = {
  title: 'Industries',
  description: 'See how Falcon adapts AI solutions for tech companies and IT-focused businesses.',
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="AI solutions tailored to operational realities in tech and IT environments."
        description="Falcon adapts strategy, system design, and implementation to the specific needs of growing digital businesses."
      />
      {industries.map((industry, index) => (
        <Section
          key={industry.title}
          eyebrow={industry.eyebrow}
          title={industry.title}
          description={industry.description}
          tone={index % 2 === 0 ? 'light' : 'dark'}
        />
      ))}
    </>
  );
}
