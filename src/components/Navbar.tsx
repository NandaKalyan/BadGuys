import { useState } from "react";

const NAV_LINKS = ["Home", "Explore", "Learn", "Resources", "About"];

function WolfLogo() {
  return (
    <svg
      className="wolf-logo"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10 9L25 17L32 12L39 17L54 9L50 29C49 43 41 53 32 57C23 53 15 43 14 29L10 9Z"
        fill="currentColor"
      />
      <path
        d="M17 18L27 22L32 18L37 22L47 18L44 30C43 39 38 46 32 49C26 46 21 39 20 30L17 18Z"
        fill="#090806"
      />
      <path d="M24 27L29 30L24 33V27Z" fill="currentColor" />
      <path d="M40 27L35 30L40 33V27Z" fill="currentColor" />
      <path d="M32 31L28 38L32 42L36 38L32 31Z" fill="currentColor" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-navbar">
      <div className="navbar-shell">
        <a href="#home" className="navbar-brand" aria-label="Wildmind home">
          <WolfLogo />
          <span>WILDMIND</span>
        </a>

        <nav className="navbar-links" aria-label="Primary navigation">
          {NAV_LINKS.map((link, index) => (
            <a
              key={link}
              href={index === 0 ? "#home" : `#${link.toLowerCase()}`}
              className={index === 0 ? "active" : ""}
            >
              <span>{link}</span>
              {index === 0 && <i aria-hidden="true" />}
            </a>
          ))}
        </nav>

        <a href="#join" className="navbar-cta">
          <span>Join The Pack</span>
          <span className="navbar-paw" aria-hidden="true">✦</span>
        </a>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((previous) => !previous)}
          className="navbar-menu-button"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={link === "Home" ? "#home" : `#${link.toLowerCase()}`}
            onClick={() => setOpen(false)}
          >
            {link}
          </a>
        ))}
        <a href="#join" onClick={() => setOpen(false)}>
          Join The Pack <span aria-hidden="true">✦</span>
        </a>
      </div>
    </header>
  );
}
