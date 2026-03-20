import Link from 'next/link';

export function CTASection() {
  return (
    <section className="section surface-light">
      <div className="container cta-panel">
        <p className="eyebrow">Ready to explore the right AI solution?</p>
        <h2>Book a call with Falcon and start with business clarity.</h2>
        <p>
          Tell us about your priorities, your operational reality, and the opportunity you want AI to unlock.
        </p>
        <Link className="button button-primary" href="/contact">
          Book a call
        </Link>
      </div>
    </section>
  );
}
