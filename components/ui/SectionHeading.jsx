export function SectionHeading({ eyebrow, title, description, invert = false }) {
  return (
    <div className={`section-heading ${invert ? 'section-heading-invert' : ''}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
