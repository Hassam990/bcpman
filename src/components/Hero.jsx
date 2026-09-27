import TextType from '../bits/TextType';
import TiltedCard from '../bits/TiltedCard';
import useReveal from '../useReveal';

const STATS = [
  ['20', 'years in removals'],
  ['1', 'van, one driver'],
  ['8', 'services on offer'],
];

export default function Hero() {
  const ref = useReveal();

  return (
    <section className="hero" ref={ref}>
      <div className="hero-bg" style={{ backgroundImage: "url('assets/images/van-5.jpg')" }} aria-hidden="true"></div>
      <div className="hero-overlay" aria-hidden="true"></div>
      <div className="hero-glow" aria-hidden="true"></div>
      <div className="noise" aria-hidden="true"></div>

      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="hero-badge reveal">
            <i aria-hidden="true"></i> Man &amp; van · BCP &amp; surrounding areas
          </span>
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
          <div className="hero-stats reveal reveal-delay-3">
            {STATS.map(([num, label]) => (
              <div className="hero-stat" key={num}>
                <b>{num}</b>
                <span>{label}</span>
              </div>
            ))}
          </div>
          <div className="hero-trust reveal reveal-delay-3">
            <span className="trust-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z"/></svg> Fully insured</span>
            <span className="trust-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h15l3 5v7h-3M3 6v12h3M16 11h5"/><circle cx="7.5" cy="18" r="2"/><circle cx="17.5" cy="18" r="2"/></svg> Licensed waste carrier</span>
          </div>
        </div>

        <div className="hero-media reveal reveal-delay-1">
          <div className="hero-ring" aria-hidden="true"></div>
          <div className="hero-frame">
            <TiltedCard
              imageSrc="assets/images/van-2.jpg"
              altText="BCP Man And Small Van Vauxhall van, loaded and ready"
              containerHeight="100%"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={9}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={false}
            />
          </div>
          <span className="hero-note">still the one<br />who turns up</span>
          <span className="hero-pill">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            Short-notice availability
          </span>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span></span>
        Scroll
      </div>
    </section>
  );
}