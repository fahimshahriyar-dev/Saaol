import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Reviews from "../Home/Reviews";
import aboutUsImg from "../../assets/images/about-us.png";
import { Eye, Target, HeartHandshake } from "lucide-react";

const goalCards = [
  {
    icon: Eye,
    title: "Our Vision",
    des: "SAAOL's vision is to ensure 'Healthier Lifestyle and Risk Factor Reduction'. It aims to reduce the risk of heart disease through changes in Lifestyle which includes Diet Modification including Zero Oil Cooking, Stress Management, Exercise, Yoga, Meditation, Health Education and Counselling.",
  },
  {
    icon: Target,
    title: "Our Mission",
    des: "The mission of Saaol is to effectively treat and reverse heart disease by a series of non-invasive or non-operative ways. It combines all possible natural methods to treat heart disease and applies a simple theory of rectifying the causes of heart disease.",
  },
  {
    icon: HeartHandshake,
    title: "Our Values",
    des: "To collaborate as a team and take extreme ownership of our audacious goals to achieve targets and display tremendous Integrity.",
  },
];

const videoIds = [
  "Bhtq6RkD8_U",
  "WGpEGTLuQqU",
  "euFcUiGb9Zc",
];

const AboutUs = () => {
  return (
    <div className="min-h-screen w-screen bg-slate-50">
      <Navbar />

      {/* Section 1 - About SAAOL */}
      <section className="pt-32 pb-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 bauhaus mb-6">
                About SAAOL
              </h1>
              <p className="text-base lg:text-lg text-slate-700 leading-relaxed">
                SAAOL mission is to reduce the mortality rate due to heart disease related deaths and provide holistic heart care treatment and approach through natural bypass therapy, FDA approved non-invasive heart treatment like EECP and lifestyle changes. SAAOL Heart Centers are spread all over India so that people can have access to best heart treatment in India without travelling to Indian cities. Our heart specialists are trained under world renowned cardiologist Dr. Bimal Chhajer MBBS, MD (former AIIMS resident & associate professor). SAAOL ultimate purpose is to provide the best heart treatment and eradicate heart disease related deaths in India and then the world. Motto: Mission Beat Heart Disease.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src={aboutUsImg} alt="About SAAOL" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - SAAOL Goal */}
      <section className="py-20 px-4 lg:px-8 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 bauhaus text-center mb-16">
            SAAOL Goal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {goalCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={i}
                  className="bg-slate-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col items-center text-center border border-slate-100"
                >
                  <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {card.title}
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed">
                    {card.des}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3 - Reviews */}
      <Reviews />

      {/* Section 4 - Video Gallery */}
      <section className="py-20 px-4 lg:px-8 bg-slate-50">
        <div className="container mx-auto">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 bauhaus text-center mb-16">
            Video Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoIds.map((id, i) => (
              <div key={i} className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src={`https://www.youtube.com/embed/${id}`}
                  title={`Video ${i + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <a
              href="https://www.youtube.com/@SAAOLHeartCenterIndia"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-full transition-colors duration-300 shadow-lg"
            >
              View More
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
