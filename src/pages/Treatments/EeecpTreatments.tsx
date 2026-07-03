import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import eecpTreatmentImg from "../../assets/images/eecp-treatment-3.png";
import anginaImg from "../../assets/images/Angina-a-chest-pain.png";
import benefitsImg from "../../assets/images/Benefits-of-EECP.png";

const EeecpTreatments = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Section 1 - EECP Treatment Origins */}
      <section className="pt-28 pb-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <img
              src={eecpTreatmentImg}
              alt="EECP Treatment"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-teal-700 mb-6">
              EECP Treatment Origins
            </h1>
            <p className="text-gray-700 leading-relaxed text-justify">
              The interesting history of EECP (Enhanced External Counterpulsation) began in the early 1960s China, within the halls of a research laboratory where pioneering minds embarked on a journey to rewrite the narrative of heart health. In this innovative laboratory, EECP treatment became a reality. A unique contraption took place – a set of inflatable cuffs designed to encircle a patient's legs. These cuffs soon emerged as the unsung heroes of cardiac care. As time went on, EECP developed and realised its extraordinary potential. The cuffs, when synchronised with the natural rhythm of the heart, held the power to perform miracles. EECP cuffs would inflate precisely during the heart's resting phase, lightening its load, and deflate precisely when the heart contracted, drive through a surge of life-giving blood. Today, the history of EECP treatment stands as one of the most sought after heart treatment that is effective and long lasting. It emerges as the most extraordinary heart disease solutions in the world of surgeries and western medicine. EECP's invention is an inspiration that is truly life-changing for heart patients seeking the best non-invasive heart treatment solution, forever altering the landscape of heart health.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 - Revolutionizing Heart Health */}
      <section className="py-20 px-6 md:px-16 bg-teal-900">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Revolutionizing Heart Health: EECP Treatment at SAAOL Heart Center
          </h2>
          <p className="text-lg leading-relaxed">
            Discover an innovative, non-invasive solution to enhance heart well-being and address cardiac blockages: EECP therapy. Immerse yourself in the forefront of medical progress at the SAAOL Heart Center, where state-of-the-art EECP treatment is meticulously designed to optimize blood circulation and promote comprehensive cardiovascular health.
          </p>
        </div>
      </section>

      {/* Section 3 - Understanding Angina */}
      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <img
              src={anginaImg}
              alt="Angina chest pain"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6">
              Understanding Angina: Your Heart's Message
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              The inner workings of our body is like a symphony, there exists a significant note that is angina. Angina is a message for your heart. Angina is a watchful reminder of your heart's well-being. It occurs when your heart muscle requires more oxygen than it received through it arteries. Angina is reminder that your heart is working religiously and may need your attention. Angina says, "Take a moment, breathe, and allow me to catch up." It is a reminder that your heart deserves care, attention, and sometimes, a change in your lifestyle – a healthier diet, regular exercise, or prescribed medications. It invites you to reduce risk factors, cherish your heart's vitality, and savor each heartbeat. To maintain a balanced heart health, angina serves its role, urging you to listen, respond, and ensure that your heart's message remains gentle – reminder of what is going inside our body. So, it is important to listen to your heart (Dil Ki Suno), its message lies the power to harmonise the workings of your heart.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 - Key advantages */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-8">
              Key advantages of EECP treatment
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>Effective Cardiac Care</strong> – rigorously researched, clinically proven and FDA approved regimen that enhances heart functionality by boosting blood flow to the coronary arteries.
              </li>
              <li>
                <strong>Gentle Approach</strong> – compared to traditional surgeries as it uses inflatable cuffs wrapped around the legs, synchronized inflation and deflation in rhythm with the heartbeat.
              </li>
              <li>
                <strong>Addressing Cardiac Blockages Naturally</strong> – by increasing the heart muscle's access to essential blood supply.
              </li>
              <li>
                <strong>Increased Vitality</strong> – right after 1 session resulting in elevated energy levels and an overall sense of well-being.
              </li>
              <li>
                <strong>Refined Blood Circulation</strong> – leads to higher oxygen and nutrient delivery to tissues.
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={benefitsImg}
              alt="Benefits of EECP"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Section 5 - Eligibility */}
      <section className="py-20 px-6 md:px-16 bg-teal-900">
        <div className="max-w-5xl mx-auto text-white">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            EECP Therapy: For Whom Does It Suit? Eligibility for EECP
          </h2>
          <p className="text-lg text-center mb-10 leading-relaxed">
            EECP therapy extends a compelling invitation for those navigating distinct challenges or personal preferences in their quest to address heart-related issues. The following eligibility criteria shed light on who stands to benefit from EECP therapy
          </p>
          <ul className="space-y-4">
            <li>
              <strong>Exclusion from Invasive Procedures:</strong> EECP therapy emerges as a particularly pertinent choice for individuals who do not meet the prerequisites for invasive interventions like surgical procedures. It presents an alternative avenue for tackling heart-related ailments.
            </li>
            <li>
              <strong>High-Risk Profiles:</strong> EECP therapy proves invaluable for individuals carrying an elevated risk due to concurrent medical conditions. It serves as a non-invasive lifeline for those at risk of complications associated with surgical interventions.
            </li>
            <li>
              <strong>Medication Efficacy Waning:</strong> When conventional medications fail to deliver the desired relief from angina or other heart-related symptoms, EECP therapy opens the door to renewed possibilities for enhanced heart health.
            </li>
            <li>
              <strong>Post-Invasive Procedure Resurgence:</strong> EECP therapy steps forward as an effective option for individuals contending with the resurgence of symptoms following invasive treatments like angioplasty, stenting, or bypass surgery.
            </li>
            <li>
              <strong>Infeasibility or High Surgical Risk:</strong> EECP Therapy presents a viable and secure alternative for individuals whose medical conditions renders surgery impractical or places them at a substantial risk of postoperative complications.
            </li>
            <li>
              <strong>Persistent Chest Discomfort:</strong> EECP therapy caters to those experiencing enduring chest pressure or discomfort, which varies with stress or physical exertion. It offers relief and contributes to overall heart wellness.
            </li>
            <li>
              <strong>Complex Coronary Architecture:</strong> When an individual's coronary structure poses complexities that impede the efficacy or escalate the risks associated with conventional treatments, EECP therapy steps in as a pragmatic and efficacious solution.
            </li>
          </ul>
        </div>
      </section>

      {/* Section 6 - What distinguishes SAAOL Heart Center */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-700 text-center mb-10">
            What distinguishes the SAAOL Heart Center's EECP treatment
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-teal-700 mb-4">Expert Proficiency</h3>
              <p className="text-gray-700 leading-relaxed">Entrust your well-being to our team of skilled professionals, experts in comprehensive cardiac care. With years of experience, we ensure vigilant supervision throughout your EECP therapy journey.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-teal-700 mb-4">Cutting-edge Technology</h3>
              <p className="text-gray-700 leading-relaxed">At the SAAOL Heart Center, our commitment lies in harnessing the latest technology and equipment to administer effective EECP therapy. Your safety remains our top priority.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-teal-700 mb-4">Personalized Care</h3>
              <p className="text-gray-700 leading-relaxed">Recognizing the unique nature of individual heart health needs, we customize our EECP therapy protocols to align with your specific requirements.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-teal-700 mb-4">Best EECP Treatment Cost</h3>
              <p className="text-gray-700 leading-relaxed">Discover an unmatched opportunity for cost-effective EECP treatment in India, cutting-edge facility is dedicated to delivering superior cardiac care through EECP therapy, designed to be affordable and accessible to all. The lowest EECP treatment for heart blockage in India without compromising on effectiveness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 - EECP Treatment Expenses */}
      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-700 text-center mb-6">
            EECP Treatment Expenses
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify mb-6">
            As you contemplate EECP therapy, it's important to know for yourself what are the accompanying expenses of this treatment. The cost of EECP treatment fluctuates based on factors such as geographical location, treatment duration, and individual health insurance coverage. To gain a comprehensive understanding of the financial aspects, it is prudent to engage in discussions with healthcare professionals. Seek their counsel on the specific costs tied to EECP therapy within your locality.
          </p>
          <h3 className="text-2xl font-bold text-teal-700 mb-4">Why low cost EECP Treatment?</h3>
          <p className="text-gray-700 leading-relaxed text-justify">
            The EECP therapy cost at the SAAOL Heart Center is thoughtfully designed to be competitive and accessible. Our commitment to your well-being ensures that you receive exceptional care that aligns with your budget, prioritizing both your heart health and financial comfort. We prioritize extending advanced cardiac care to all those in need.
          </p>
        </div>
      </section>

      {/* Section 8 - Preparing for EECP Therapy */}
      <section className="py-20 px-6 md:px-16 bg-teal-900">
        <div className="max-w-5xl mx-auto text-white">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Preparing for EECP Therapy: A Journey Towards Heart Wellness
          </h2>
          <p className="text-lg text-center mb-12 leading-relaxed">
            Before you embark on your Enhanced External Counterpulsation (EECP) therapy, a series of vital steps and preparations ensure a smooth and effective experience. Your path to improved heart health begins with thorough evaluation and thoughtful planning:
          </p>

          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold mb-4">Before EECP therapy: The Foundation for Best Heart Blockage Treatment</h3>
              <ul className="space-y-4">
                <li><strong>Medical Evaluation</strong> conducted by skilled healthcare professional. This assessment is to know your medical history, current health status, and the specific heart condition you are facing. The goal is to determine whether EECP is suitable and beneficial option to your needs.</li>
                <li><strong>Informative session</strong> to receive detailed information about EECP therapy. This session will equip you with a clear understanding of what to expect during the therapy, its potential benefits, and addresses any questions or concerns you may have.</li>
                <li><strong>Health Monitoring</strong> throughout your EECP therapy sessions. Your vital signs, including blood pressure and heart rate, are closely monitored to ensure your safety and comfort throughout the process.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">During EECP Therapy: The Heart's Renewal</h3>
              <ul className="space-y-4">
                <li><strong>Setup for Best Comfort</strong>, reclining position on a specialised treatment bed. Large cuffs, like blood pressure cuffs but designed for precision, are gently secured around your calves, thighs and buttocks.</li>
                <li>The therapy begins as these cuffs inflate and deflate in a synchronised manner, aligning with your own heartbeat. This inflation-deflation process assists in enhancing blood flow back to your heart, thereby reducing its workload and fastens healing.</li>
                <li>A typical EECP session is about an hour. During this time, you are encouraged to relax and unwind. Many individuals choose to read, watch TV, listen to music, or simply enjoy their peace time.</li>
                <li>A complete EECP course typically includes 35 sessions, scheduled over five days each week. This regimen extends over several weeks to optimize its benefits.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">After EECP Therapy: Nurturing Heart Health Beyond the Sessions</h3>
              <ul className="space-y-4">
                <li>For many individuals, the positive effects of EECP therapy become evident even after just a few sessions. Reduced chest discomfort, increased vitality, and an overall sense of well-being often emerge as immediate benefits of EECP treatment.</li>
                <li>EECP treatment is an inspiration for positive lifestyle adjustments. Patients often find themselves adopting heart-healthy diets, embracing regular exercise routines, and incorporating stress management practices into their daily lives.</li>
                <li><strong>Long-Term Benefits</strong> of EECP treatment like improved blood circulation, no more angina symptoms, and an enhanced quality of life are enduring advantages.</li>
                <li>Your healthcare team will arrange follow-up appointments to monitor your progress and address any further steps required to safeguard and enhance your heart health.</li>
                <li>To get the full and remarkable benefits of EECP, it is important to continue practicing heart-healthy habits. This includes maintaining regular exercise, having a balanced diet, and, if prescribed, staying committed to your prescribed medication program.</li>
              </ul>
            </div>
          </div>

          <p className="text-lg mt-10 text-center">
            Remember, EECP treatment is an important treatment for your heart health. Ongoing communication with your healthcare professional and following their recommendations should be prioritized as it helps with your long-term well-being.
          </p>
        </div>
      </section>

      {/* Section 9 - Embark on Heart Wellness */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-8">
            Embark on Heart Wellness Through EECP Treatment
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
            Embark on a journey toward enhanced heart health with EECP therapy at the SAAOL Heart Center. Blending cutting-edge therapy with individualized attention, our mission is to elevate your cardiovascular vitality and rekindle a zest for life. Choose EECP treatment for your cardiac well-being, confront arterial blockages proactively, and embrace the benefits of an approach that emphasizes holistic wellness. At the SAAOL Heart Center, EECP Treatment Cost is reasonable because your heart's health is our utmost priority. Begin Your Path to Heart Wellness by unlocking the potential of EECP treatment – an affirmative stride towards fortified heart health.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EeecpTreatments;
