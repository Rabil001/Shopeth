import { SectionHeading } from '@/components/ui/SectionHeading';

export function Section({ eyebrow, title, description, tone = 'dark' }) {
  return (
    <section className={`section ${tone === 'light' ? 'surface-light' : 'surface-dark'}`}>
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} invert={tone !== 'light'} />
      </div>
    </section>
  );
}
