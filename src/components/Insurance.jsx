import useReveal from '../useReveal';

const ITEMS = [
  {
    title: 'Goods In Transit Insurance',
    desc: 'Your belongings are covered while they\'re in the van.',
    icon: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z"/><path d="M9 12l2 2 4-4"/></>,
  },
  {
    title: 'Public Liability Insurance',
    desc: 'Full cover for peace of mind on every job, every time.',
    icon: <><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></>,
  },
  {
    title: 'Licensed Waste Carrier',
    desc: 'Registered with the Environment Agency for responsible disposal.',
    icon: null,
    emoji: '♻️',
  },
];

export default function Insurance() {
  const ref = useReveal();
  return (
    <section className="insure">
      <div className="wrap insure-grid" ref={ref}>
        {ITEMS.map((item, i) => (
          <div key={item.title} className={`insure-item reveal ${i ? 'reveal-delay-1' : ''}`}>
            <div className="insure-icon">
              {item.emoji
                ? <span className="insure-emoji" aria-hidden="true">{item.emoji}</span>
                : <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{item.icon}</svg>
              }
            </div>
            <div><h4>{item.title}</h4><p>{item.desc}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}