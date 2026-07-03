import { useState, useEffect, useCallback } from "react";
import textBgVideo from "../../assets/videos/text-background.mp4";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Ramesh Kumar",
    text: "This Hospital is Located in DLF Westend Farms (right behind the DLF Chhatarpur Farms). You can reach here By Metro also. Just get down at Chattarpur metro station and take any Public transport to reach here. This is located on the Mandi Gaon Road. This is the Best Place for the Treatment for the Heart Disease without any Surgery. Operated by The Doctor Bimal Chajjar.",
  },
  {
    name: "Sunita Sharma",
    text: "I came to SAAOL with severe angina and was recommended for bypass surgery. After completing EECP therapy, I feel like a new person. No more chest pain, no more limitations. The team here is truly caring and professional. Forever grateful!",
  },
  {
    name: "Amit Verma",
    text: "My father was diagnosed with multiple blockages and we were worried about surgery at his age. EECP therapy at SAAOL was a game-changer. His blockages reduced significantly and his quality of life improved. Highly recommended for anyone seeking non-surgical heart care.",
  },
  {
    name: "Priya Mehra",
    text: "The holistic approach at SAAOL is what sets them apart. They didn't just treat my heart condition; they taught me how to eat right, manage stress, and live a healthier life. The zero-oil cooking classes were fantastic!",
  },
  {
    name: "Vikram Singh",
    text: "After my angioplasty, symptoms returned within a year. A friend recommended SAAOL and I tried EECP therapy. It's been 2 years and I'm symptom-free. The transparent pricing and personalized care made the entire journey smooth and stress-free.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={18}
          className={i < rating ? "text-amber-400 fill-amber-400" : "text-slate-300"}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

const Reviews = () => {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => setCurrent((c) => (c === 0 ? reviews.length - 1 : c - 1)), []);
  const next = useCallback(() => setCurrent((c) => (c === reviews.length - 1 ? 0 : c + 1)), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="h-[75vh] relative">
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

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 w-full h-full container mx-auto flex items-center px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 w-full items-center">
          {/* Left - Title */}
          <div className="text-white lg:pl-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-1 bg-amber-400 rounded-full" />
              <span className="text-amber-400 uppercase tracking-[0.25em] text-sm lg:text-base font-semibold">
                Testimonial
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1]">
              What Our
              <br />
              Patient Says
            </h2>
            <div className="w-28 h-1.5 bg-amber-400 rounded-full mt-8" />
          </div>

          {/* Right - Review Slider */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-10 border border-white/20 shadow-xl">
            <div className="min-h-[220px] flex flex-col">
              <StarRating rating={5} />
              <p className="text-white/90 text-base lg:text-lg leading-relaxed mt-6 flex-grow">
                {reviews[current].text}
              </p>
              <p className="text-amber-400 font-semibold text-lg lg:text-xl mt-6">
                – {reviews[current].name}
              </p>
            </div>

            <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/20">
              <div className="flex gap-2.5">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`rounded-full transition-all ${
                      i === current
                        ? "bg-amber-400 w-7 h-2.5"
                        : "bg-white/30 w-2.5 h-2.5 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <ChevronLeft size={20} className="text-white" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <ChevronRight size={20} className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
