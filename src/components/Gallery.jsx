import TiltedCard from '../bits/TiltedCard';
import TextType from '../bits/TextType';
import useReveal from '../useReveal';

const PHOTOS = [
  {
    src: 'assets/images/van-4.jpg',
    alt: 'BCP van loading',
    cap: 'ready for anything',
    tag: 'leading, tying & wrapping',
  },
  {
    src: 'assets/images/van-1.jpg',
    alt: 'BCP van interior, packed and ready',
    cap: 'packed with care',
    tag: 'blankets, straps & protection',
  },
  {
    src: 'assets/images/van-5.jpg',
    alt: 'BCP van in service',
    cap: 'clean, cared for, ready',
    tag: 'your local small van',
  },
  {
    src: 'assets/images/van-2.jpg',
    alt: 'BCP van detail',
    cap: 'built for small moves',
    tag: 'one van, one driver',
  },
];

export default function Gallery() {
  const ref = useReveal();
  return (
    <section className="section section-alt" id="gallery">
      <div className="wrap" ref={ref}>
        <div className="section-head reveal">
          <h2>Our van, <em>ready to go</em></h2>
          <p className="section-sub">A quick look at the rig. Clean, cared for and ready whenever it's needed.</p>
        </div>
        <div className="gallery">
          {PHOTOS.map((p, i) => (
            <figure key={p.src} className={`g-item reveal ${i % 2 ? 'reveal-delay-1' : ''}`}>
              <TiltedCard
                imageSrc={p.src}
                altText={p.alt}
                containerHeight="300px"
                containerWidth="100%"
                imageHeight="300px"
                imageWidth="100%"
                rotateAmplitude={10}
                scaleOnHover={1.06}
                showMobileWarning={false}
                showTooltip={false}
              />
              <span className="g-cap">
                <TextType
                  as="span"
                  text={[p.cap, p.tag]}
                  loop
                  showCursor={false}
                  startOnVisible
                  initialDelay={400}
                  typingSpeed={42}
                  deletingSpeed={20}
                  pauseDuration={1600}
                />
              </span>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}