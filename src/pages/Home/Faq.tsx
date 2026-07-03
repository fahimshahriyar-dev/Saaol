import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Can we take appointment online?",
    a: "Yes. It's very easy to book appointment online with Dr. Bimal Chhajer. You just need to fill out our form and our team will connect with you and guide you for the process of online appointment booking which costs only Rs. 5000",
  },
  {
    q: "What is EECP treatment?",
    a: "EECP (Enhanced External Counterpulsation) is a non-invasive treatment for heart disease that improves blood flow and cardiovascular health without surgery.",
  },
  {
    q: "Who is Dr. Bimal Chhajer?",
    a: "Dr. Bimal Chhajer is the founder of SAAOL and a pioneer in non-invasive heart treatment in India, known for his innovative approaches to heart health.",
  },
  {
    q: "How to find the nearest center?",
    a: "It is very easy to find the nearest center near to you for this you just need to visit the find nearest page and from there you can check you state and select for nearest center over there and visit for further process.",
  },
  {
    q: "What are the benefits of Zero Oil Cooking?",
    a: "Zero Oil Cooking involves preparing meals without any oil, helping to maintain heart health while ensuring the food remains tasty and nutritious.",
  },
  {
    q: "What is the SAAOL Detox program?",
    a: "The SAAOL Detox program aims to cleanse the body, improve overall health, and support heart health through natural methods.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="container mt-30">
      <div className="flex flex-col w-full items-center mb-12">
        <h1 className="text-5xl lg:text-6xl xl:text-7xl text-slate-900 bauhaus mb-4">
          FAQ
        </h1>
      </div>

      <div className="max-w-3xl mx-auto flex flex-col gap-3">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md shadow-[#9ABAD1]/10 border border-[#9ABAD1]/15 overflow-hidden"
          >
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer"
            >
              <span className="text-base lg:text-lg font-semibold text-slate-800">
                {faq.q}
              </span>
              <ChevronDown
                size={22}
                className={`shrink-0 text-[#6B8FA3] transition-transform duration-300 ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ${
                openIndex === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-sm lg:text-base text-slate-600 leading-relaxed px-5 pb-5">
                  {faq.a}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
