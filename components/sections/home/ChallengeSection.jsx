'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function ChallengeSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section surface-brand challenge-section">
      <div className="container">
        {/* Top Row: Left-aligned Header + 3 Visuals */}
        <div className="challenge-top">
          <div className="challenge-header-left">
            <h2 className="animated-heading">
              <span className={activeIndex === 0 ? 'active' : ''}>
                Many businesses want AI,
              </span>{' '}
              <span className={activeIndex === 1 ? 'active' : ''}>
                but struggle to connect it
              </span>{' '}
              <span className={activeIndex === 2 ? 'active' : ''}>
                to real priorities.
              </span>
            </h2>
            <p className="large-p">
              Adoption fails when the solution comes before the business goal. Falcon begins with clarity so the system you build actually fits your operations.
            </p>
          </div>
          <div className="challenge-visual-grid">
            <div className={`challenge-visual-item ${activeIndex === 0 ? 'active' : ''}`}>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
                alt="Collaborative AI Strategy"
              />
            </div>
            <div className={`challenge-visual-item ${activeIndex === 1 ? 'active' : ''}`}>
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
                alt="Custom AI Development"
              />
            </div>
            <div className={`challenge-visual-item ${activeIndex === 2 ? 'active' : ''}`}>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
                alt="Enterprise Implementation"
              />
            </div>
          </div>
        </div>

        {/* Bottom Row: Header/Stat + 3 Info Cards */}
        <div className="challenge-bottom">
          <div className="challenge-split-header">
            <h3>For everyone from startups to enterprise</h3>
            <div className="challenge-stat">
              <p>Trusted by organizations worldwide to deliver measurable business impact with production-ready AI systems.</p>
            </div>
          </div>

          <div className="challenge-card-grid">
            <div className="challenge-info-card">
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800" alt="Founder" />
              </div>
              <h4>Start with clarity</h4>
              <p>Before writing a line of code, we define the business goal that makes the technology worth building.</p>
            </div>

            <div className="challenge-info-card">
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1522071823991-b5ae72648558?auto=format&fit=crop&q=80&w=800" alt="Team" />
              </div>
              <h4>Build for reality</h4>
              <p>Custom models and systems designed to fit into your existing operational environment and team workflows.</p>
            </div>

            <div className="challenge-info-card">
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" alt="Enterprise" />
              </div>
              <h4>Scale with confidence</h4>
              <p>Long-term maintenance and monitoring ensure your AI continues to provide value as your company grows.</p>
            </div>
          </div>

          <div className="challenge-footer">
            <Link href="/services" className="button button-secondary-dark">
              View all services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
