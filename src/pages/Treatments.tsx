import { useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import Navbar from "../components/Navbar";
import heart from "../assets/images/heart.png";

// SVG icons
import eecpIcon from "../assets/svgs/EECP.svg";
import detoxIcon from "../assets/svgs/detox-therapy.svg";
import lifestyleIcon from "../assets/svgs/lifestyle-modification.svg";
import zeroOilIcon from "../assets/svgs/zero-oil.svg";

// IMPORTANT: Add this to your HTML <head> or global CSS:
// <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700;800;900&display=swap" rel="stylesheet">

const Treatments = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const heartContainerRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const scrollThrottle = useRef(false);

  const handleWheel = useCallback((e: WheelEvent) => {
    if (scrollThrottle.current) return;
    if (e.deltaY < 0) {
      scrollThrottle.current = true;
      
      const tl = gsap.timeline({
        onComplete: () => {
          navigate("/");
          setTimeout(() => { scrollThrottle.current = false; }, 1000);
        }
      });

      const totalDuration = 1.6;

      // 1. Cards return to corners (contents go with them naturally)
      tl.to(".card-eecp", { opacity: 0, x: -50, y: -50, duration: totalDuration, ease: "power2.inOut" }, 0);
      tl.to(".card-detox", { opacity: 0, x: 50, y: -50, duration: totalDuration, ease: "power2.inOut" }, 0);
      tl.to(".card-lifestyle", { opacity: 0, x: -50, y: 50, duration: totalDuration, ease: "power2.inOut" }, 0);
      tl.to(".card-zero-oil", { opacity: 0, x: 50, y: 50, duration: totalDuration, ease: "power2.inOut" }, 0);

      // 2. Right side header fades out and goes up
      tl.to(rightContentRef.current, { opacity: 0, y: -100, duration: totalDuration, ease: "power2.inOut" }, 0);

      // 3. Heart shrinks
      tl.to(heartContainerRef.current, { opacity: 0, scale: 0.3, duration: totalDuration, ease: "power2.inOut" }, 0);

      // 4. Title, logo, and navbar reverse out
      const chars = titleRef.current?.querySelectorAll(".char");
      if (chars && chars.length > 0) {
        tl.to(chars, {
          y: -60, opacity: 0, rotateX: 90, duration: 0.5, stagger: 0.025, ease: "power2.inOut"
        }, 0);
      }
      tl.to(".logo-img", { opacity: 0, y: -80, duration: totalDuration, ease: "power2.inOut" }, 0);
      tl.to("nav", { opacity: 0, y: -100, duration: totalDuration, ease: "power2.inOut" }, 0);
    }
  }, [navigate]);

  const handleCardMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;

    gsap.to(card, {
      duration: 0.4,
      rotateX,
      rotateY,
      transformPerspective: 1000,
      ease: "power2.out",
      overwrite: "auto"
    });
  }, []);

  const handleCardMouseLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      duration: 0.7,
      rotateX: 0,
      rotateY: 0,
      ease: "power3.out",
      overwrite: "auto"
    });
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    el.addEventListener("wheel", handleWheel, { passive: true });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [handleWheel]);

  useEffect(() => {
    // Initialize all elements to be hidden BEFORE rendering starts
    gsap.set(heartContainerRef.current, { opacity: 0, scale: 0.3 });
    gsap.set(rightContentRef.current, { opacity: 0, y: 20 });
    gsap.set(".logo-img", { opacity: 0, y: -80 });
    
    // Cards specific resets - positioned at corners
    gsap.set(".card-eecp", { opacity: 0, x: -50, y: -50 }); // Left top corner
    gsap.set(".card-detox", { opacity: 0, x: 50, y: -50 }); // Right top corner
    gsap.set(".card-lifestyle", { opacity: 0, x: -50, y: 50 }); // Bottom left corner
    gsap.set(".card-zero-oil", { opacity: 0, x: 50, y: 50 }); // Bottom right corner
    
    // Card text and descriptions reset
    gsap.set(".card-text", { opacity: 0, y: -30 });
    gsap.set(".card-btn", { opacity: 0, y: 30 });
    gsap.set(".card-icon", { opacity: 0, scale: 0.3 });

    const tl = gsap.timeline();

    // Logo entrance animation (matching navbar)
    tl.to(".logo-img", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 0);

    // 1. H1 Wave Reveal Animation (like hero section)
    const chars = titleRef.current?.querySelectorAll(".char");
    if (chars && chars.length > 0) {
      tl.fromTo(chars,
        { y: 80, opacity: 0, rotateX: -90 },
        { y: 0, opacity: 1, rotateX: 0, duration: 0.5, stagger: 0.03, ease: "power3.out" },
        "-=0.6"
      );
    }

    // 2. Heart scales from smaller to normal (like hero section)
    tl.to(heartContainerRef.current, { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" }, "-=0.4");
    
    // 3. Right side header content fades in
    tl.to(rightContentRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.6");

    // 4. Cards coming from 4 corners
    tl.to(".card-eecp", {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "power2.out"
    }, "-=0.2");

    tl.to(".card-detox", {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "power2.out"
    }, "-=0.6");

    tl.to(".card-lifestyle", {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "power2.out"
    }, "-=0.6");

    tl.to(".card-zero-oil", {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "power2.out"
    }, "-=0.6");

    // 5. Card text coming from top to bottom
    tl.to(".card-text", {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: "power2.out"
    }, "-=0.2");

    // 6. Icons coming from small to normal (synchronized with text)
    tl.to(".card-icon", {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      stagger: 0.05,
      ease: "back.out(1.5)"
    }, "<");

    // 7. Buttons coming from bottom to top (synchronized with text and icons)
    tl.to(".card-btn", {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: "power2.out"
    }, "<");

    // Float animation for heart
    gsap.to(".floating-heart", {
      y: -8,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    // Ripple effect animation for concentric circles
    gsap.to(".ripple-1", { scale: 1.03, opacity: 0.6, duration: 2.5, repeat: -1, yoyo: true, ease: "power1.inOut" });
    gsap.to(".ripple-2", { scale: 1.05, opacity: 0.35, duration: 3, repeat: -1, yoyo: true, ease: "power1.inOut", delay: 0.5 });
    gsap.to(".ripple-3", { scale: 1.07, opacity: 0.15, duration: 3.5, repeat: -1, yoyo: true, ease: "power1.inOut", delay: 1 });

  }, []);

  const titleLines = ["HEART CARE", "SOLUTIONS"];

  return (
    <section ref={sectionRef} className="relative h-screen w-screen overflow-hidden bg-slate-50 flex flex-col justify-center select-none pb-4 lg:pb-0">
      <Navbar />

      {/* Main Parent Container - positioning two parts at corners */}
      <div className="w-full px-8 lg:px-16 flex flex-col justify-center flex-1 relative z-10 py-4 lg:py-6 mt-12 lg:mt-0">
        <div className="mt-25 flex flex-col lg:flex-row justify-between items-stretch w-full gap-8 lg:gap-12 flex-1">
          
          {/* Left Column: Title & Heart Visualization - Top Left Corner */}
          <div className="w-full lg:w-5/12 flex flex-col justify-start items-center lg:items-start gap-4">
            
            {/* Title with wave reveal structure (same as Hero) */}
            <div className="w-full text-center lg:mt-6 lg:text-left perspective-1000">
              <h1 
                ref={titleRef} 
                className="text-5xl lg:text-6xl xl:text-7xl text-slate-900 flex flex-col bauhaus"
              >
                {titleLines.map((line, i) => (
                  <span key={i} className="flex overflow-hidden">
                    {line.split("").map((char, j) => (
                      <span key={j} className="char inline-block bauhaus opacity-0">
                        {char === " " ? "\u00A0" : char}
                      </span>
                    ))}
                  </span>
                ))}
              </h1>
            </div>

            {/* Heart with Concentric Rings */}
            <div ref={heartContainerRef} className="relative flex flex-col items-center justify-center w-full py-2 lg:py-4 opacity-0 flex-1 mt-8 lg:mt-12">
              {/* Concentric Rings / Ripples */}
              <div className="ripple-3 absolute w-[300px] h-[300px] lg:w-[650px] lg:h-[650px] rounded-full border border-teal-200/20 bg-teal-50/5 pointer-events-none" />
              <div className="ripple-2 absolute w-[250px] h-[250px] lg:w-[550px] lg:h-[550px] rounded-full border border-cyan-200/30 bg-cyan-50/5 pointer-events-none" />
              <div className="ripple-1 absolute w-[200px] h-[200px] lg:w-[450px] lg:h-[450px] rounded-full border border-sky-300/45 bg-sky-50/5 pointer-events-none" />

              {/* Heart Image */}
              <div className="floating-heart relative z-10 w-48 h-48 lg:w-[400px] lg:h-[400px] flex items-center justify-center">
                <img
                  src={heart}
                  alt="Heart Visualization"
                  className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(20,184,166,0.1)]"
                />
              </div>

              {/* Pill Badge */}
              <div className="mt-2 lg:mt-4 z-10">
                <span className="px-4 py-1.5 bg-[#002447] text-white text-[10px] lg:text-xs font-bold uppercase tracking-widest rounded-full shadow-md border border-blue-800/30">
                  100% Heart Care
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Descriptions & Grid Cards - Bottom Right Corner */}
          <div className="w-full lg:w-6/12 flex flex-col justify-end items-end flex-1">
            {/* Header Content */}
            <div ref={rightContentRef} className="mb-3 lg:mb-4 w-full opacity-0">
              <h2 className="text-lg font-extrabold text-[#002447] uppercase tracking-widest mb-1">
                OUR TREATMENTS
              </h2>
              <p className="text-slate-600 leading-relaxed">
                At SAAOL Heart Center, we offer a comprehensive approach to heart care
                that focuses on treating the root cause, not just the symptoms. Our scientifically
                backed therapies help improve heart health naturally and safely.
              </p>
            </div>

            {/* Grid Cards - Custom layout with varying widths */}
            <div className="grid grid-cols-12 gap-3 lg:gap-4 w-full flex-grow min-h-[300px]">
              
              {/* Card 1: EECP (Bigger width, from Top Left) */}
              <div 
                className="card-eecp opacity-0 treatment-card group col-span-6 lg:col-span-7 bg-gradient-to-br from-[#71BBE5]/10 to-[#A2DF88]/10 border border-[#71BBE5]/30 shadow-md rounded-2xl p-4 flex flex-col items-center text-center hover:from-[#71BBE5]/20 hover:to-[#A2DF88]/20 h-[300px] cursor-pointer"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="w-25 h-25 flex items-center justify-center mb-2">
                  <img src={eecpIcon} alt="EECP Icon" className="w-full h-full object-contain opacity-0 card-icon" />
                </div>
                <h3 className="card-text opacity-0 text-xl font-bold text-slate-800 mb-1">
                  Saaol Natural Bypass (EECP)
                </h3>
                <p className="card-text opacity-0 text-slate-500 leading-relaxed mb-3 flex-grow">
                  This non-invasive therapy improves heart blood flow, enhances oxygen delivery, reduces chest pain, and improves heart function naturally.
                </p>
                <button className="card-btn opacity-0 px-4 py-1 bg-gradient-to-r from-[#71BBE5] to-[#519BCA] hover:from-[#519BCA] hover:to-[#71BBE5] text-white font-semibold rounded-lg text-md shadow-sm hover:scale-105 active:scale-95 cursor-pointer mt-auto">
                  Know More
                </button>
              </div>

              {/* Card 2: Detox Therapy (Smaller width, from Top Right) */}
              <div 
                className="card-detox opacity-0 treatment-card group col-span-6 lg:col-span-5 bg-gradient-to-br from-[#71BBE5]/10 to-[#A2DF88]/10 border border-[#71BBE5]/30 shadow-sm rounded-2xl p-3 flex flex-col items-center text-center hover:from-[#71BBE5]/20 hover:to-[#A2DF88]/20 h-[300px] cursor-pointer"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="w-20 h-20 flex items-center justify-center mb-2">
                  <img src={detoxIcon} alt="Detox Icon" className="w-full h-full object-contain opacity-0 card-icon" />
                </div>
                <h3 className="card-text opacity-0 text-xl font-bold text-slate-800 mb-1">
                  Detox Therapy
                </h3>
                <p className="card-text opacity-0 text-slate-500 leading-relaxed mb-2 flex-grow">
                  Detox therapy cleanses toxins, improves circulation, reduces inflammation, and boosts heart vitality.
                </p>
                <button className="card-btn opacity-0 px-3 py-1 bg-gradient-to-r from-[#71BBE5] to-[#519BCA] hover:from-[#519BCA] hover:to-[#71BBE5] text-white font-semibold rounded-lg text-md shadow-sm hover:scale-105 active:scale-95 cursor-pointer mt-auto">
                  Know More
                </button>
              </div>

              {/* Card 3: Lifestyle Modification (Smaller width, from Bottom Left) */}
              <div 
                className="card-lifestyle opacity-0 treatment-card group col-span-6 lg:col-span-5 bg-gradient-to-br from-[#71BBE5]/10 to-[#A2DF88]/10 border border-[#71BBE5]/30 shadow-sm rounded-2xl p-3 flex flex-col items-center text-center hover:from-[#71BBE5]/20 hover:to-[#A2DF88]/20 h-[300px] cursor-pointer"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="w-20 h-20 flex items-center justify-center mb-2">
                  <img src={lifestyleIcon} alt="Lifestyle Icon" className="w-full h-full object-contain opacity-0 card-icon" />
                </div>
                <h3 className="card-text opacity-0 text-xl font-bold text-slate-800 mb-1">
                  Lifestyle Modification
                </h3>
                <p className="card-text opacity-0 text-slate-500 leading-relaxed mb-2 flex-grow">
                  Adopt healthy habits like stress management, exercise, and sleep to reverse heart disease.
                </p>
                <button className="card-btn opacity-0 px-3 py-1 bg-gradient-to-r from-[#71BBE5] to-[#519BCA] hover:from-[#519BCA] hover:to-[#71BBE5] text-white font-semibold rounded-lg text-md shadow-sm hover:scale-105 active:scale-95 cursor-pointer mt-auto">
                  Know More
                </button>
              </div>

              {/* Card 4: Zero Oil Cooking (Bigger width, from Bottom Right) */}
              <div 
                className="card-zero-oil opacity-0 treatment-card group col-span-6 lg:col-span-7 bg-gradient-to-br from-[#71BBE5]/10 to-[#A2DF88]/10 border border-[#71BBE5]/30 shadow-md rounded-2xl p-4 flex flex-col items-center text-center hover:from-[#71BBE5]/20 hover:to-[#A2DF88]/20 h-[300px] cursor-pointer"
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
              >
                <div className="w-20 h-20 flex items-center justify-center mb-2">
                  <img src={zeroOilIcon} alt="Zero Oil Icon" className="w-full h-full object-contain opacity-0 card-icon" />
                </div>
                <h3 className="card-text opacity-0 text-xl font-bold text-slate-800 mb-1">
                  Zero Oil Cooking
                </h3>
                <p className="card-text opacity-0 text-slate-500 leading-relaxed mb-3 flex-grow">
                  Zero oil cooking approach allows you to enjoy delicious, oil-free meals that support heart health, control cholesterol, manage weight, and maintain overall wellness naturally.
                </p>
                <button className="card-btn opacity-0 px-4 py-1 bg-gradient-to-r from-[#71BBE5] to-[#519BCA] hover:from-[#519BCA] hover:to-[#71BBE5] text-white font-semibold rounded-lg text-md shadow-sm hover:scale-105 active:scale-95 cursor-pointer mt-auto">
                  Know More
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Treatments;