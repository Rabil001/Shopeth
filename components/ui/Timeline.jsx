export function Timeline({ items }) {
  return (
    <section className="section surface-light">
      <div className="container timeline-full">
        {items.map((item, index) => (
          <article className="timeline-row" key={item.title}>
            <div className="timeline-marker">0{index + 1}</div>
            <div className="timeline-copy">
              <p className="eyebrow">{item.eyebrow}</p>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
