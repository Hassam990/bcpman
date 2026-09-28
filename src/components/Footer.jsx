const LINKS = [
  ['Services', '#services'],
  ['Coverage', '#coverage'],
  ['About', '#about'],
  ['Get A Quote', '#quote'],
  ['Gallery', '#gallery'],
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer" id="contact">
      <div className="wrap footer-grid">
        <div className="foot-brand">
          <img className="foot-logo" src="assets/images/logo.png" alt="BCP Man And Small Van logo" />
          <p>Friendly, fully insured man and van help for small moves, collections and clearances across Bournemouth, Christchurch, Poole and the surrounding areas.</p>
        </div>
        <nav className="foot-nav" aria-label="Footer">
          <h3>Explore</h3>
          <ul>
            {LINKS.map(([label, href]) => (
              <li key={href}><a href={href}>{label}</a></li>
            ))}
          </ul>
        </nav>
        <div className="foot-contact">
          <h3>Get In Touch</h3>
          <p><a href="tel:+447922227398">07922 227398</a></p>
          <p><a href="https://wa.me/447922227398" target="_blank" rel="noopener">Message on WhatsApp</a></p>
          <p><a href="mailto:info@bcpmanandsmallvan.co.uk">info@bcpmanandsmallvan.co.uk</a></p>
          <p>Bournemouth, Christchurch &amp; Poole<br />Dorset, UK</p>
        </div>
      </div>
      <div className="wrap foot-base">
        <p>&copy; {year} BCP Man And Small Van. All rights reserved.</p>
        <p><a href="https://www.bcpmanandsmallvan.co.uk">bcpmanandsmallvan.co.uk</a></p>
      </div>
    </footer>
  );
}