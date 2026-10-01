const ITEMS = [
  'Room & Flat Moves',
  'Student Moves',
  'Office Moves',
  'House Clearance',
  'Furniture Disposal',
  'eBay & Gumtree Collections',
  'Storage Moves',
  'Single Item Collections',
  'Helper Available',
  'Short Notice Bookings',
];

export default function Marquee() {
  // Quadruple so the loop is seamless with no visible jump
  const repeated = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <section className="marquee" aria-label="Services ticker">
      <div className="marquee-track">
        {repeated.map((item, i) => (
          <span key={i} className="marquee-item">
            {item} <i aria-hidden="true">—</i>
          </span>
        ))}
      </div>
    </section>
  );
}