import { useEffect, useState } from "react";

function Arrow() {
  return <span aria-hidden="true" className="hero-arrow">→</span>;
}

function CompassIcon() {
  return <span className="feature-icon">◈</span>;
}

function IdeaIcon() {
  return <span className="feature-icon feature-icon-light">✧</span>;
}

function LeadIcon() {
  return <span className="feature-icon">⌁</span>;
}

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setVisible(true), 350);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <section
      id="home"
      className={`hero-overlay ${visible ? "hero-visible" : ""}`}
      aria-label="Wildmind introduction"
    >
      <div className="hero-left">
        <div className="eyebrow">WELCOME TO THE WILDMIND</div>

        <h1>
          <span className="hero-title-white">SHARP MIND.</span>
          <span className="hero-title-gold">BOLD MOVES.</span>
          <span className="hero-title-white">REAL CHANGE.</span>
        </h1>

        <div className="gold-rule" />

        <p className="hero-copy">
          Ideas spark everything.<br />
          We challenge the ordinary,<br />
          design the exceptional,<br />
          and build a future worth remembering.
        </p>

        <div className="hero-actions">
          <button className="hero-cta" type="button">
            START EXPLORING
            <Arrow />
          </button>

          <button className="intro-button" type="button">
            <span className="intro-play">▶</span>
            <span>WATCH INTRO</span>
          </button>
        </div>

        <div className="hero-stats" aria-label="Wildmind statistics">
          <div className="hero-stat">
            <span className="stat-icon">♧</span>
            <div>
              <strong>10K+</strong>
              <small>Curious Minds</small>
            </div>
          </div>
          <div className="stat-divider" />
          <div className="hero-stat">
            <span className="stat-icon">◎</span>
            <div>
              <strong>120+</strong>
              <small>Ideas Shared</small>
            </div>
          </div>
          <div className="stat-divider" />
          <div className="hero-stat">
            <span className="stat-icon">ϟ</span>
            <div>
              <strong>∞</strong>
              <small>Possibilities</small>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="philosophy-heading">
          <span>OUR PHILOSOPHY</span>
          <i />
        </div>

        <blockquote>
          Not just learning.<br />
          Unlearning limits.<br />
          <strong>Rewriting</strong> tomorrow.
        </blockquote>

        <div className="quote-rule" />

        <div className="hero-points">
          <div className="hero-point">
            <CompassIcon />
            <div className="point-content">
              <b>DISCOVER</b>
              <small>
                Dive deep into ideas,<br />
                perspectives and possibilities.
              </small>
            </div>
            <span className="point-number">01</span>
          </div>

          <div className="hero-point">
            <IdeaIcon />
            <div className="point-content">
              <b>CRAFT</b>
              <small>
                Turn bold ideas into<br />
                meaningful creations.
              </small>
            </div>
            <span className="point-number">02</span>
          </div>

          <div className="hero-point">
            <LeadIcon />
            <div className="point-content">
              <b>LEAD</b>
              <small>
                Make an impact that<br />
                inspires generations.
              </small>
            </div>
            <span className="point-number">03</span>
          </div>
        </div>

        <div className="hero-quote">
          <span className="quote-open">“</span>
          <p>The future belongs to those who<br />question today.</p>
          <span className="quote-author">— WILDMIND CODE</span>
        </div>
      </div>

      <div className="hero-bottom" aria-hidden="true">
        <span className="scroll-indicator">
          <span className="scroll-mouse" />
          <small>SCROLL TO EXPLORE</small>
          <b>⌄</b>
        </span>
      </div>
    </section>
  );
}
