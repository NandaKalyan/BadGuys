import { useState } from "react";

const NAV_LINKS = ["Den", "Pack", "Hunt", "Prowl"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-10 flex items-center justify-between px-5 py-4 sm:px-8 sm:py-5">
        {/* Logo */}
        <div className="flex flex-row items-center gap-3">
          <span
            className="text-[21px] tracking-tight text-white sm:text-[26px]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Mainframe&reg;
          </span>
          <span
            aria-hidden="true"
            className="select-none text-[25px] text-white sm:text-[30px]"
            style={{ letterSpacing: "-0.02em" }}
          >
            ✳︎
          </span>
        </div>

        {/* Desktop nav links, visually centered */}
        <nav className="pointer-events-auto absolute left-1/2 hidden -translate-x-1/2 flex-row text-[23px] text-white md:flex">
          {NAV_LINKS.map((link, i) => (
            <span key={link} className="flex flex-row">
              <a href="#" className="transition-opacity hover:opacity-60">
                {link}
              </a>
              {i < NAV_LINKS.length - 1 && <span>,&nbsp;</span>}
            </span>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#"
          className="hidden text-[23px] text-white underline underline-offset-2 transition-opacity hover:opacity-60 md:block"
        >
          Join the pack
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="flex flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className="h-[2px] w-6 bg-white transition-all duration-300"
            style={
              open
                ? { transform: "rotate(45deg) translateY(7px)" }
                : { transform: "none" }
            }
          />
          <span
            className="h-[2px] w-6 bg-white transition-opacity duration-300"
            style={{ opacity: open ? 0 : 1 }}
          />
          <span
            className="h-[2px] w-6 bg-white transition-all duration-300"
            style={
              open
                ? { transform: "rotate(-45deg) translateY(-7px)" }
                : { transform: "none" }
            }
          />
        </button>
      </header>

      {/* Mobile overlay */}
      <div
        className="fixed inset-0 z-[9] flex flex-col items-start justify-center gap-8 bg-white/95 px-8 backdrop-blur-sm transition-opacity duration-300 md:hidden"
        style={{
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
        }}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href="#"
            className="text-[32px] font-medium text-black"
            onClick={() => setOpen(false)}
          >
            {link}
          </a>
        ))}
        <a
          href="#"
          className="text-[32px] font-medium text-black underline underline-offset-2"
          onClick={() => setOpen(false)}
        >
          Join the pack
        </a>
      </div>
    </>
  );
}
