export function PageHero({ eyebrow, title, description }) {
  return (
    <section className="page-hero surface-dark">
      <div className="container stack-md">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-hero-copy">{description}</p>
      </div>
    </section>
  );
}
