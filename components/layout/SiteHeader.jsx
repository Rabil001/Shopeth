import Link from 'next/link';
import { navigation } from '@/lib/navigation';

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="announcement-bar">
        <div className="container announcement-inner">
          <p>Built for business clarity. See how.</p>
        </div>
      </div>
      <div className="nav-band">
        <div className="container header-inner">
          <Link className="brand-mark" href="/">
            <span className="brand-orb" aria-hidden="true" />
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
          <Link className="button button-primary" href="/contact">
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}
