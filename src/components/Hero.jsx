import TextType from '../bits/TextType';
import TiltedCard from '../bits/TiltedCard';
import useReveal from '../useReveal';

const STATS = [
  ['20', 'years in removals'],
  ['⭐⭐⭐⭐⭐', '5 star service'],
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
            <span className="hero-line">Man &amp; van,</span>
            <TextType
              as="span"
              className="hero-type"
              text={['small moves.', 'house clearances.', 'partial clearances.', 'man & van moves.', 'deliveries.']}
              typingSpeed={55}
              deletingSpeed={26}
              pauseDuration={1800}
              initialDelay={900}
              cursorCharacter=""
            />
          </h1>
          <p className="hero-sub reveal reveal-delay-1">BCP Man and Small Van covers Bournemouth, Christchurch, Poole and the surrounding areas. From a single item that won't fit in the car to a full van load for a flat, studio or office — collections, deliveries, house clearances and partial clearances, all handled personally from start to finish. A helper comes along when the job needs it, so nothing is too heavy or awkward. We don't do full house removals, but almost everything smaller is exactly what we're set up for.</p>
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
            <span className="trust-item"><span style={{fontSize:'16px',lineHeight:1}} aria-hidden="true">♻️</span> Licensed waste carrier</span>
          </div>
        </div>

        <div className="hero-media reveal reveal-delay-1">
          <div className="hero-ring" aria-hidden="true"></div>
          <div className="hero-frame">
            <TiltedCard
              imageSrc="assets/images/hero.jpg"
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
          <span className="hero-pill">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            Helper available when needed
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