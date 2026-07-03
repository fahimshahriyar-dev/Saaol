import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import info1 from "../../assets/images/info_slider1.jpg";

const specialisations = [
  "Rajiv Gandhi Rashtriya Ekta Award, 2002.",
  "Bhaksar Award for the year 2002 by bharat nirman.",
  "Samaj Ratna Award by Skjm Samiti, 2004.",
  "Rotary International Vocational Award, 2002.",
  "Swami Vivekanand Memorial Oration Award from Delhi Medical Association, 2004.",
  "MSPI outstanding personalities award by management studies promotion institute, 1998.",
  "Prominent Doctors Award by lion's club.1998",
];

const awards = [
  "P.S. Varier memorial speech at Arya Vidya Sala, Kottakkal, 1999.",
  "Kent Memorial lecture at Homeopathy Association, 1995.",
  "lBF Visionary award for, 2009 by Laksha Bharati Foundation.",
  "Sri Raghunath Rai Saraf Smriti Puraskar on 28th march, 2010 at the FICCI Auditorim, New Delhi.",
  "Health Siromani award on september 5, 2010 by famous Laughter Club.",
  "Jeevan Rakshak Award, by Kolkata Maheshwari Samaj in September 2010.",
  "Third A P Dewan Memorial lecture, 2006 by the Servants of the People Society, Lajpat Bhawan july, 2006.",
  "Doctor of the Year 2012 award by the India Book of Records presented on 27th february, 2013.",
  "Banga Seva Samman, 2011 – the prestigious award for the people of Bengal who have reached excellence.",
  "Manav Seva Ratna Samman in 2016 by Bhagwan Mahavir Seva Sansthan.",
];

const AboutDrBimalChhajer = () => {
  const [activeTab, setActiveTab] = useState<"specialisation" | "awards">(
    "specialisation",
  );

  return (
    <div className="min-h-screen w-screen bg-slate-50">
      <Navbar />

      {/* Section 1 - Image + Bio */}
      <section className="pt-32 pb-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={info1}
                  alt="Dr. Bimal Chhajer"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 bauhaus mb-2">
                Dr. Bimal Chhajer
              </h1>
              <p className="text-lg lg:text-xl text-teal-600 font-semibold mb-6">
                MBBS, MD, Founder | SAAOL
              </p>
              <p className="text-base lg:text-lg text-slate-700 leading-relaxed">
                Dr. Bimal Chhajer MBBS, MD is a well-known personality in the
                world of medical science in India and abroad. He is the pioneer
                of Non-invasive cardiology in India. Born in 1961 in a Jain
                family, Dr. Chhajer grew up in a small village in West Bengal
                and passed his matriculation with flying colours from a local
                school. He studied in St. Lawrence high school in Kolkata
                thereafter and in 1986 pursued his MBBS from R.G. Kar Medical
                College, Kolkata. At the age of 25, he shifted to Delhi, where
                he started working in the cardiology department in Dr. Ram
                Manohar Lohia Hospital, New Delhi. A particular incident changed
                his life here and reformed his idea about the treatment of
                cardiac patients. He started advocating non-invasive or
                preventive cardiology. He then completed his MD in 1989 from
                king George's Medical College, Lucknow where he took up a
                research study to treat heart patients using non-Invasive
                methods.
              </p>
            </div>
          </div>
          <p className="text-base lg:text-lg text-slate-700 leading-relaxed mt-6 w-full">
            Post MD he worked at the famous All India Institute of Medical
            Sciences (AIIMS) for six years (1989-1995) as a Senior Resident and
            as an Assistant Professor. He also got training in yoga therapy. His
            research at the AIIMS showed that not only heart patients could
            prevent coronary heart disease but can also reverse or cure heart
            disease. Dr. Chhajer during this stint also got trained by Dr. Dean
            Ornish, who pioneered the lifestyle treatment in USA. In 1995 based
            on his past research, Dr. Bimal chhajer resigned from AIIMS and
            started practically training and treating heart patients by his new
            treatment called "SAAOL" Science And Art Of Living in Delhi. In 1996
            Dr. Chhajer opened his second clinic in Mumbai and subsequently
            expanded to Kolkata, Chennai, Bangalore and Hyderabad. These were
            followed by a spread of Saaol Centers all over the country. In 2009
            Saaol opened its first international Center in Dhaka, Bangladesh and
            a year later in Nepal, Kathmandu. Currently Dr. Chhajer has 110
            centers across India and the subcontinent. Saaol Heart Center is now
            the largest chain of non-invasive cardiology clinics in the world.
            Brainchild of Dr. Chhajer, "Saaol Heart Program" today is a widely
            accepted treatment program for reversing heart disease – where in
            addition to the allopathic medicines, patients are taught yoga,
            meditation, zero oil cooking, stress management, exercise and
            medical knowledge. Dr. Chhajer has authored about 70 books for heart
            patients and health, his numerous lectures are available in the form
            of DVD, Internet/You tube. He is a magnificent teacher of preventive
            cardiology. Dr. Chhajer extensively travels all over India and world
            to promote non-invasive mode of treatment. He also publishes 2
            monthly magazines on heart care. He has treated over 4.5 lac heart
            patients successfully who could avoid bypass surgery or angioplasty.
            He has received many awards including Rajiv Gandhi Rashtriya Ekta
            award.
          </p>
        </div>
      </section>

      {/* Section 2 - Specialisations & Awards Tabs */}
      <section className="py-20 px-4 lg:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="flex border-b border-slate-200 mb-10">
            <button
              onClick={() => setActiveTab("specialisation")}
              className={`pb-4 px-6 text-lg font-semibold transition-colors duration-300 cursor-pointer ${
                activeTab === "specialisation"
                  ? "text-teal-600 border-b-2 border-teal-600"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              Specialisation & Certifications
            </button>
            <button
              onClick={() => setActiveTab("awards")}
              className={`pb-4 px-6 text-lg font-semibold transition-colors duration-300 cursor-pointer ${
                activeTab === "awards"
                  ? "text-teal-600 border-b-2 border-teal-600"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              Awards & Recognition
            </button>
          </div>

          <div>
            {activeTab === "specialisation" && (
              <ul className="space-y-4">
                {specialisations.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-slate-700 text-base lg:text-lg"
                  >
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {activeTab === "awards" && (
              <ul className="space-y-4">
                {awards.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-slate-700 text-base lg:text-lg"
                  >
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutDrBimalChhajer;
