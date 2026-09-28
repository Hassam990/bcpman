import useReveal from '../useReveal';

const STEPS = [
  ['01', 'Message your postcodes', 'Send collection and delivery postcodes, what needs moving and your preferred date.'],
  ['02', 'We turn up on time', 'Uniformed, equipped with blankets and straps, ready to keep things safe.'],
  ['03', 'Job done, properly', 'Everything moved, delivered or cleared — with minimal fuss and maximum care.'],
];

export default function Steps() {
  const ref = useReveal();
  return (
    <section className="section" id="how">
      <div className="wrap" ref={ref}>
        <div className="section-head center reveal">
          <h2>Three steps to a <em>stress-free move</em></h2>
        </div>
        <div className="steps">
          {STEPS.map(([num, title, desc], i) => (
            <article key={num} className={`step reveal ${i ? 'reveal-delay-1' : ''}`}>
              <span className="step-num">{num}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}