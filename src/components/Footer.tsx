import textBgVideo from "../assets/videos/text-background.mp4";

const socialLinks = [
  { label: "Facebook", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
];

const quickLinks1 = [
  { label: "About us", href: "#" },
  { label: "About Dr. Bimal", href: "#" },
  { label: "Patient Journey", href: "#" },
  { label: "SAAOL Webinar", href: "#" },
  { label: "Instructions for patients", href: "#" },
  { label: "Overview", href: "#" },
  { label: "Assess Risk", href: "#" },
];

const quickLinks2 = [
  { label: "Know Your Heart", href: "#" },
  { label: "Causes", href: "#" },
  { label: "Books", href: "#" },
  { label: "Treatments Overview", href: "#" },
  { label: "Zero oil cooking", href: "#" },
  { label: "EECP Treatments", href: "#" },
  { label: "Life Style", href: "#" },
  { label: "SAAOL Detox", href: "#" },
  { label: "SAAOL Book Content", href: "#" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="block"
          style={{
            width: "120vh",
            height: "100vw",
            transform: "rotate(90deg)",
            flexShrink: 0,
          }}
        >
          <source src={textBgVideo} type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 bg-[#064895]/50" />

      <div className="relative z-10 text-white px-4 lg:px-8 py-12 lg:py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-10">
            {/* Col 1 - Tagline + Social */}
            <div className="lg:col-span-2">
              <p className="text-base lg:text-lg leading-relaxed mb-6">
                Transforming heart health with Natural Heart Treatment & advanced EECP Therapy. Trust SAAOL Heart Center for a smarter, healthier heart journey.
              </p>
              <p className="text-sm font-semibold uppercase tracking-wider mb-3">
                Find us on:
              </p>
              <div className="flex gap-3">
                {socialLinks.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    aria-label={s.label}
                    className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center hover:bg-amber-400 transition-colors text-xs font-bold"
                  >
                    {s.label[0]}
                  </a>
                ))}
              </div>

              <div className="mt-6 space-y-3">
                <a
                  href="#"
                  className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors rounded-xl px-4 py-3 w-fit"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 20.5v-17l18 8.5-18 8.5z" />
                  </svg>
                  <span className="text-sm font-medium">Download on Google Play</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors rounded-xl px-4 py-3 w-fit"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="4" y="2" width="16" height="20" rx="2" />
                    <circle cx="12" cy="18" r="1" />
                  </svg>
                  <span className="text-sm font-medium">Download on the App Store</span>
                </a>
              </div>
            </div>

            {/* Col 2 - Quick Links 1 */}
            <div className="lg:col-span-1">
              <h4 className="text-base font-bold uppercase tracking-wider mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {quickLinks1.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-sm text-white/80 hover:text-amber-400 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 - Quick Links 2 */}
            <div className="lg:col-span-1">
              <h4 className="text-base font-bold uppercase tracking-wider mb-4">
                &nbsp;
              </h4>
              <ul className="space-y-2.5">
                {quickLinks2.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-sm text-white/80 hover:text-amber-400 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 - Contact */}
            <div className="lg:col-span-2">
              <h4 className="text-base font-bold uppercase tracking-wider mb-4">
                Contact us
              </h4>
              <div className="space-y-4 text-sm text-white/80 leading-relaxed">
                <div>
                  <span className="font-semibold text-white">Corporate Office:</span>
                  <br />
                  Saaol House 30-31, Jonapur Estate, Jonapur, New Delhi -110047
                </div>
                <div>
                  <span className="font-semibold text-white">Head Office:</span>
                  <br />
                  SAAOL Experience Center Dehradun (SAAOL Heart and Wellness Research Institute) Shivpuri, Hariyawala Kalan, Dehradun, Uttarakhand-248141
                </div>
                <div className="pt-2 space-y-1">
                  <a href="tel:18001212121" className="block hover:text-amber-400 transition-colors">
                    1800-1-21212121
                  </a>
                  <a href="mailto:info@saaol.com" className="block hover:text-amber-400 transition-colors">
                    info@saaol.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-6 border-t border-white/20 text-center text-sm text-white/60">
            Copyright &copy; 2025, SAAOL &ndash; All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
