import { useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import leftGradient from "../assets/images/left_gradient.png";
import rightBottomGradient from "../assets/images/right_bottom_gradient.png";
import saaolLogo from "../assets/images/saaol_logo.png";
import heart from "../assets/images/heart.png";
import dhaka from "../assets/images/dhaka.png";
import { Earth, HeartHandshake, MapPinned, UserStar } from "lucide-react";
import Navbar from "../components/Navbar";

const lines = ["LET US HEAL", "YOUR HEART", "NATURALLY..."];

// Animation Configuration - Control start time of each animation in seconds
interface AnimationConfig {
  h1StartTime: number;
  heartStartTime: number;
  locationStartTime: number;
  infoStartTime: number;
  numberCountStartTime: number;
  buttonStartTime: number;
}

const createAnimationTimeline = (
  h1Ref: React.RefObject<HTMLHeadingElement | null>,
  heartRef: React.RefObject<HTMLImageElement | null>,
  locationRef: React.RefObject<HTMLDivElement | null>,
  infoRef: React.RefObject<HTMLDivElement | null>,
  buttonRef: React.RefObject<HTMLButtonElement | null>,
  config: AnimationConfig,
) => {
  // Initialize all elements to be hidden BEFORE any rendering
  gsap.set(".logo-img", { opacity: 0, y: -80 });
  gsap.set(locationRef.current, { opacity: 0 });
  gsap.set(locationRef.current, { y: 100, scale: 0.8 });
  gsap.set(infoRef.current?.querySelectorAll(".info-item")!, {
    opacity: 0,
    x: -50,
  });
  gsap.set(buttonRef.current!, { opacity: 0, y: 50 });
  gsap.set(heartRef.current!, {
    scale: 0.3,
    opacity: 0,
    transformOrigin: "center center",
  });
  // Set initial number counts to 0
  infoRef.current?.querySelectorAll<HTMLSpanElement>(".info-number").forEach((el) => {
    el.textContent = "0";
  });

  const timeline = gsap.timeline();

  // Step 0: Heart animation - starts at config.heartStartTime
  timeline.fromTo(
    heartRef.current!,
    { scale: 0.3, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.8, ease: "power3.out" },
    config.heartStartTime,
  );

  // Step 1: H1 animation - starts at config.h1StartTime
  timeline.fromTo(".logo-img", { y: -80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, config.h1StartTime);
  const chars = h1Ref.current?.querySelectorAll(".char");
  if (chars) {
    timeline.fromTo(
      chars,
      { y: 80, opacity: 0, rotateX: -90 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 0.5,
        stagger: 0.03,
        ease: "power2.out",
      },
      config.h1StartTime,
    );
  }

  // Step 2: Location box animation - animate blur effect too
  timeline.fromTo(
  locationRef.current,
  { y: 100, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 0.8,
    ease: "power3.out",
  },
  config.locationStartTime,
);

  // Step 3: Info items animation - starts at config.infoStartTime
  const infoItems = infoRef.current?.querySelectorAll(".info-item");
  if (infoItems) {
    timeline.fromTo(
      infoItems,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: "power3.out" },
      config.infoStartTime,
    );
  }

  // Step 4: Number counting - starts at config.numberCountStartTime
  const numberEls = infoRef.current?.querySelectorAll<HTMLSpanElement>(".info-number");
  const numberTargets = [136, 25, 29, 550000];
  if (numberEls) {
    numberEls.forEach((el, i) => {
      const data = { val: 0 };
      const target = numberTargets[i];
      timeline.to(data, {
        val: target,
        duration: 1.5,
        ease: "power2.out",
        onUpdate: () => {
          el.textContent = Math.round(data.val).toString();
        },
      }, config.numberCountStartTime + i * 0.15);
    });
  }

  // Step 5: Button animation - starts at config.buttonStartTime
  timeline.fromTo(
    buttonRef.current!,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
    config.buttonStartTime,
  );
};

// Default animation config - Customize these values (in seconds)
const defaultAnimationConfig: AnimationConfig = {
  h1StartTime: 0, // H1 starts at 0 seconds
  heartStartTime: 0, // Heart starts at 0 seconds
  locationStartTime: 0.3, // Location box starts at 0.7 seconds
  infoStartTime: 0.6, // Info items start at 1.2 seconds
  numberCountStartTime: 0.6, // Number counting starts at 1.2 seconds
  buttonStartTime: 1.2, // Button starts at 2.1 seconds
};

interface HeroProps {
  animationConfig?: Partial<AnimationConfig>;
}

const Hero = ({ animationConfig }: HeroProps) => {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const heartRef = useRef<HTMLImageElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  const scrollThrottle = useRef(false);

  // Merge provided config with defaults
  const finalConfig: AnimationConfig = {
    ...defaultAnimationConfig,
    ...animationConfig,
  };

  useEffect(() => {
    createAnimationTimeline(
      h1Ref,
      heartRef,
      locationRef,
      infoRef,
      buttonRef,
      finalConfig,
    );
  }, [finalConfig]);

  // Scroll down to navigate to treatments page
  const handleWheel = useCallback((e: WheelEvent) => {
    if (scrollThrottle.current) return;
    if (e.deltaY > 0) {
      scrollThrottle.current = true;

      // Run GSAP exit animations
      const exitTimeline = gsap.timeline({
        onComplete: () => {
          navigate("/treatments");
          scrollThrottle.current = false;
        }
      });

      // All animations unified to 1.6s total to perfectly match the h1 stagger duration
      const totalDuration = 1.6;

      // 1. navbar and logo will go up and vanish
      exitTimeline.to("nav", { y: -100, opacity: 0, duration: totalDuration, ease: "power2.inOut" }, 0);
      exitTimeline.to(".logo-img", { y: -80, opacity: 0, duration: totalDuration, ease: "power2.inOut" }, 0);

      // 2. h1 disappear animation (stagger across ~33 chars: 0.8 + 32*0.025 = 1.6s total)
      const chars = h1Ref.current?.querySelectorAll(".char");
      if (chars && chars.length > 0) {
        exitTimeline.to(chars, {
          y: -60,
          opacity: 0,
          rotateX: 90,
          duration: 0.5,
          stagger: 0.025,
          ease: "power2.inOut"
        }, 0);
      }

      // 3. heart become small and vanish
      exitTimeline.to(heartRef.current!, {
        scale: 0.05,
        opacity: 0,
        duration: totalDuration,
        ease: "power2.inOut"
      }, 0);

      // 4. country box (location box) become small and vanish
      exitTimeline.to(locationRef.current!, {
        scale: 0.05,
        opacity: 0,
        duration: totalDuration,
        ease: "power2.inOut"
      }, 0);

      // 5. info list go left and vanish (4 items, stagger 0.04s, so base duration 1.48s = 1.6s total)
      const infoItems = infoRef.current?.querySelectorAll(".info-item");
      if (infoItems && infoItems.length > 0) {
        exitTimeline.to(infoItems, {
          x: -150,
          opacity: 0,
          duration: 1.48,
          stagger: 0.04,
          ease: "power2.inOut"
        }, 0);
      }

      // 6. button go down and vanish
      exitTimeline.to(buttonRef.current!, {
        y: 120,
        opacity: 0,
        duration: totalDuration,
        ease: "power2.inOut"
      }, 0);

      // 7. left gradient image goes to left top corner and vanishes
      exitTimeline.to(".left-grad-img", {
        x: -400,
        y: -400,
        opacity: 0,
        duration: totalDuration,
        ease: "power2.inOut"
      }, 0);

      // 8. right gradient image goes to right bottom corner and vanishes
      exitTimeline.to(".right-grad-img", {
        x: 400,
        y: 400,
        opacity: 0,
        duration: totalDuration,
        ease: "power2.inOut"
      }, 0);
    }
  }, [navigate]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    el.addEventListener("wheel", handleWheel, { passive: true });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [handleWheel]);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden">
      <Navbar />
      <img src={saaolLogo} alt="SAAOL Logo" className="fixed top-6 left-8 lg:left-16 w-16 lg:w-20 z-50 logo-img opacity-0" />
      <img
        src={leftGradient}
        alt=""
        className="absolute top-0 left-0 h-screen left-grad-img"
      />
      <img
        src={rightBottomGradient}
        alt=""
        className="absolute bottom-0 right-0 w-125 right-grad-img"
      />
      <img
        ref={heartRef}
        src={heart}
        alt=""
        className="opacity-0 absolute ml-222.5 top-24 w-132.5"
      />

      <div className="container relative z-10 mt-10 flex justify-between">
        <div>
          <div className="mt-30 w-[580px]">
            <h1 ref={h1Ref} className="text-8xl text-black bauhaus">
              {lines.map((line, li) => (
                <div key={li} className="overflow-hidden">
                  <div className="inline-block">
                    {line.split("").map((char, ci) => (
                      <span key={ci} className="char inline-block bauhaus">
                        {char === " " ? "\u00A0" : char}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </h1>
          </div>

          {/* info section */}
          <div ref={infoRef} className="flex flex-col gap-6 text-[22px] mt-34">
            <span className="info-item flex items-center gap-3 text-slate-700">
              <Earth className="text-teal-500" size={28} strokeWidth={1.5} />
              <span className="font-medium"><span className="info-number">136</span>+ Centers</span>
            </span>
            <span className="info-item flex items-center gap-3 text-slate-700">
              <MapPinned
                className="text-cyan-500"
                size={28}
                strokeWidth={1.5}
              />
              <span className="font-medium"><span className="info-number">25</span>+ States</span>
            </span>
            <span className="info-item flex items-center gap-3 text-slate-700">
              <UserStar className="text-teal-600" size={28} strokeWidth={1.5} />
              <span className="font-medium"><span className="info-number">29</span>+ Years of experience</span>
            </span>
            <span className="info-item flex items-center gap-3 text-slate-700">
              <HeartHandshake
                className="text-red-400"
                size={28}
                strokeWidth={1.5}
              />
              <span className="font-medium"><span className="info-number">550000</span>+ Patients Treated</span>
            </span>

            {/* appoint button with premium gradient */}
            <button
              ref={buttonRef}
              className="opacity-0 relative mt-2 cursor-pointer bg-gradient-to-r from-cyan-500 via-teal-500 to-green-500 hover:from-cyan-600 hover:via-teal-600 hover:to-green-600 text-white font-bold py-3 px-8 rounded-lg w-fit shadow-lg shadow-teal-400/30 hover:scale-105 active:scale-95"
            >
              Book Your Appointment
            </button>
          </div>
        </div>

        {/* location box */}
        <div ref={locationRef} className="group mt-[500px] mr-[50px]">
          <div className="cursor-pointer bg-gradient-to-br from-cyan-400/20 to-green-400/20 border border-cyan-300/40 shadow-2xl w-[250px] h-[250px] rounded-lg flex justify-center items-center relative overflow-hidden hover:from-cyan-400/30 hover:to-green-400/30 transition-all duration-300">
            <img src={dhaka} alt="" className="w-34" />
            <h2 className="absolute bg-gradient-to-br from-cyan-500/30 to-green-500/30 border border-cyan-300/40 text-slate-800 text-xl font-semibold rounded-lg w-[250px] h-[250px] flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
              Dhaka • Bangladesh
            </h2>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
