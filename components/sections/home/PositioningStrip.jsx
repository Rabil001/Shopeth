export function PositioningStrip() {
  const items = ['Business-first discovery', 'Custom AI model development', 'Deployment, support, and maintenance'];

  return (
    <section className="positioning-strip">
      <div className="container strip-grid">
        {items.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </section>
  );
}
