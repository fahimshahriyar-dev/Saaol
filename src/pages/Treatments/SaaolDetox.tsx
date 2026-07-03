import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import detoxImg from "../../assets/images/about_slider3.jpg";

const SaaolDetox = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Section 1 - SAAOL Detox */}
      <section className="pt-28 pb-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <img
              src={detoxImg}
              alt="SAAOL Detox"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-teal-700 mb-6">
              SAAOL Detox
            </h1>
            <p className="text-gray-700 leading-relaxed text-justify">
              Saaol detox therapy is a mix of Allopathic Detox medicine called EDTA along with all possible ways to remove toxins from our body. It has Ayurveda, homeopathy, herbal drinks, Unani, and naturopathy components too. After successfully treatments many heart patients in the last twenty-six years, we have found that this Detox works much more effectively not only in removing toxins from the body but also helps in the reversal of blockages. The most important ingredient of this therapy is intravenous EDTA- which is an Indian government-approved anti-toxic medicine that helps in the removal of metal poisoning and other kinds of toxins from the body.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SaaolDetox;
