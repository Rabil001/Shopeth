import Link from 'next/link';
import { navigation } from '@/lib/navigation';
import { siteConfig } from '@/content/site';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="eyebrow">Falcon</p>
          <p className="footer-copy">{siteConfig.description}</p>
        </div>
        <div>
          <p className="footer-heading">Pages</p>
          <ul className="footer-list">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="footer-heading">Primary action</p>
          <Link className="button button-secondary" href="/contact">
            Book a call
          </Link>
        </div>
      </div>
    </footer>
  );
}
