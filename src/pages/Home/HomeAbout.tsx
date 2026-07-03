import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import Navbar from "../../components/Navbar";

// slider images
import slider1 from "../../assets/images/about_slider1.jpg";
import slider2 from "../../assets/images/about_slider2.jpg";
import slider3 from "../../assets/images/about_slider3.jpg";
import slider4 from "../../assets/images/about_slider4.jpg";
import slider5 from "../../assets/images/about_slider5.jpg";

// vid
import textBgVideo from "../../assets/videos/text-background.mp4";

// info slider images
import info1 from "../../assets/images/info_slider1.jpg";
import info2 from "../../assets/images/info_slider2.jpg";
import info3 from "../../assets/images/info_slider3.jpg";
import info4 from "../../assets/images/info_slider4.jpg";
import info5 from "../../assets/images/info_slider5.jpg";

// IMPORTANT: Add this to your HTML <head> or global CSS:
// <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700;800;900&display=swap" rel="stylesheet">

interface HomeAboutProps {
  standalone?: boolean;
  onGoToHero?: () => void;
  onGoToHome?: () => void;
}

const HomeAbout = ({ standalone = true, onGoToHero, onGoToHome }: HomeAboutProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const heartContainerRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const scrollThrottle = useRef(false);
  const scrollStartTime = useRef(0);
  const scrollEndTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [noTransition, setNoTransition] = useState(false);
  const section3TitleRef = useRef<HTMLHeadingElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<gsap.core.Tween | null>(null);
  const progressTween = useRef<gsap.core.Tween | null>(null);

  const RADIUS = 12;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

  const sliderData = [
    { img: slider1, title: "Expert care for healtier tomorrow" },
    { img: slider2, title: "A Heart Center That Heals" },
    { img: slider3, title: "Heal Your Heart Without Surgery" },
    { img: slider4, title: "Remove Blockages Naturally" },
    { img: slider5, title: "Where Healing Meets Innovation" },
  ];

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      if (scrollThrottle.current) return;

      // Only trigger when at the very top of the scrollable container
      let scrollContainer = sectionRef.current?.parentElement;
      while (scrollContainer) {
        const style = window.getComputedStyle(scrollContainer);
        if (style.overflowY === "auto" || style.overflowY === "scroll") break;
        scrollContainer = scrollContainer.parentElement;
      }
      if (scrollContainer && scrollContainer.scrollTop > 5) return;

      if (e.deltaY < 0) {
        if (!scrollStartTime.current) {
          scrollStartTime.current = Date.now();
        }

        if (scrollEndTimer.current) {
          clearTimeout(scrollEndTimer.current);
          scrollEndTimer.current = null;
        }

        if (Date.now() - scrollStartTime.current >= 100) {
          scrollThrottle.current = true;
          scrollStartTime.current = 0;

          const tl = gsap.timeline({
            onComplete: () => {
              if (standalone) {
                navigate("/");
              } else if (onGoToHero) {
                onGoToHero();
              } else {
                onGoToHome?.();
              }
              setTimeout(() => {
                scrollThrottle.current = false;
              }, 1000);
            },
          });

          const totalDuration = 1.6;

          tl.to(".card-eecp", { opacity: 0, x: -50, y: -50, duration: totalDuration, ease: "power2.inOut" }, 0);
          tl.to(".card-detox", { opacity: 0, x: 50, y: -50, duration: totalDuration, ease: "power2.inOut" }, 0);
          tl.to(".card-lifestyle", { opacity: 0, x: -50, y: 50, duration: totalDuration, ease: "power2.inOut" }, 0);
          tl.to(".card-zero-oil", { opacity: 0, x: 50, y: 50, duration: totalDuration, ease: "power2.inOut" }, 0);

          tl.to(rightContentRef.current, { opacity: 0, y: -100, duration: totalDuration, ease: "power2.inOut" }, 0);

          tl.to(heartContainerRef.current, { opacity: 0, scale: 0.3, duration: totalDuration, ease: "power2.inOut" }, 0);

          const chars = titleRef.current?.querySelectorAll(".char");
          if (chars && chars.length > 0) {
            tl.to(chars, { y: -60, opacity: 0, rotateX: 90, duration: 0.5, stagger: 0.025, ease: "power2.inOut" }, 0);
          }

          tl.to(".about-paragraph", { y: 100, opacity: 0, duration: totalDuration, ease: "power2.inOut" }, 0);
          tl.to(".about-slider", { y: 100, opacity: 0, duration: totalDuration, ease: "power2.inOut" }, 0);
          tl.to(".about-section-2", { opacity: 0, duration: totalDuration, ease: "power2.inOut" }, 0);
          tl.to(".about-section-3", { opacity: 0, duration: totalDuration, ease: "power2.inOut" }, 0);

          if (standalone) {
            tl.to("nav", { opacity: 0, y: -100, duration: totalDuration, ease: "power2.inOut" }, 0);
          }
        } else {
          scrollEndTimer.current = setTimeout(() => {
            scrollStartTime.current = 0;
            scrollEndTimer.current = null;
          }, 300);
        }
      } else {
        scrollStartTime.current = 0;
        if (scrollEndTimer.current) {
          clearTimeout(scrollEndTimer.current);
          scrollEndTimer.current = null;
        }
      }
    },
    [navigate, standalone, onGoToHero, onGoToHome],
  );

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
    const tl = gsap.timeline();

    // 1. H1 Wave Reveal Animation (like hero section)
    const chars = titleRef.current?.querySelectorAll(".char");
    if (chars && chars.length > 0) {
      tl.fromTo(
        chars,
        { y: 80, opacity: 0, rotateX: -90 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.5,
          stagger: 0.03,
          ease: "power3.out",
        },
        "-=0.6",
      );
    }

    // Paragraph and slider come from bottom to top
    gsap.set(".about-paragraph", { y: 100, opacity: 0 });
    gsap.set(".about-slider", { y: 100, opacity: 0 });

    tl.to(
      ".about-paragraph",
      { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
      "-=1.0",
    );
    tl.to(
      ".about-slider",
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=1.2",
    );

    tl.to(
      ".card-detox",
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
      },
      "-=0.6",
    );

    tl.to(
      ".card-lifestyle",
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
      },
      "-=0.6",
    );

    tl.to(
      ".card-zero-oil",
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
      },
      "-=0.6",
    );

    // 5. Card text coming from top to bottom
    tl.to(
      ".card-text",
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "power2.out",
      },
      "-=0.2",
    );

    // 6. Icons coming from small to normal (synchronized with text)
    tl.to(
      ".card-icon",
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        stagger: 0.05,
        ease: "back.out(1.5)",
      },
      "<",
    );

    // 7. Buttons coming from bottom to top (synchronized with text and icons)
    tl.to(
      ".card-btn",
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "power2.out",
      },
      "<",
    );

    // Float animation for heart
    gsap.to(".floating-heart", {
      y: -8,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Ripple effect animation for concentric circles
    gsap.to(".ripple-1", {
      scale: 1.03,
      opacity: 0.6,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
    gsap.to(".ripple-2", {
      scale: 1.05,
      opacity: 0.35,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: 0.5,
    });
    gsap.to(".ripple-3", {
      scale: 1.07,
      opacity: 0.15,
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: 1,
    });

  }, []);

  // Scroll-triggered section 2 title and text reveal
  useEffect(() => {
    const section2 = document.querySelector(".about-section-2");
    const h2 = section2?.querySelector("h2");
    const p = section2?.querySelector("p");
    if (!section2 || !h2 || !p) return;
    gsap.set(h2, { x: -200, opacity: 0 });
    gsap.set(p, { x: 200, opacity: 0 });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const tl = gsap.timeline();
          tl.to(h2, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" });
          tl.to(p, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.6");
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(section2);
    return () => observer.disconnect();
  }, []);

  // Scroll-triggered section 3 title wave reveal
  useEffect(() => {
    const chars = section3TitleRef.current?.querySelectorAll(".char");
    if (!chars) return;
    gsap.set(chars, { y: 80, opacity: 0, rotateX: -90 });

    const section3 = section3TitleRef.current?.closest("section") ?? section3TitleRef.current;
    if (!section3) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(chars, {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.5,
            stagger: 0.03,
            ease: "power3.out",
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(section3);
    return () => observer.disconnect();
  }, []);
  // Progress ring animation
  useEffect(() => {
    const activeIndex = currentSlide >= sliderData.length ? 0 : currentSlide;

    progressTween.current?.kill();

    for (let i = 0; i < sliderData.length; i++) {
      gsap.set(`.progress-ring-${i}`, { strokeDashoffset: CIRCUMFERENCE });
    }

    progressTween.current = gsap.to(`.progress-ring-${activeIndex}`, {
      strokeDashoffset: 0,
      duration: 6,
      ease: "none",
    });
  }, [currentSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % (sliderData.length + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [sliderData.length]);

  // Jump back to real first slide when reaching the clone
  useEffect(() => {
    if (currentSlide === sliderData.length) {
      setNoTransition(true);
      setCurrentSlide(0);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setNoTransition(false);
        });
      });
    }
  }, [currentSlide, sliderData.length]);

  // Wave reveal on slide change
  useEffect(() => {
    if (currentSlide >= sliderData.length) return;
    const chars = document.querySelectorAll(
      `.slide-title-${currentSlide} .char`,
    );
    if (chars.length > 0) {
      gsap.set(chars, { y: 40, opacity: 0, rotateX: -90 });
    }
    const timeout = setTimeout(() => {
      if (chars.length > 0) {
        gsap.to(chars, {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.5,
          stagger: 0.03,
          ease: "power3.out",
        });
      }
    }, 750);
    return () => clearTimeout(timeout);
  }, [currentSlide]);

  const titleLines = [
    "Best EECP Treatment",
    "in Dhaka —",
    "SAAOL Heart Center",
  ];

  const slides = [
    {
      img: info1,
      title: "The Founder",
      subtitle: "Dr. Bimal Chhajer",
      description:
        "Pioneer of non-invasive EECP therapy in India, dedicated to reversing heart disease naturally.",
    },
    {
      img: info2,
      title: "Our Objective",
      subtitle: "Non-Surgical Heart Care",
      description:
        "To make advanced EECP treatment accessible and affordable for every heart patient.",
    },
    {
      img: info3,
      title: "Activities",
      subtitle: "Awareness & Outreach",
      description:
        "Free heart check-up camps, health seminars, and community programs across the nation.",
    },
    {
      img: info4,
      title: "National Executive Council",
      subtitle: "Leading Cardiac Experts",
      description:
        "A distinguished panel of cardiologists guiding research, innovation, and treatment protocols.",
    },
    {
      img: info5,
      title: "Trustee Board",
      subtitle: "Guiding Our Mission",
      description:
        "Visionary leaders ensuring ethical practices and the highest standards of patient care.",
    },
  ];

  const startAutoScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    // Calculate the width of one complete set of cards
    const cards = Array.from(track.children).slice(0, slides.length);

    let singleSetWidth = 0;

    cards.forEach((card) => {
      singleSetWidth += (card as HTMLElement).offsetWidth;
    });

    // gap-6 = 24px
    singleSetWidth += (slides.length - 1) * 24;

    autoScrollRef.current?.kill();

    autoScrollRef.current = gsap.to(track, {
      x: -singleSetWidth,
      duration: 40,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (x) => {
          let value = parseFloat(x);

          // reset seamlessly
          if (Math.abs(value) >= singleSetWidth) {
            value = 0;
          }

          return `${value}px`;
        },
      },
    });
  }, [slides.length]);

  useEffect(() => {
    startAutoScroll();
    return () => {
      autoScrollRef.current?.kill();
    };
  }, [startAutoScroll]);

  const handleSlideNext = useCallback(() => {
    autoScrollRef.current?.pause();

    const track = trackRef.current;
    if (!track) return;

    const cards = Array.from(track.children).slice(0, slides.length);

    let singleSetWidth = 0;

    cards.forEach((card) => {
      singleSetWidth += (card as HTMLElement).offsetWidth;
    });

    singleSetWidth += (slides.length - 1) * 24;

    const currentX = gsap.getProperty(track, "x") as number;
    const step = 510;

    gsap.to(track, {
      x: currentX - step,
      duration: 0.5,
      ease: "power2.out",
      modifiers: {
        x: (x) => {
          let value = parseFloat(x);

          if (Math.abs(value) >= singleSetWidth) {
            value = 0;
          }

          return `${value}px`;
        },
      },
    });

    setTimeout(() => autoScrollRef.current?.resume(), 1500);
  }, [slides.length]);

  const handleSlidePrev = useCallback(() => {
    autoScrollRef.current?.pause();

    const track = trackRef.current;
    if (!track) return;

    const cards = Array.from(track.children).slice(0, slides.length);

    let singleSetWidth = 0;

    cards.forEach((card) => {
      singleSetWidth += (card as HTMLElement).offsetWidth;
    });

    singleSetWidth += (slides.length - 1) * 24;

    const currentX = gsap.getProperty(track, "x") as number;
    const step = 510;

    gsap.to(track, {
      x: currentX + step,
      duration: 0.5,
      ease: "power2.out",
      modifiers: {
        x: (x) => {
          let value = parseFloat(x);

          if (value > 0) {
            value = -singleSetWidth + value;
          }

          return `${value}px`;
        },
      },
    });

    setTimeout(() => autoScrollRef.current?.resume(), 1500);
  }, [slides.length]);

  return (
    <div className="relative overflow-hidden">
      {/* section 1 */}
      <section
        ref={sectionRef}
        className="relative h-screen w-screen overflow-hidden select-none"
      >
        {standalone && <Navbar />}

        {/* Full-screen slider background */}
        <div className="about-slider absolute inset-0 w-full h-full">
          <div
            className={`flex h-full ${noTransition ? "" : "transition-transform duration-700 ease-in-out"}`}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {[...sliderData, sliderData[0]].map((slide, i) => (
              <div key={i} className="relative w-screen h-screen shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent z-[1]" />
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Custom Dots Navigation with Progress Ring */}
          <div className="absolute bottom-10 left-10 right-10 z-10">
            <div className="flex items-center justify-center gap-8">
              {sliderData.map((_, i) => {
                const isActive = (currentSlide >= sliderData.length ? 0 : currentSlide) === i;
                return (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className="relative flex flex-col items-center gap-2 group"
                  >
                    <div className="relative w-10 h-10 flex items-center justify-center">
                      <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 32 32">
                        <circle
                          cx="16"
                          cy="16"
                          r={RADIUS}
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                          strokeOpacity="0.25"
                        />
                        <circle
                          cx="16"
                          cy="16"
                          r={RADIUS}
                          fill="none"
                          stroke="#ef4444"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeDasharray={CIRCUMFERENCE}
                          strokeDashoffset={CIRCUMFERENCE}
                          className={`progress-ring-${i}`}
                        />
                      </svg>
                      <span className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        isActive ? "bg-white" : "bg-white/40 group-hover:bg-white/70"
                      }`} />
                    </div>
                    <span className={`text-[13px] leading-tight transition-all duration-300 ${
                      isActive ? "text-white font-semibold drop-shadow-lg" : "text-white/50 group-hover:text-white/80"
                    }`}>
                      {["Expert Care", "Heart Center", "Without Surgery", "Naturally", "Innovation"][i]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Overlay: Title + Paragraph */}
        <div className="absolute inset-0 z-20 flex items-center pointer-events-none">
          <div className="container px-8 lg:px-16">
            <div className="max-w-2xl">
              <h1
                ref={titleRef}
                className="text-5xl lg:text-6xl xl:text-7xl text-white flex flex-col bauhaus"
              >
                {titleLines.map((line, i) => (
                  <span key={i} className="flex overflow-hidden">
                    {line.split("").map((char, j) => (
                      <span
                        key={j}
                        className="char inline-block bauhaus opacity-0"
                      >
                        {char === " " ? "\u00A0" : char}
                      </span>
                    ))}
                  </span>
                ))}
              </h1>

              <p className="about-paragraph text-[22px] mt-10 text-white/90 max-w-xl">
                Discover the power of EECP treatment also called natural
                bypass theropy, for those seeking non-surgical heart attack
                treatments in dhaka. Our mission is to treat and reverse heart
                disease effectivelly through non-invasive procedures. Find
                afforable solutions for a healthier heart journey with us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* section 2 */}
      <section className="about-section-2 relative h-[60vh] overflow-hidden w-screen mt-40">
        <div className="absolute inset-0 flex items-center overflow-hidden justify-center">
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
        <div className="absolute inset-0 bg-[#064895]/50 z-10"></div>
        <div className="relative z-10 w-full h-full flex items-center justify-center container">
          <div className="flex justify-between gap-12">
            <h2 className="w-[45%] text-[60px] text-white bauhaus">
              Transformative EECP Treatment Center in Dhaka
            </h2>
            <p className="w-[45%] text-[20px] text-white/90">
              Experience cutting-edge heart care at the SAAOL Heart Center in
              Dhaka, specializing in innovative EECP treatment. Our center is
              dedicated to providing comprehensive care for patients facing
              heart diseases, including heart attack treatment, heart failure
              treatment, and heart disease management. We utilize advanced EECP
              therapy, also known as natural bypass therapy, delivering
              non-invasive solutions for patients with heart blockages, aiming
              to reverse heart disease and promote natural heart healing. At our
              state-of-the-art facility, we prioritize patient well-being by
              providing a range of services beyond EECP treatment. Our holistic
              approach includes detox therapy to support overall cardiovascular
              health and detoxification therapy treatment to address underlying
              factors contributing to heart disease. With a focus on
              non-invasive techniques, our center aims to provide effective
              cardio treatment for conditions such as coronary artery disease,
              ensuring optimal outcomes with minimal risk. Trust our experienced
              team at the Heart Center in Dhaka to deliver personalized care and
              transformative results for your heart health journey.
            </p>
          </div>
        </div>
      </section>

      {/* section 3 */}
      <section className="about-section-3 relative mt-60 overflow-hidden w-screen">
        <div className="container">
          <h2
            ref={section3TitleRef}
            className="section3-title text-5xl lg:text-6xl xl:text-7xl text-slate-900 bauhaus w-170 mb-15 flex flex-wrap"
          >
            {"Building a Healthier Community Together"
              .split("")
              .map((char, i) => (
                <span key={i} className="char inline-block bauhaus">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
          </h2>
        </div>
        <div className="relative flex flex-col items-center pb-10">
          {/* Left blur fade */}
          <div className="absolute left-0 top-0 bottom-0 w-40 z-20 pointer-events-none bg-gradient-to-r from-slate-50 to-transparent"></div>
          {/* Right blur fade */}
          <div className="absolute right-0 top-0 bottom-0 w-40 z-20 pointer-events-none bg-gradient-to-l from-slate-50 to-transparent"></div>
          <div
            ref={trackRef}
            className="flex gap-6 w-max"
            style={{ transform: "translateX(0px)" }}
          >
            {[...slides, ...slides].map((slide, i) => (
              <div
                key={i}
                className="group w-120 h-120 relative shrink-0 rounded-2xl overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-[1]"></div>
                <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
                  <h4 className="text-2xl font-bold text-white">
                    {slide.title}
                  </h4>
                  <p className="text-white/80 text-lg">{slide.subtitle}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 z-20 h-1/2 bg-white/10 backdrop-blur-xl translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out p-6 flex flex-col justify-center">
                  <h4 className="text-2xl font-bold text-white mb-2">
                    {slide.title}
                  </h4>
                  <p className="text-white/90 text-base leading-relaxed">
                    {slide.description}
                  </p>
                </div>
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-8">
            <button
              onClick={handleSlidePrev}
              onMouseEnter={() => autoScrollRef.current?.pause()}
              onMouseLeave={() => autoScrollRef.current?.resume()}
              className="w-14 h-14 rounded-full bg-slate-800/10 backdrop-blur-md hover:bg-slate-800/20 text-slate-700 flex items-center justify-center transition-all duration-300 text-3xl cursor-pointer shadow-lg"
            >
              ‹
            </button>
            <button
              onClick={handleSlideNext}
              onMouseEnter={() => autoScrollRef.current?.pause()}
              onMouseLeave={() => autoScrollRef.current?.resume()}
              className="w-14 h-14 rounded-full bg-slate-800/10 backdrop-blur-md hover:bg-slate-800/20 text-slate-700 flex items-center justify-center transition-all duration-300 text-3xl cursor-pointer shadow-lg"
            >
              ›
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeAbout;
