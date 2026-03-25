import Link from 'next/link';

const tickerItems = [
  { icon: 'fa-aws', label: 'AWS' },
  { icon: 'fa-behance', label: 'Behance' },
  { icon: 'fa-bitbucket', label: 'Bitbucket' },
  { icon: 'fa-deezer', label: 'Deezer' },
  { icon: 'fa-discord', label: 'Discord' },
  { icon: 'fa-grav', label: 'Grav' },
];

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
        <div className="hero-divider" aria-hidden="true" />
        <p className="hero-copy">
          Tailored AI systems built for your business goals.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/contact">
            Book a call
          </Link>
          <Link className="button button-secondary" href="/about">
            Why we build Falcon
          </Link>
        </div>
        <div className="hero-ticker" aria-label="Featured platforms">
          <div className="hero-ticker-track">
            {[...tickerItems, ...tickerItems].map((item, index) => (
              <div className="hero-ticker-item" key={`${item.label}-${index}`}>
                <i aria-hidden="true" className={`fa-brands ${item.icon}`} />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
