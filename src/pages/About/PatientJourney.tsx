import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const patientCards = [
  {
    title: "Vinod Kumar Joshi",
    subtitle: "Home Town: Uttrakhand",
    des: "I was experiencing serious chest pain and nausea so I decided to visit a local hospital in Haldwani, Uttarakhand from where I was referred to Sri Ram Moorti hospital and got my angiography done. After the angiography, the doctors diagnosed that I had a massive heart attack. With the help of some friends, I got to know about Dr. Bimal Chhajer and SAAOL Heart Center where I started my EECP treatment and Detox Therapy along with lifestyle change, yoga, and meditation and followed a zero oil diet plan for 40 days. Now it has been more than 6 years since the treatment at SAAOL and my blockages have reduced from 99% to 50%. I am able to walk and do daily routine work without any problem and all this was possible without any bypass surgery or angioplasty.",
  },
  {
    title: "Mrs. Chameli Khaka",
    subtitle: "Home Town: Delhi",
    des: "I had a minor heart attack in 1989 and doctors told me that getting bypass surgery is my only option but I refused. I met Dr. Bimal Chhajer at a medical residential camp in Faridabad and at that time I was unable to do day-to-day work due to excessive pain in my body and I was taking atleast 6-7 Sorbitrate tablets per day. I immediately started the EECP treatment and Detox Therapy along with diet and lifestyle changes including yoga, and meditation, and followed a zero oil diet plan for 40 days. For 2 years I kept on following these lifestyle changes and now after 25 years I am completely fine and I am also able to do normal day-to-day activities very easily. All this was made possible SAAOL without any kind of bypass surgery or angioplasty.",
  },
  {
    title: "Ashok Gupta",
    subtitle: "Home Town: Firozabad, U.Ps",
    des: "About 6-7 months ago I suffered from minor angina due to which doctors told me to go for a stent. After 3 months, I had a Heart stroke which got me really worried about my health. A friend recommended Dr.Bimal's YouTube channel and I got to know about Natural Bypass. It is a process that treats Heart blockage without any surgery and I started my treatment immediately. I took 35 EECP sessions along with medication and followed the SAAOL Lifestyle. I am so relieved now as my condition has improved tremendously and I am at ease now. I would like to thank Dr.Chhajer for his advise and for healing lakhs of Heart patients the Natural way. I will definitely spread knowledge about this treatment to my near and dear ones.",
  },
  {
    title: "Dinesh Ganga",
    subtitle: "Home Town: Hyderabad",
    des: "I was advised for Angiography by the doctors as my coronary artery was 90% blocked. Last year my cousin advised me to contact Dr.Bimal Chhajer. Upon consultation, I was told there is no need of bypass surgery instead I can opt for a Natural Bypass and make changes in my Lifestyle to reverse the damage. I started my treatment and within 35 days of the process I have experienced healing. I would recommend all Heart patients to consult SAAOL before getting any kind of Heart surgery.",
  },
  {
    title: "Wife of Mr Yash Pal",
    subtitle: "Home Town: Delhi",
    des: "Year ago my husband was suffering from angina and discomfort in walking and doing sedentary activities. We heard about SAAOL through YouTube. We consulted Dr.Chhajer and were told that my husband's Heart health could get better without surgery and with a few lifestyle changes. Post completion of the treatment his test reports only showed 50% blockage. He takes his regular medication and follows the SAAOL recommended Lifestyle like Zero Oil Cooking, Yoga, etc. His health is constantly improving. We are very grateful to SAAOL and Dr.Chhajer for his noble service for the society.",
  },
  {
    title: "Manju Pannwali",
    subtitle: "Home Town: New Delhi",
    des: "My blockage was 80-90% and heart pumping was about 24 and my main complaints were discomfort, unable to walk, major breathing issues. That is when I came across SAAOL and Dr. Bimal Chhajer. I watched his lectures and learned that Heart blockages can be reversed without surgery and with a few lifestyle changes. I started my treatment at SAAOL and within a month's time I feel much healthier and are able to perform all day-to-day activities with ease. I am able to walk for an hour daily, I don't feel fatigue or any kind of discomfort now. I am very grateful to Dr. Chhajer for his guidance and for providing heart patients with an alternate that is cost effective also.",
  },
  {
    title: "Juggal Kishore Aggarwal",
    subtitle: "Home Town: Haryana",
    des: "In May 2017 I was feeling discomfort and was admitted to hospital. I was told to go for Angioplasty. I refused a surgery as I had seen Dr.BimalChhajer's videos on YouTube where he spoke about a Non Invasive Heart Treatment. I consulted SAAOL and without any delays I started my treatment. I took 35 EECP sittings and followed the SAAOL Lifestyle Guide religiously. I started feeling difference after the treatment and my CT angiography results showed that only 20% blockage was left. I am happy that I consulted SAAOL before going ahead with any kind of surgery and I will recommend all the heart patients to learn more about Dr.Bimal's treatment.",
  },
  {
    title: "Rajendra",
    subtitle: "Home Town: Old Delhi",
    des: "In 2018 I was feeling very uncomfortable so when I got a CT Angiography done, my blockage turned out to be 70% in one artery and 40% in the other. Thereafter I was advised to go through an Angioplasty. I came across Dr. Chhajer's video on Youtube about the alternatives to surgery. Upon consultation I started my treatment and I followed his advise religiously. I must advise you all to have patience and follow discipline will help you heal your Heart health. I got a CT Angiography done after the treatment and my blockage came down to 40%. I am very Thankful to Dr. Chhajer and his entire team.",
  },
];

const PatientJourney = () => {
  return (
    <div className="min-h-screen w-screen bg-slate-50">
      <Navbar />

      <section className="pt-32 pb-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 bauhaus text-center mb-16">
            SAAOL's Patient Journey
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {patientCards.map((card, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col border border-slate-100"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {card.title}
                </h3>
                <p className="text-sm font-medium text-teal-600 mb-4">
                  {card.subtitle}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {card.des}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PatientJourney;
