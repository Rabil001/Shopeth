'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { navigation } from '@/lib/navigation';

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we've scrolled past the hero section (roughly 90% of viewport height)
      setIsScrolled(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="announcement-bar">
        <div className="container announcement-inner">
          <p>Built for business clarity. See how.</p>
        </div>
      </div>
      <div className="nav-band">
        <div className="container header-inner">
          <Link className="brand-mark" href="/">
            Falcon
          </Link>
          <nav aria-label="Primary navigation">
            <ul className="nav-list">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header-actions-wrapper">
            <Link className="nav-login-link" href="/login">
              Log in
            </Link>
            <Link className="button button-primary" href="/contact">
              Get started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
