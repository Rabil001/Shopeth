import Link from 'next/link';

export function HomeHero() {
  return (
    <section className="hero-section">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Crect width='1600' height='900' fill='%23070914'/%3E%3C/svg%3E"
      >
        <source src="/videos/mixkit-busy-office-space-918-hd-ready.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />
      <div className="container hero-content">
        <h1>Custom AI solutions built around your business.</h1>
        <p className="hero-copy">
          Falcon helps businesses adopt AI by understanding their priorities first, defining the right goal, and delivering tailored systems with long-term support.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/contact">
            Book a call
          </Link>
          <Link className="button button-secondary" href="/services">
            Explore services
          </Link>
        </div>
      </div>
    </section>
  );
}
