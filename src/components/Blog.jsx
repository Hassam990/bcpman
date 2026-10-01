import { useState } from 'react';
import useReveal from '../useReveal';

const POSTS = [
  {
    slug: 'how-to-prepare-for-a-man-and-van-move',
    date: 'September 2026',
    tag: 'Moving Tips',
    title: 'How to Prepare for a Man and Van Move',
    summary: 'A few simple things you can do before we arrive that make the whole job quicker, smoother and cheaper for you.',
    body: [
      'The more prepared you are when we turn up, the faster the job goes — and with hourly rates that matters. Here\'s what makes a real difference:',
      '**Box everything you can.** Loose items take three times as long to load. Charity shop boxes, supermarket cardboard, whatever you can get hold of. Label them with the room they\'re going to at the other end.',
      '**Dismantle flat-pack furniture the night before.** Beds, wardrobes, desks — if they went up with an Allen key they\'ll come apart with one too. Saves a big chunk of time on the day.',
      '**Clear a path.** From the room to the front door and from the front door to where the van will park. We\'ll protect floors and doorframes, but a clear run is the single biggest time saver.',
      '**Tell us about the tricky bits upfront.** Tight staircase? Narrow hallway? A very heavy wardrobe? The more we know before we arrive the better we can plan. Just message or call ahead.',
      '**Have a kettle on.** Not compulsory, but always appreciated. ☕',
    ],
  },
  {
    slug: 'what-to-expect-from-a-house-clearance',
    date: 'September 2026',
    tag: 'House Clearance',
    title: 'What to Expect from a House Clearance',
    summary: 'Whether it\'s a full clearance or just a few rooms, here\'s exactly how we handle it — and what happens to the stuff we take away.',
    body: [
      'House clearances can feel daunting, especially if it\'s a family home or an estate situation. Here\'s how we keep it straightforward:',
      '**You tell us what\'s staying, we take everything else.** Walk round with us at the start, point out anything that isn\'t going, and we\'ll handle the rest. You don\'t need to be there the whole time if you\'d rather not be.',
      '**We take everything — and we mean everything.** Old furniture, white goods, bags of rubbish, carpets, garden stuff. If it\'s in the property and you want it gone, it goes.',
      '**Everything is disposed of responsibly.** As a licensed waste carrier registered with the Environment Agency, we can\'t just fly-tip — and we wouldn\'t anyway. Usable items go to charity where possible. Everything else goes through licensed disposal routes.',
      '**We leave the place clean and tidy.** Every room, every area we\'ve worked in. When we\'re done you shouldn\'t need to go back in with a bin bag.',
      '**Quotes are honest and fixed.** We\'ll give you a price before we start. No surprises at the end.',
    ],
  },
  {
    slug: 'moving-a-single-heavy-item',
    date: 'August 2026',
    tag: 'Moving Tips',
    title: 'Moving a Single Heavy Item — Sideboard, Sofa or Fridge?',
    summary: 'You don\'t need a full removal firm for one item. Here\'s how we handle single collections safely, and why a helper makes all the difference.',
    body: [
      'We get calls all the time from people who\'ve bought something on Facebook Marketplace or just need one heavy piece moved — and they\'re not sure if it\'s worth calling a man and van for "just one thing." It absolutely is.',
      '**One item is never just one item in terms of effort.** A two-seater sofa is manageable. A corner sofa, an American fridge-freezer, a heavy oak sideboard or a chest of drawers up a tight staircase — these jobs need two people and the right kit.',
      '**A helper comes along when the job calls for it.** We\'re not just one person. If your move needs an extra pair of hands, we bring one. You won\'t be left watching someone struggle solo with something that needs two people.',
      '**We come equipped.** Furniture dollies, moving straps, protective blankets, floor protection. The stuff that stops your door frames, walls and floors getting marked in the process.',
      '**The quote is for the job, not the headcount.** You get a fair price for what needs doing. Give us the dimensions and a description and we\'ll tell you exactly what\'s involved.',
      'So if your mum needs a sideboard moving — give us a call. That\'s exactly what we\'re here for. 👍',
    ],
  },
  {
    slug: 'bcp-area-guide-for-movers',
    date: 'August 2026',
    tag: 'Local Guide',
    title: 'Moving in BCP — What You Need to Know About Bournemouth, Christchurch & Poole',
    summary: 'Parking restrictions, beach road access, and the areas we cover most. A local\'s guide to moving in the BCP conurbation.',
    body: [
      'Moving in the BCP area has its own quirks. Having done it for 20 years, here\'s what we\'ve learned:',
      '**Parking is always the first problem.** In Bournemouth town centre, Southbourne and parts of Boscombe, on-street parking for a van can be genuinely difficult. It\'s worth checking in advance whether you need to apply to the council for a temporary parking suspension on the day.',
      '**Beach roads in summer.** If you\'re moving to or from anywhere near the seafront between June and September, factor in extra time. The A338, Sandbanks Road and the Bournemouth seafront approach can add 20–30 minutes to a short journey.',
      '**We cover more than just BCP.** Ferndown, Wimborne, Ringwood, Verwood, Wareham, Swanage, Lymington — if it\'s within reasonable distance, we\'ll come. Just ask.',
      '**Estate agents and completion day.** If you\'re moving on completion day, build in some flexibility. Keys getting delayed by even an hour can knock the whole day out. We\'re used to it — just keep us posted on the morning.',
      '**Storage? No problem.** There are several self-storage sites across BCP. If you\'re in a chain and need to store before moving in, we can do the move-out and the move-in as two separate jobs.',
    ],
  },
];

