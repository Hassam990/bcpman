import { useState } from 'react';
import useTheme from '../useTheme';

const NAV = [
  ['Services', '#services'],
  ['Coverage', '#coverage'],
  ['About', '#about'],
  ['Get A Quote', '#quote'],
  ['Contact', '#contact'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useTheme();

  const close = () => setOpen(false);

  return (
    <header className="site-header" id="top">
      <div className="wrap header-inner">
        <a className="brand" href="#top" aria-label="BCP Man And Small Van home" onClick={close}>
          <img className="brand-logo" src="assets/images/logo.png" alt="BCP Man And Small Van logo" />
        </a>
        <nav className={`site-nav ${open ? 'open' : ''}`} aria-label="Main">
          <ul className="nav-list">
            {NAV.map(([label, href]) => (
              <li key={href}>
                <a href={href} onClick={open ? close : undefined}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-actions">
          <div className="theme-toggle" role="group" aria-label="Colour theme">
            {THEME_DOTS.map(([name, color]) => (
              <button
                key={name}
                className={`theme-dot ${theme === name ? 'active' : ''}`}
                type="button"
                data-theme-btn={name}
                style={{ background: color }}
                aria-label={`${name} theme`}
                aria-pressed={theme === name}
                onClick={() => setTheme(name)}
              />
            ))}
          </div>
          <a className="btn btn-phone" href="tel:+447922227398">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span>07922 227398</span>
          </a>
          <a className="btn btn-primary" href="#quote">Get A Quote</a>
          <button
            className={`nav-toggle ${open ? 'active' : ''}`}
            type="button"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen(o => !o)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

const THEME_DOTS = [
  ['gold', '#e3a548'],
  ['orange', '#c2572c'],
  ['blue', '#4fb3e0'],
];