import { Users, Heart, Sparkles, Droplets, RefreshCw, Utensils, HeartHandshake, BadgeDollarSign } from "lucide-react";

const items = [
  {
    icon: Users,
    title: "Expert Team",
    text: "Our team comprises seasoned professionals dedicated to your heart health. With years of experience and expertise, we deliver top-notch care and innovative treatments.",
  },
  {
    icon: Heart,
    title: "Holistic Approach",
    text: "We believe in treating the whole person, not just the symptoms. Our holistic approach combines medical expertise with lifestyle interventions for comprehensive care.",
  },
  {
    icon: Sparkles,
    title: "Innovative Treatments",
    text: "SAAOL Heart Center delivers cutting-edge treatments like EECP (Enhanced External Counter Pulsation), backed by research and proven efficacy in improving heart function.",
  },
  {
    icon: Droplets,
    title: "SAAOL Detox Therapy",
    text: "Patients benefit from SAAOL proprietary detox therapy, designed to cleanse the body and support cardiovascular health.",
  },
  {
    icon: RefreshCw,
    title: "Lifestyle Modification",
    text: "We emphasize lifestyle changes to promote heart health, including guidance on diet, exercise, stress management, and more.",
  },
  {
    icon: Utensils,
    title: "Zero-Oil Cooking",
    text: "Our culinary experts teach patients the art of zero-oil cooking, promoting heart-healthy eating habits without compromising on taste.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Care",
    text: "Every patient receives personalized attention and care tailored to their unique needs and preferences.",
  },
  {
    icon: BadgeDollarSign,
    title: "Transparent Pricing",
    text: "At SAAOL Heart Center, we believe in transparency. Our pricing is straightforward, ensuring patients understand the costs involved without any hidden fees or surprises.",
  },
];

const WhyUs = () => {
  return (
    <section className="container mt-30">
      <h1 className="text-5xl lg:text-6xl xl:text-7xl text-slate-900 bauhaus mb-4">
        Why Choose SAAOL for EECP Treatment in dhaka?
      </h1>
      <span className="text-[20px]">
        Choosing SAAOL Heart Center for EECP Treatment in dhaka means opting for excellence, compassion, and tangible results. Here's why our heart center stands out from the rest:
      </span>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-15">
        {items.map((item, index) => {
          const IconComp = item.icon;
          return (
            <div
              key={index}
              className="rounded-3xl relative overflow-hidden group shadow-lg shadow-[#9ABAD1]/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#9ABAD1] to-white" />
              <div className="relative z-10 p-6 flex flex-col h-full min-h-[280px]">
                <div className="w-14 h-14 rounded-full bg-[#9ABAD1]/15 flex items-center justify-center mb-4">
                  <IconComp className="text-[#6B8FA3]" size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-700 leading-relaxed">{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyUs;
