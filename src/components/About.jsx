import useReveal from '../useReveal';

export default function About() {
  const ref = useReveal();
  return (
    <section className="section" id="about">
      <div className="wrap about-grid" ref={ref}>
        <div className="about-media reveal">
          <div className="about-frame"><img src="assets/images/van-3.jpg" alt="Owner of BCP Man And Small Van beside the van" /></div>
          <span className="about-tag">20 years in removals</span>
        </div>
        <div className="about-copy">
          <div className="section-head reveal" style={{ marginBottom: 24 }}>
            <h2>Two decades of handling things <em>properly</em></h2>
          </div>
          <p className="reveal reveal-delay-1">Twenty years in the removals industry, covering everything from single-item collections to full house moves, locally and nationwide.</p>
          <p className="reveal reveal-delay-2">Several of those years were spent working for an auction house — collecting, packing and delivering antiques, collectibles and vintage furniture. That's the same level of care every job gets now, whatever size it is.</p>
          <a className="btn btn-outline reveal reveal-delay-3" href="#quote">Get A Free Quote</a>
        </div>
      </div>
    </section>
  );
}