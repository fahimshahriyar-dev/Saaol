import { useEffect, useRef } from "react";
import gsap from "gsap";
import { HeartPulse, Pill, Timer, HeartHandshake, RotateCcw, XCircle } from "lucide-react";

const items = [
  {
    icon: HeartPulse,
    text: "Experience chronic angina or chest pain caused by restricted blood flow to the heart.",
    gradient: "from-[#9ABAD1] to-white",
  },
  {
    icon: Pill,
    text: "Haven't responded to conventional treatments like lifestyle adjustments and medications.",
    gradient: "from-white to-[#9ABAD1]",
  },
  {
    icon: Timer,
    text: "Are awaiting bypass surgery or angioplasty.",
    gradient: "from-[#9ABAD1] to-white",
  },
  {
    icon: HeartHandshake,
    text: "Prefer non-surgical alternatives or aren't prepared for invasive procedures.",
    gradient: "from-white to-[#9ABAD1]",
  },
  {
    icon: RotateCcw,
    text: "Encounter recurring symptoms after surgery or bypass.",
    gradient: "from-[#9ABAD1] to-white",
  },
  {
    icon: XCircle,
    text: "Find inadequate relief from medication alone.",
    gradient: "from-white to-[#9ABAD1]",
  },
];

function Card({ item, tall }: { item: typeof items[number]; tall?: boolean }) {
  const IconComp = item.icon;
  return (
    <div className={`card-box ${tall ? "w-70 h-145" : "w-70 h-70"} rounded-3xl relative overflow-hidden group shadow-lg shadow-[#9ABAD1]/20`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
      <div className="relative z-10 p-6 flex flex-col h-full">
        <div className="flex items-start">
          <div className={`${tall ? "w-14 h-14" : "w-12 h-12"} rounded-full bg-[#9ABAD1]/15 flex items-center justify-center`}>
            <IconComp className="text-[#6B8FA3]" size={tall ? 28 : 22} strokeWidth={1.5} />
          </div>
        </div>
        <p className={`text-slate-700 ${tall ? "text-base" : "text-sm"} leading-relaxed mt-auto`}>
          {item.text}
        </p>
        {tall && <div className="mt-4 w-8 h-0.5 bg-[#9ABAD1]/30 rounded-full" />}
      </div>
    </div>
  );
}

const Benefit = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const h3Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.set(h3Ref.current, { y: 60, opacity: 0 });
    gsap.set(pRef.current, { y: 60, opacity: 0 });
    const chars = h2Ref.current?.querySelectorAll(".char");
    if (chars) gsap.set(chars, { y: 60, opacity: 0, rotateX: -90 });
    gsap.set(".card-box", { y: 60, opacity: 0 });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const tl = gsap.timeline();

          if (chars) {
            tl.to(chars, {
              y: 0,
              opacity: 1,
              rotateX: 0,
              duration: 0.5,
              stagger: 0.03,
              ease: "power3.out",
            });
          }

          tl.to(
            h3Ref.current,
            { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
            "-=0.2",
          );

          tl.to(
            pRef.current,
            { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
            "-=0.4",
          );

          tl.to(
            ".card-box",
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out" },
            "-=0.3",
          );

          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const h2Text = "Who Can benefit From SAAOL?";

  return (
    <section ref={sectionRef} className="container mt-30">
      <div className="w-full flex flex-col items-center">
        <h2
          ref={h2Ref}
          className="text-5xl lg:text-6xl xl:text-7xl text-slate-900 bauhaus flex flex-wrap justify-center"
        >
          {h2Text.split("").map((char, i) => (
            <span key={i} className="char inline-block bauhaus">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h2>
        <h3
          ref={h3Ref}
          className="text-2xl lg:text-5xl text-slate-700 mt-4"
        >
          EECP Treatment in dhaka
        </h3>
        <p
          ref={pRef}
          className="text-lg lg:text-2xl text-slate-600 mt-6 max-w-3xl text-center"
        >
          If you're experiencing chronic heart issues such as angina, chest
          pain, or heart failure, consider EECP Treatment at SAAOL Heart Center.
          Our personalized approach is tailored for patients seeking
          non-surgical alternatives or those who haven't found success with
          traditional treatments. Whether you're aiming to alleviate heart
          blockages or reverse heart disease, our committed team is ready to
          assist you throughout the process.
        </p>
      </div>

      <div className="flex gap-5 my-15 justify-center flex-wrap">
        <Card item={items[0]} tall />

        <div className="flex flex-col gap-5">
          <Card item={items[1]} />
          <Card item={items[2]} />
        </div>

        <div className="flex flex-col gap-5">
          <Card item={items[3]} />
          <Card item={items[4]} />
        </div>

        <Card item={items[5]} tall />
      </div>
    </section>
  );
};

export default Benefit;
