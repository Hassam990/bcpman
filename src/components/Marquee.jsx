const ITEMS = [
  'Room & Flat Moves',
  'Student Moves',
  'Office Moves',
  'House Clearance',
  'Furniture Disposal',
  'eBay & Gumtree Collections',
  'Storage Moves',
];

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <section className="marquee" aria-label="Services ticker">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            {item} <i aria-hidden="true">—</i>
          </span>
        ))}
      </div>
    </section>
  );
}