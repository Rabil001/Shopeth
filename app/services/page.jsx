import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { services } from '@/content/services';

export const metadata = {
  title: 'Services',
  description: 'Explore Falcon AI strategy, custom model development, deployment, and support services.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="AI services designed around business clarity, custom development, and real adoption."
        description="Falcon supports the full path from strategy to implementation so businesses can deploy AI with confidence."
      />
      {services.map((service, index) => (
        <Section
          key={service.title}
          eyebrow={service.eyebrow}
          title={service.title}
          description={service.description}
          tone={index % 2 === 0 ? 'light' : 'dark'}
        />
      ))}
    </>
  );
}