function PostCard({ post, onOpen }) {
  return (
    <article className="blog-card reveal">
      <div className="blog-card-meta">
        <span className="blog-tag">{post.tag}</span>
        <span className="blog-date">{post.date}</span>
      </div>
      <h3>{post.title}</h3>
      <p>{post.summary}</p>
      <button className="btn btn-outline blog-read-btn" onClick={() => onOpen(post)}>
        Read more
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </button>
    </article>
  );
}

function PostModal({ post, onClose }) {
  if (!post) return null;
  return (
    <div className="blog-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label={post.title}>
      <div className="blog-modal" onClick={e => e.stopPropagation()}>
        <button className="blog-modal-close" onClick={onClose} aria-label="Close post">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
        <div className="blog-modal-meta">
          <span className="blog-tag">{post.tag}</span>
          <span className="blog-date">{post.date}</span>
        </div>
        <h2>{post.title}</h2>
        <div className="blog-modal-body">
          {post.body.map((para, i) => {
            // Render **bold** markdown-style inline
            const parts = para.split(/\*\*(.*?)\*\*/g);
            return (
              <p key={i}>
                {parts.map((part, j) =>
                  j % 2 === 1 ? <strong key={j}>{part}</strong> : part
                )}
              </p>
            );
          })}
        </div>
        <div className="blog-modal-cta">
          <a className="btn btn-accent" href="#quote" onClick={onClose}>Get A Free Quote</a>
          <a className="btn btn-ghost-dark" href="https://wa.me/447922227398" target="_blank" rel="noopener">WhatsApp Us</a>
        </div>
      </div>
    </div>
  );
}

export default function Blog() {
  const ref = useReveal();
  const [active, setActive] = useState(null);

  return (
    <section className="section" id="blog">
      <div className="wrap" ref={ref}>
        <div className="section-head center reveal">
          <span className="eyebrow">Helpful advice</span>
          <h2>Tips, guides &amp; <em>local know-how</em></h2>
          <p className="section-sub">Straight-talking advice on moving, clearances and getting the most out of a man and van service in the BCP area.</p>
        </div>
        <div className="blog-grid">
          {POSTS.map(post => (
            <PostCard key={post.slug} post={post} onOpen={setActive} />
          ))}
        </div>
      </div>
      <PostModal post={active} onClose={() => setActive(null)} />
    </section>
  );
}
