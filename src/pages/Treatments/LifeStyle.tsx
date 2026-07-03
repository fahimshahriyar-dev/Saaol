import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import yogaImg from "../../assets/images/young-beautiful-woman-doing-yoga.jpg";

const cards = [
  {
    title: "Holistic Nutrition",
    des: "The foundation of your heart's well-being commences with the choices you make in your diet.",
  },
  {
    title: "Active Lifestyle",
    des: "Consistent 30 minutes of physical activity is your heart's steadfast companion",
  },
  {
    title: "Freedom from Tobacco",
    des: "Tobacco usage can be the make or break factor for your heart's vitality.",
  },
  {
    title: "Stress Management",
    des: "Prolonged stress can exact a toll on your heart. The practice of meditation and heart yoga is instrumental in effectively managing stress.",
  },
  {
    title: "Sustainable Lifestyle Transformations",
    des: "Commitment to enduring and impactful lifestyle shifts is the true pledge towards a healthier version of yourself.",
  },
  {
    title: "Routine Health Assessments",
    des: "Keeping a vigilant eye on and managing your blood pressure and cholesterol levels are vital in evaluating your risk profile.",
  },
];

const patientOptions = [
  "Myself",
  "Spouse",
  "Parent",
  "Child",
  "Relative",
  "Friend",
  "Other",
];

const LifeStyle = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Section 1 - Embrace Heart Wellness */}
      <section className="pt-28 pb-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <img
              src={yogaImg}
              alt="Young woman doing yoga"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-teal-700 mb-6">
              Embrace Heart Wellness
            </h1>
            <p className="text-gray-700 leading-relaxed text-justify">
              Heart Yoga and a Healthy Lifestyle for Your Heart
              Welcome to the world of SAAOL's Heart Healthy Lifestyle, your portal to a holistic approach to nurturing your heart's health. We firmly believe that the path to a heart-healthy existence extends far beyond conventional treatments. That's why we encourage the practice of heart yoga as an essential component of your cardiac care journey. Our tailored programs encompasses yoga for heart blockage, ensuring a comprehensive strategy for your heart's well-being. Uncover the profound impact of yoga on your heart's vitality. With the guidance of our top heart care experts, you can immerse yourself in the practice of yoga for heart health, seamlessly integrating it into your daily life. Yoga transcends being a mere existence; it evolves into a way of life that not only guards against heart disease but also nurtures for overall holistic well-being. Dive into our wealth of resources and set forth on a path towards enhanced heart health, guided by the principles of yoga and wholesome lifestyle changes. Prioritize your heart's enduring well-being by embarking on this transformative journey with SAAOL today.
            </p>
            <div className="mt-8">
              <button
                onClick={() => setModalOpen(true)}
                className="px-10 py-4 bg-teal-700 text-white font-bold text-lg rounded-full shadow-lg hover:bg-teal-800 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Book Your Appointment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Our Main Treatment */}
      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-700 text-center mb-6">
            Our Main Treatment
          </h2>
          <p className="text-gray-700 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
            Our highly-specialized team firmly believes in non-invasive methods for treating heart-related problems across all age groups. Our medical treatment is based on the ancient wisdom shared over generations. After comprehensive research, our specialized team has narrowed down 4 different treatment protocols to treat heart diseases.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-5">
                  <span className="text-teal-700 font-bold text-lg">{i + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-teal-700 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {card.des}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => setModalOpen(true)}
              className="px-10 py-4 bg-teal-700 text-white font-bold text-lg rounded-full shadow-lg hover:bg-teal-800 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Book Your Appointment
            </button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Appointment Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg p-8 relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl leading-none cursor-pointer"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold text-teal-700 mb-6 text-center">
              Book Your Appointment
            </h3>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Age</label>
                <input
                  type="number"
                  placeholder="Enter your age"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Who is the patient?</label>
                <select
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
                  required
                >
                  <option value="">Select an option</option>
                  {patientOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-teal-700 text-white font-bold text-lg rounded-xl shadow-lg hover:bg-teal-800 transition-all duration-300 cursor-pointer"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LifeStyle;
