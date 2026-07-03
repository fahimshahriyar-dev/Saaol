import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const conditions = [
  {
    title: "Angina",
    des: "EECP therapy addresses angina by enhancing blood flow to the heart and reducing the frequency and severity of chest pain episodes and Heart attacks.",
  },
  {
    title: "Chest Pain",
    des: "EECP therapy alleviates chest pain by improving coronary circulation and reducing the workload on the heart muscle.",
  },
  {
    title: "Heart Attack",
    des: "Post-heart attack, EECP therapy aids in recovery by promoting collateral blood vessel formation, enhancing cardiac function, and reducing the risk of future cardiac events.",
  },
  {
    title: "Heart Failure",
    des: "EECP therapy improves symptoms and quality of life for heart failure patients by enhancing cardiac output and reducing pulmonary congestion.",
  },
  {
    title: "Coronary Artery Disease",
    des: "In managing coronary artery disease, EECP therapy enhances blood flow to ischemic areas of the heart, thereby promoting myocardial perfusion and reducing symptoms.",
  },
  {
    title: "Hypertension (High BP)",
    des: "EECP therapy helps manage Hypertension by improving arterial compliance, reducing peripheral resistance, and promoting overall cardiovascular health.",
  },
  {
    title: "Diabetic Foot Ulcers",
    des: "EECP therapy supports healing by improving microcirculation, accelerating wound closure, and reducing the risk of infection in diabetic foot ulcers.",
  },
  {
    title: "Stroke Rehabilitation",
    des: "In stroke Rehabilitation, EECP therapy enhances cerebral blood flow, promotes neuroplasticity, and aids in motor and cognitive recovery.",
  },
  {
    title: "Vascular Dementia",
    des: "EECP therapy can benefit vascular dementia by improving cerebral perfusion, reducing cognitive decline, and enhancing overall brain function.",
  },
];

const colors = [
  "#ef4444", "#f97316", "#eab308", "#22c55e", "#06b6d4",
  "#3b82f6", "#8b5cf6", "#ec4899", "#14b8a6",
];

const RADIUS = 10;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const Conditions = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const progressTween = useRef<gsap.core.Tween | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleClick = (i: number) => {
    setActiveIndex(i);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % conditions.length);
    }, 6000);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % conditions.length);
    }, 6000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    progressTween.current?.kill();

    for (let i = 0; i < conditions.length; i++) {
      gsap.set(`.condition-ring-${i}`, { strokeDashoffset: CIRCUMFERENCE });
    }

    progressTween.current = gsap.to(`.condition-ring-${activeIndex}`, {
      strokeDashoffset: 0,
      duration: 6,
      ease: "none",
    });
  }, [activeIndex]);

  return (
    <section className="container mt-40 h-screen overflow-hidden">
      <h1 className="text-5xl lg:text-6xl xl:text-7xl text-slate-900 bauhaus mb-15">
        What Conditions <br />
        Can EECP Therapy Treat?
      </h1>

      <div className="flex gap-12 h-[calc(100vh-250px)]">
        {/* Left Side: Vertical Options */}
        <div className="w-80 flex flex-col justify-center gap-5">
          {conditions.map((condition, i) => (
            <button
              key={i}
              onClick={() => handleClick(i)}
              className="flex items-center gap-4 group text-left cursor-pointer"
            >
              <div className="relative w-9 h-9 flex items-center justify-center shrink-0">
                <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 24 24">
                  <circle
                    cx="12"
                    cy="12"
                    r={RADIUS}
                    fill="none"
                    stroke={colors[i]}
                    strokeWidth="2"
                    strokeOpacity="0.3"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r={RADIUS}
                    fill="none"
                    stroke={colors[i]}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray={CIRCUMFERENCE}
                    strokeDashoffset={CIRCUMFERENCE}
                    className={`condition-ring-${i}`}
                  />
                </svg>
                <span
                  className="w-2.5 h-2.5 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: i === activeIndex ? colors[i] : `${colors[i]}55`,
                  }}
                />
              </div>
              <span
                className={`text-lg transition-all duration-300 ${
                  i === activeIndex
                    ? "font-semibold text-slate-900"
                    : "text-slate-500 group-hover:text-slate-700"
                }`}
              >
                {condition.title}
              </span>
            </button>
          ))}
        </div>

        {/* Right Side: Color Slider */}
        <div className="flex-1 rounded-2xl overflow-hidden relative">
          {conditions.map((condition, i) => (
            <div
              key={i}
              className={`absolute inset-0 flex flex-col justify-center items-center p-16 transition-all duration-700 ease-in-out ${
                i === activeIndex ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
              }`}
              style={{ backgroundColor: colors[i] }}
            >
              <h2 className="text-5xl bauhaus text-white mb-8 text-center max-w-3xl">
                {condition.title}
              </h2>
              <p className="text-xl text-white/90 max-w-3xl text-center leading-relaxed">
                {condition.des}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Conditions;
