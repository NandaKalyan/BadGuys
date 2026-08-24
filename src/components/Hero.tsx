import { useEffect, useState } from "react";

function Arrow() {
  return <span aria-hidden="true" className="hero-arrow">→</span>;
}

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setVisible(true), 350);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <section className={`hero-overlay ${visible ? "hero-visible" : ""}`} aria-label="Wolf AI introduction">
      <div className="hero-top">
        <div className="top-status"><i /> THINK • CREATE • EVOLVE</div>
      </div>

      <div className="hero-left">
        <div className="eyebrow">THINK WISE.</div>
        <h1>
          <span>STAY WILD.</span>
          <strong>MAKE IMPACT.</strong>
        </h1>
        <div className="gold-rule" />
        <p className="hero-copy">
          Intelligence gives you options.<br />
          <em>Curiosity makes you unforgettable.</em>
        </p>
        <button className="hero-cta" type="button">
          <span className="play-icon">▶</span>
          BEGIN YOUR JOURNEY
        </button>
        <div className="hero-subline">Explore. Learn. Evolve. <Arrow /></div>
      </div>

      <div className="hero-right">
        <div className="quote-mark">“</div>
        <blockquote>
          Stay curious.<br />
          Keep growing.
          <strong>Leave a legacy.</strong>
        </blockquote>
        <div className="quote-rule" />
        <div className="hero-points">
          <div className="hero-point">
            <span className="point-icon">✦</span>
            <div><b>LEARN TODAY.</b><small>Knowledge is power,<br />curiosity is fuel.</small></div>
          </div>
          <div className="hero-point">
            <span className="point-icon">⌁</span>
            <div><b>GROW EVERYDAY.</b><small>Small steps now,<br />big changes later.</small></div>
          </div>
          <div className="hero-point">
            <span className="point-icon">★</span>
            <div><b>INSPIRE ALWAYS.</b><small>Be the reason someone<br />believes in good people.</small></div>
          </div>
        </div>
      </div>


      {/* <div className="hero-center-glow" aria-hidden="true" /> */}
      <div className="hero-bottom">
        <span>BE HUMBLE. STAY HUNGRY.</span>
        <span className="paw">✦</span>
        <span>BUILD YOURSELF. CHANGE THE WORLD.</span>
      </div>
    </section>
  );
}
