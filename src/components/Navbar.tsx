import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";

const links = [
  { to: "/about", label: "About" },
  { to: "/treatments", label: "Treatments" },
  { to: "/blog", label: "Blog" },
  { to: "/testimonial", label: "Testimonial" },
  { to: "/e-magazine", label: "E-magazine" },
  { to: "/contact", label: "Contact Us" },
];

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
    );
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-8 bg-white/20 backdrop-blur-xl border border-cyan-300/40 shadow-2xl rounded-full px-10 py-3 opacity-0"
    >
      {links.map((link) => (
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
  );
};

export default Navbar;
