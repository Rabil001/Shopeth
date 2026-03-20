import { PageHero } from '@/components/ui/PageHero';
import { Section } from '@/components/ui/Section';
import { siteConfig } from '@/content/site';

export const metadata = {
  title: 'About',
  description: 'Learn how Falcon combines AI strategy, custom development, and long-term support.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Falcon"
        title="A business-first AI company built around understanding before building."
        description="Falcon partners with companies to define the right AI opportunity, design the right solution, and support adoption after launch."
      />
      <Section
        title="Why Falcon exists"
        description="Many businesses want AI, but struggle to connect it to actual operational goals. Falcon closes that gap by pairing strategic understanding with implementation."
      />
      <Section
        title="What makes Falcon different"
        description="We take time to understand the business, priorities, and workflows before writing a line of code. That leads to tailored AI systems with stronger long-term value."
        tone="light"
      />
      <Section
        title="Strategy and implementation in one partner"
        description="Falcon combines discovery, solution design, custom development, deployment, and support so businesses can move from idea to adoption with one team."
      />
      <Section
        title="Our operating values"
        description={siteConfig.values.join(' • ')}
        tone="light"
      />
    </>
  );
}
