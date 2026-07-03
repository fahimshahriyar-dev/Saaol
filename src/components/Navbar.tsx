import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import gsap from "gsap";
import saaolLogo from "../assets/images/saaol_logo.png";
import saaolLogoWhite from "../assets/images/saaol_logo_white.png";

interface NavbarProps {
  whiteLogo?: boolean;
}

const aboutLinks = [
  { to: "/about", label: "About Us" },
  { to: "/about/dr-bimal-chhajer", label: "About Dr. Bimal Chhajer" },
  { to: "/about/mohon-rayhan", label: "About Poet Mohon Rayhan" },
  { to: "/about/patient-journey", label: "Patient Journey" },
  { to: "/about/saaol-webinar", label: "SAAOL Webinal" },
  { to: "/about/patients-instructions", label: "Instructions For Patients" },
];

const treatmentsLinks = [
  { to: "/treatments", label: "Treatments Overview" },
  { to: "/treatments/zero-oil-cooking", label: "Zero Oil Cooking" },
  { to: "/treatments/eecp-treatments", label: "EECP Treatments" },
  { to: "/treatments/lifestyle", label: "Lifestyle" },
  { to: "/treatments/saaol-detox", label: "SAAOL Detox" },
];

const routeLinks = [
  { to: "/blog", label: "Blog" },
  { to: "/testimonial", label: "Testimonial" },
  { to: "/book-content", label: "Book Content" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact Us" },
];

const Navbar = ({ whiteLogo }: NavbarProps) => {
  const navRef = useRef<HTMLElement>(null);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const treatmentsRef = useRef<HTMLDivElement>(null);
  const aboutTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const treatmentsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  const isAboutActive = aboutLinks.some((link) => location.pathname === link.to);
  const isTreatmentsActive = treatmentsLinks.some((link) => location.pathname === link.to);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
    );
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        aboutRef.current &&
        !aboutRef.current.contains(e.target as Node)
      ) {
        setAboutOpen(false);
      }
      if (
        treatmentsRef.current &&
        !treatmentsRef.current.contains(e.target as Node)
      ) {
        setTreatmentsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <Link to="/" className="fixed top-6 left-8 lg:left-16 z-50">
        <img src={whiteLogo ? saaolLogoWhite : saaolLogo} alt="SAAOL Logo" className="w-16 lg:w-20" />
      </Link>
      <nav
        ref={navRef}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-8 bg-white/20 backdrop-blur-xl border border-teal-300/40 shadow-2xl rounded-full px-10 py-3 opacity-0"
      >
      <div
        className="relative"
        ref={aboutRef}
        onMouseEnter={() => {
          if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current);
          setAboutOpen(true);
        }}
        onMouseLeave={() => {
          aboutTimeoutRef.current = setTimeout(() => setAboutOpen(false), 100);
        }}
      >
        <button
          onClick={() => setAboutOpen((prev) => !prev)}
          className={`text-sm font-semibold transition-colors duration-300 flex items-center gap-1 cursor-pointer ${
            isAboutActive
              ? "text-teal-600"
              : "text-slate-700 hover:text-teal-500"
          }`}
        >
          About
          <svg
            className={`w-3.5 h-3.5 transition-transform duration-200 ${
              aboutOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {aboutOpen && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white/90 backdrop-blur-xl border border-teal-300/40 shadow-2xl rounded-2xl py-2 transition-all duration-200">
            {aboutLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setAboutOpen(false)}
                className={({ isActive }) =>
                  `block px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-teal-600 bg-teal-50"
                      : "text-slate-700 hover:text-teal-500 hover:bg-teal-50/50"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>

      <div
        className="relative"
        ref={treatmentsRef}
        onMouseEnter={() => {
          if (treatmentsTimeoutRef.current) clearTimeout(treatmentsTimeoutRef.current);
          setTreatmentsOpen(true);
        }}
        onMouseLeave={() => {
          treatmentsTimeoutRef.current = setTimeout(() => setTreatmentsOpen(false), 100);
        }}
      >
        <button
          onClick={() => setTreatmentsOpen((prev) => !prev)}
          className={`text-sm font-semibold transition-colors duration-300 flex items-center gap-1 cursor-pointer ${
            isTreatmentsActive
              ? "text-teal-600"
              : "text-slate-700 hover:text-teal-500"
          }`}
        >
          Treatments
          <svg
            className={`w-3.5 h-3.5 transition-transform duration-200 ${
              treatmentsOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {treatmentsOpen && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white/90 backdrop-blur-xl border border-teal-300/40 shadow-2xl rounded-2xl py-2 transition-all duration-200">
            {treatmentsLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setTreatmentsOpen(false)}
                className={({ isActive }) =>
                  `block px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-teal-600 bg-teal-50"
                      : "text-slate-700 hover:text-teal-500 hover:bg-teal-50/50"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>

      {routeLinks.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            `text-sm font-semibold transition-colors duration-300 ${
              isActive
                ? "text-teal-600"
                : "text-slate-700 hover:text-teal-500"
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
    </>
  );
};

export default Navbar;
