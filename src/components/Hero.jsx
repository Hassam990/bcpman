import TextType from '../bits/TextType';

export default function Hero() {
  return (
    <section className="hero">
      <div className="noise" aria-hidden="true"></div>
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker reveal">Man &amp; van help — BCP and surrounding areas</p>
          <h1 className="reveal">
            One van, one driver,{' '}
            <TextType
              as="span"
              className="hero-type"
              text={['every small move.', 'furniture & flat moves.', 'collections & deliveries.', 'clearances done right.']}
              typingSpeed={55}
              deletingSpeed={26}
              pauseDuration={1800}
              initialDelay={900}
              cursorCharacter=""
            />
          </h1>
          <p className="hero-sub reveal reveal-delay-1">From a single item that won't fit in the car to a full van load for a flat, studio or office — collections, deliveries and clearances, handled personally from start to finish. We don't do full house removals, but almost everything smaller is exactly what we're set up for.</p>
          <div className="hero-cta reveal reveal-delay-2">
            <a className="btn btn-accent" href="#quote">Get A Free Quote</a>
            <a className="btn btn-ghost" href="https://wa.me/447922227398" target="_blank" rel="noopener">WhatsApp Us</a>
          </div>
          <div className="hero-trust reveal reveal-delay-3">
            <div className="trust-item"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z"/></svg> Fully insured</div>
            <div className="trust-item"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h15l3 5v7h-3M3 6v12h3M16 11h5"/><circle cx="7.5" cy="18" r="2"/><circle cx="17.5" cy="18" r="2"/></svg> Licensed waste carrier</div>
            <div className="trust-item"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg> Short-notice availability</div>
          </div>
        </div>
        <div className="hero-media reveal reveal-delay-1">
          <div className="hero-frame">
            <img src="assets/images/van-2.jpg" alt="BCP Man And Small Van Vauxhall van, loaded and ready" className="hero-img" />
            <span className="hero-note">still the one<br />who turns up</span>
          </div>
        </div>
      </div>
    </section>
  );
}