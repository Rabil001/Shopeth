import { HomeHero } from '@/components/sections/home/HomeHero';
import { PositioningStrip } from '@/components/sections/home/PositioningStrip';
import { ChallengeSection } from '@/components/sections/home/ChallengeSection';
import { ApproachSection } from '@/components/sections/home/ApproachSection';
import { ServicesPreview } from '@/components/sections/home/ServicesPreview';
import { IndustriesPreview } from '@/components/sections/home/IndustriesPreview';
import { ProcessPreview } from '@/components/sections/home/ProcessPreview';
import { WhyFalcon } from '@/components/sections/home/WhyFalcon';
import { CTASection } from '@/components/sections/home/CTASection';

export default function HomePage() {
  return (
    <div className="home-page">
      <HomeHero />
      <PositioningStrip />
      <ChallengeSection />
      <ApproachSection />
      <ServicesPreview />
      <IndustriesPreview />
      <ProcessPreview />
      <WhyFalcon />
      <CTASection />
    </div>
  );
}
