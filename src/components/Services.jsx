import SpotlightCard from '../bits/SpotlightCard';
import TextType from '../bits/TextType';
import useReveal from '../useReveal';

const SERVICES = [
  {
    tag: 'whole house or just part of it',
    title: 'House Clearance & Partial Clearances',
    desc: 'Full house clearances or just a few rooms — lofts, garages, kitchens and more. Everything removed, loaded and disposed of responsibly. We take everything and leave all areas clean and tidy on job completion. No job too big or too small.',
    icon: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>,
  },
  {
    tag: 'studios, rooms & flats',
    title: 'Room & Small Flat Moves',
    desc: 'Studios, single rooms and small flats moved with the same care as a much bigger job.',
    icon: <path d="M3 21h18M5 21V8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v13M13 21V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v16" />,
  },
  {
    tag: 'desks, files & equipment',
    title: 'Small Office & Business Moves',
    desc: 'Desks, files and equipment relocated with minimal disruption to the working day.',
    icon: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 10h18M9 4v16" /></>,
  },
  {
    tag: 'sofas, beds & white goods',
    title: 'Furniture Disposal',
    desc: 'Old sofas, beds and white goods collected and disposed of the right way. We take everything and leave all areas clean and tidy on job completion.',
    icon: <path d="M2 20h20M4 20V9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v11M12 7v13M9 20l1-6h4l1 6" />,
  },
  {
    tag: 'one item to a full load',
    title: 'Single Item to Full Van Loads',
    desc: 'One armchair or a van packed floor to ceiling — priced fairly either way.',
    icon: <path d="M3 12h18M3 12l3-5h12l3 5M3 12v7h18v-7M7 12v7M17 12v7M7 9V7h10v2" />,
  },
  {
    tag: 'marketplace collections',
    title: 'eBay & Gumtree Collections',
    desc: "Marketplace collections and deliveries so you don't have to make two trips.",
    icon: <path d="M21 8l-9-5-9 5 9 5 9-5zM3 8v8l9 5 9-5V8M12 13v8" />,
  },
  {
    tag: 'in, out & between terms',
    title: 'Student Moves',
    desc: 'In, out or between term-time addresses — quick, fairly priced and flexible.',
    icon: <path d="M22 10L12 4 2 10l10 6 10-6zM6 12.5V17c0 1.5 3 3 6 3s6-1.5 6-3v-4.5" />,
  },
  {
    tag: 'to & from storage',
    title: 'Storage Moves',
    desc: 'Collections and drop-offs to and from self-storage, whenever it suits you.',
    icon: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
  },
];

export default function Services() {
  const ref = useReveal();

  return (
    <section className="section" id="services">
      <div className="wrap" ref={ref}>
        <div className="section-head center reveal">
          <span className="eyebrow">What we handle</span>
          <h2>
            Every size of small move,{' '}
            <TextType
              as="em"
              className="head-type"
              text={['done properly.', 'handled with care.', 'kept simple.', 'cleared with care.']}
              typingSpeed={45}
              deletingSpeed={22}
              pauseDuration={1600}
              initialDelay={400}
              cursorCharacter=""
            />
          </h2>
          <p className="section-sub">From house clearances and partial clearances across Bournemouth, Christchurch and Poole — to single items, rooms and small flats. BCP Man and Small Van handles the jobs a full removals firm is too big for, with a uniformed, protective-blanket-and-straps standard on every one.</p>
        </div>

        <div className="service-grid">
          {SERVICES.map((s, i) => (
            <div key={s.title} className={`reveal reveal-delay-${(i % 3) + 1}`}>
              <SpotlightCard className="service-card reactbits-spotlight">
                <a className="service-link" href="#quote" aria-label={`${s.title} — get a free quote`}>
                  <div className="service-topline">
                    <span className="service-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{s.icon}</svg>
                    </span>
                    <span className="service-num">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <span className="service-type">{s.tag}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <span className="service-go">
                    Get a free quote
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </a>
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}