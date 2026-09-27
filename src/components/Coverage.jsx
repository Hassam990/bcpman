import useReveal from '../useReveal';

export default function Coverage() {
  const ref = useReveal();
  return (
    <section className="section route" id="coverage">
      <div className="wrap" ref={ref}>
        <div className="section-head reveal">
          <h2>Covering BCP <em>and the areas in between</em></h2>
          <p className="section-sub">Poole, Bournemouth, Christchurch and the surrounding areas — competitive rates, hourly or fixed-price quotes available.</p>
        </div>
        <div className="route-map reveal reveal-delay-1">
          <svg viewBox="0 0 1000 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Route map showing coverage across Poole, Bournemouth and Christchurch">
            <path className="route-path" d="M40,150 C160,60 260,190 420,110 C560,40 660,180 800,95 C860,60 900,85 950,70"/>
            <path className="route-path-progress" d="M40,150 C160,60 260,190 420,110 C560,40 660,180 800,95 C860,60 900,85 950,70"/>
            <g className="route-pin" transform="translate(40,150)">
              <circle r="6"/><text x="14" y="-10">Poole</text>
            </g>
            <g className="route-pin" transform="translate(420,110)">
              <circle r="6"/><text x="14" y="-14">Bournemouth</text>
            </g>
            <g className="route-pin" transform="translate(950,70)">
              <circle r="6"/><text x="-92" y="-14">Christchurch</text>
            </g>
          </svg>
        </div>
        <div className="route-foot reveal reveal-delay-2">
          <span><b>Coverage:</b> BCP and all surrounding areas</span>
          <span><b>Rates:</b> hourly or fixed-price quotes</span>
          <span><b>Notice:</b> often available short notice</span>
        </div>
      </div>
    </section>
  );
}