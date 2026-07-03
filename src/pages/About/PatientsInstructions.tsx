import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  PersonStanding,
  Dumbbell,
  Book,
  CircleMinus,
  CupSoda,
  Wheat,
  FlaskConical,
  Pill,
  PenLine,
  Brain,
} from "lucide-react";

const instructions = [
  {
    icon: PersonStanding,
    title: "Walk Everyday",
    des: "Every day, do a 35-minute walk on an empty stomach. If you have angina, your speed may be reduced. If you're in bed or have just gotten out of an emergency, start with one minute per day and gradually increase up to 35 minutes.",
  },
  {
    icon: Dumbbell,
    title: "Yoga",
    des: 'Please watch Dr. Chhajer\'s three videos on YouTube titled "Daily Yoga for Heart." There are three videos. Begin with first and third video. After a week or so, add the second one. It will take approximately 25 minutes per day.',
  },
  {
    icon: Book,
    title: "Zero Oil Cooking",
    des: "To be completely adopted from the beginning. SAAOL has created 1000 tasty recipes for which you can subscribe to our YouTube channel \"Zero oil recipes\" or refer to our cookbooks. Spices are to be fried in water which is to be added in drops as and when required.",
  },
  {
    icon: CircleMinus,
    title: "Animal Foods",
    des: "Completely avoid all kinds of animal foods like meat, chicken, fish, egg yolk etc.",
  },
  {
    icon: CupSoda,
    title: "Milk and Milk Products",
    des: "Dairy products are allowed if you use double toned (200ml) or skimmed milk (500ml).",
  },
  {
    icon: Wheat,
    title: "All Nuts and Seeds",
    des: "Avoid almond, walnuts, cashew nuts, ground nuts, coconut and pistachio. Seeds like Alsi (Linseeds) and khas khas should be restricted.",
  },
  {
    icon: FlaskConical,
    title: "Diabetes",
    des: "If you have diabetes, measure your blood sugar level on a regular basis. Our aim is to keep it under 100 (during fasting) and 140 (after meal). Three months sugar (HB A1c) should be below 6.5%.",
  },
  {
    icon: Pill,
    title: "Medications",
    des: "Medicines prescribed by SAAOL are mainly allopathic. You should take them as instructed till the next consultation. You should also know the basic purpose/use of all medicines. Once the patient shows improvement, our aim will be to reduce it as far as possible.",
  },
  {
    icon: FlaskConical,
    title: "Lipid Profile",
    des: "As directed by your physician, get your blood lipid profile tested once a month, then every three months or 3-4 times a year. Cholesterol should be below 130 mg/dL, Triglycerides should be below 100 mg/dL, and Good Cholesterol (HDL) should be more than 25% of cholesterol level.",
  },
  {
    icon: PenLine,
    title: "Smoking/Tobacco",
    des: "Stop smoking and intake of other forms of tobacco immediately. Any kind of alcohol is bad for heart and should be avoided.",
  },
  {
    icon: Brain,
    title: "Stress",
    des: "Patient must try to reduce psychological stress (anger, worry, anxiety etc.) as far as possible. Please follow Dr. Chhajer's talks on stress management or read his book on the same topic.",
  },
];

const PatientsInstructions = () => {
  return (
    <div className="min-h-screen w-screen bg-slate-50">
      <Navbar />

      <section className="pt-32 pb-20 px-4 lg:px-8">
        <div className="container mx-auto">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 bauhaus text-center mb-16">
            Instructions for Patient's
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {instructions.map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col border border-slate-100"
                >
                  <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {card.des}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PatientsInstructions;
