import TiltedCard from '../bits/TiltedCard';
import useReveal from '../useReveal';

const SPECS = [
  ['Height', '4ft 6in', '(1.37m)'],
  ['Loading length', '8ft 4in', '(2.54m)'],
  ['Internal width', '5ft 7in', '(1.70m)'],
];

export default function VanSpecs() {
  const ref = useReveal();
  return (
    <section className="section" id="van">
      <div className="wrap van-grid" ref={ref}>
        <div className="van-media reveal">
          <TiltedCard
            imageSrc="assets/images/van-specs.jpg"
            altText="BCP Man And Small Van dimensions"
            containerHeight="440px"
            containerWidth="100%"
            imageHeight="440px"
            imageWidth="100%"
            rotateAmplitude={8}
            scaleOnHover={1.06}
            showMobileWarning={false}
            showTooltip={false}
          />
        </div>
        <div className="van-copy">
          <div className="section-head reveal" style={{ marginBottom: 24 }}>
            <h2>A Vauxhall built for the <em>everyday job</em></h2>
            <p className="section-sub">Compact enough for tight streets and lanes, with the space and height for day-to-day moves and drops.</p>
          </div>
          <ul className="spec-list">
            {SPECS.map(([k, v, unit], i) => (
              <li key={k} className={`reveal ${i ? 'reveal-delay-1' : ''}`}>
                <span className="spec-k">{k}</span>
                <span className="spec-v">{v} <small>{unit}</small></span>
              </li>
            ))}
          </ul>
          <a className="btn btn-outline reveal" href="#quote">Book The Van</a>
        </div>
      </div>
    </section>
  );
}