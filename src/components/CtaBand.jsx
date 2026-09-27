import useReveal from '../useReveal';

export default function CtaBand() {
  const ref = useReveal();
  return (
    <section className="cta-band">
      <div className="noise" aria-hidden="true"></div>
      <div className="wrap cta-inner" ref={ref}>
        <div className="reveal">
          <h2>Got something to move?</h2>
          <p>Call or WhatsApp for an honest quote. No call-out games, just a helpful answer.</p>
        </div>
        <div className="cta-actions reveal reveal-delay-1">
          <a className="btn btn-accent" href="tel:+447922227398">Call 07922 227398</a>
          <a className="btn btn-ghost" href="https://wa.me/447922227398" target="_blank" rel="noopener">WhatsApp</a>
        </div>
      </div>
    </section>
  );
}