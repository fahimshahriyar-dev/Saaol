import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import heroImg from "../../assets/images/zero-oil-cooking-page.jpeg";
import familyCookingImg from "../../assets/images/family-cooking-food.jpg";
import textBgVideo from "../../assets/videos/text-background.mp4";
import steamingImg from "../../assets/images/Steaming.jpg";
import bakingImg from "../../assets/images/Cooking-Baking.jpg";
import grillingImg from "../../assets/images/Grilling.jpg";
import stirFryImg from "../../assets/images/Stir-Frying-Without-Oil.jpg";
import airFryImg from "../../assets/images/Air-Frying.jpg";
import pureeImg from "../../assets/images/Pureeing-and-Blending.jpg";
import kurkuriBhindi from "../../assets/images/kurkuri-bhindi.png";
import choclateCake from "../../assets/images/zero-oil-choclate-cake.png";
import palakPaneer from "../../assets/images/palak-paneer-thali.jpg";
import masalaGobhi from "../../assets/images/masala-gobhi.png";
import curdRice from "../../assets/images/curd-rice.png";
import regularThali from "../../assets/images/regular-thali.jpg";
import pohaCutlets from "../../assets/images/Poha-Katlate.png";
import oatsCookies from "../../assets/images/oats-cookies.png";
import nutritionalThali from "../../assets/images/Zero-oil-Nutritional-thali.png";

const techniques = [
  {
    img: steamingImg,
    title: "Steaming",
    points:
      "Steaming is a fantastic way to preserve the natural flavors and nutrients in your food. Steam vegetables, dumplings, and even fish for a light and healthful meal. Watch SAAOL zero-oil cooking recipes in Hindi and learn creative and tasty ways to steam dishes.",
  },
  {
    img: bakingImg,
    title: "Baking & Roasting",
    points:
      "Oven-baked and roasted dishes can be incredibly flavorful without the need for oil. Roast your favorite vegetables, marinated with herbs and spices, for a crispy and savory side dish. Explore zero-oil baking recipes, from savory muffins to guilt-free sweets.",
  },
  {
    img: grillingImg,
    title: "Grilling",
    points:
      "Grilling brings out the smoky essence of your ingredients without oil. Prepare marinated vegetables or paneer on the grill for that authentic smokey flavor. Find zero-oil cooking recipes that feature grilled delights.",
  },
  {
    img: stirFryImg,
    title: "Stir-Frying Without Oil",
    points:
      "You can stir-fry without oil. Use vegetable broth or water for a similar effect. Sauté your favorite vegetables, paneer or sweet corn with flavorful sauces and spices. Discover creative recipes without oil with SAAOL that capture the essence of stir-frying.",
  },
  {
    img: airFryImg,
    title: "Air Frying",
    points:
      "Air fryers use hot air circulation to crisp up food with little to no oil. Enjoy guilt-free crispy snacks like sweet corn pops or potato fries. Explore SAAOL zero-oil air frying recipes for a healthier take on fried favorites.",
  },
  {
    img: pureeImg,
    title: "Pureeing and Blending",
    points:
      "Create creamy soups and sauces without adding oil. Puree ingredients like yogurt for a soft, flavorful and oil-free dressing. Find out more through SAAOL zero-oil cooking recipes and explore the tasty power of blending.",
  },
];

const recipes = [
  {
    img: kurkuriBhindi,
    title: "Zero Oil Kurkuri Bhindi",
    des: "Kurkuri bhindi, is an easy and simple crispy ladies finger zero oil recipe made with tender okra's. It is a popular north Indian or Punjabi side dish recipe which can be served as an appetizer or as a lunch menu. There are many ways the crispy okra recipe can be made, but this recipe dedicates to the besan and tender okra's and the best part is its taste similar to fried bhindi with better nutrition value.",
  },
  {
    img: choclateCake,
    title: "Zero Oil Chocolate Cake",
    des: "Instead of craving for processed and fat indulged cakes and pastries we can go for such cake which is free from oil, ghee and less calorie which can be made at home and a healthy option to feed your cravings for chocolate cake even without all the added fat and sugar so you can enjoy this cake, The cake is a little healthier and lower in fat, but you can hardly tell. It's still very moist and fluffy and tastes like a regular cake.",
  },
  {
    img: palakPaneer,
    title: "Zero Oil Palak Paneer Thali",
    des: "As the name suggests Zero Oil Thali! As Indian food cannot be made without oil or ghee is in for a surprise! A thali with delicious zero oil Indian recipes where palak paneer and aloo chokha is taste equally good as compare to restaurant style palak paneer. This zero oil thali will be of great interest to all those who avoid oil and ghee due to health reasons or are trying to cut down on calories.",
  },
  {
    img: masalaGobhi,
    title: "Zero Oil Masala Gobhi",
    des: "Cauliflower is an all-time favorite vegetable, but mostly deep-fried or saut\u00e9ed in oodles of oil. As a healthy change from these formats, try this delicious masala gobhi, Not only is this Indian cauliflower curry oil-free and low-calorie, it is also excessively tasty and nutritious, brimming with the goodness of vitamin C, fibre and calcium. Flavored excitingly with a semi-spicy paste, this wholesome zero oil masala gobhi is a brilliant accompaniment to steaming hot parathas.",
  },
  {
    img: curdRice,
    title: "Curd Rice",
    des: "Curd rice is a South Indian dish made with precooked rice, Curd, herbs & tempering spices. It is more often eaten by South Indians as a part of the meal, all round the year. Apart from being gut healthy, Curd rice is also a comforting summer food which keeps the body cool. A lot of people eat it alongside Podi, papad, Pickle ; some love to top it with pomegranate arils or raw cucumber & onions and here it is prepared without oil so it's a healthy option to enjoy.",
  },
  {
    img: regularThali,
    title: "Zero oil Regular thali",
    des: "This Zero Oil Thali is complete with a Rajma, Aloo beans, Rice, Roti, Salad. The good part about this Zero Oil Thali is that despite no oil or ghee being used to cook the dishes, they taste just as great and delicious as food cooked with oil. In this Zero Oil Thali you will enjoy the familiar flavors of our regular Indian food and will realize that no oil or ghee has been added at all, and healthy meal as a lunch.",
  },
  {
    img: pohaCutlets,
    title: "Zero Oil Poha Cutlets",
    des: "Poha or flattened rice is an ingredient that can be used in many ways. From poha various recipes can be made for breakfast as well as snacks. Making cutlets without oil with them is a novel way of using them. Which is very easy, interesting to make and tastes delicious even without oil.",
  },
  {
    img: oatsCookies,
    title: "Zero Oil Oats Cookies",
    des: "If you love oats and cookies but want a healthier version, you need to try this recipe ASAP! Not only soft-baked but they still have that classic chewy texture of oats in cookie. These are made with healthy ingredient like oats, dates, jaggery, elaichi powder, baking powder, and milk. Homemade option for dessert or a healthy breakfast.",
  },
  {
    img: nutritionalThali,
    title: "Zero Oil Nutritional Thali",
    des: "Have you ever think that Thali a proper meal with sprouts veg, aloo- matar, rice, chapatti, salad which can be prepared at home that it without a single drop of oil which not only fulfill your taste buds but also packed with emense nutrients which will accomplish your nutritional needs and healthy for everyone.",
  },
];

const ZeroOilCooking = () => {
  const openYouTube = () => {
    window.open("https://www.youtube.com/c/ZerooilRecipes", "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Section 1 - Hero */}
      <section className="pt-28 pb-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <img
              src={heroImg}
              alt="Zero Oil Cooking"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-teal-700 mb-6">
              About Zero Oil Cooking
            </h1>
            <p className="text-gray-700 leading-relaxed text-justify">
              Welcome to the world of zero-oil cooking, where health meets taste
              in the most delightful way! At SAAOL, we are passionate advocates
              of zero-oil cooking, a culinary philosophy that not only
              tantalizes your taste buds but also promotes your well-being. In
              this era of rising health consciousness, zero-oil cooking stands
              as a beacon of nutritious, delicious, and heart-friendly cuisine.
              Zero-oil cooking, as the name suggests, eliminates the use of
              cooking oils, a major source of unhealthy fats. It's a culinary
              technique that relies on innovative cooking methods and natural
              flavors of ingredients to create mouth-watering dishes without a
              drop of oil. This approach not only reduces the calorie content of
              your meals but also helps in managing cholesterol levels and
              maintaining a healthy heart.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 - Advantages with video bg */}
      <section className="relative overflow-hidden py-20 px-6 md:px-16">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={textBgVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-teal-900/70" />
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Advantages of Oil Free Cooking
            </h2>
            <ul className="space-y-4">
              <li>
                <strong>Heart Health:</strong> Zero-oil cooking significantly
                reduces the intake of saturated and trans fats, contributing to
                a healthier heart.
              </li>
              <li>
                <strong>Weight Management:</strong> With fewer calories from
                fats, zero-oil meals can support your weight management goals.
              </li>
              <li>
                <strong>Better Digestion:</strong> Oil-free meals are often
                easier to digest, making them suitable for those with digestive
                sensitivities.
              </li>
              <li>
                <strong>Enhanced Flavors:</strong> Eliminating oil allows the
                natural flavors of ingredients to shine, resulting in more
                flavorful dishes.
              </li>
              <li>
                <strong>Lower Cholesterol:</strong> Zero-oil cooking can help
                lower "bad" LDL cholesterol levels, reducing the risk of heart
                disease.
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={familyCookingImg}
              alt="Family Cooking Food"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Section 3 - Disadvantages */}
      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-700 text-center mb-10">
            Disadvantages of Consuming Oil-Based Foods
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 text-justify">
            While oils are a common ingredient in many dishes, they come with
            several disadvantages that can impact your overall health and
            well-being. Understanding these drawbacks is essential to make
            informed choices, and that's where zero-oil cooking comes into play
            as a healthier alternative. Let's explore some of the drawbacks of
            consuming oil-based foods:
          </p>
          <ul className="space-y-4 text-gray-700">
            <li>
              <strong>Excess Calories:</strong> Oils are calorie-dense and
              consuming them can lead to excess calorie intake, contributing to
              weight gain and obesity when not balanced with physical activity.
            </li>
            <li>
              <strong>High in Unhealthy Fats:</strong> Most cooking oils contain
              unhealthy saturated and trans fats, which can raise "bad" LDL
              cholesterol levels in your blood which is a risk factor for heart
              disease.
            </li>
            <li>
              <strong>Digestive Discomfort:</strong> Oil-rich foods can be heavy
              on the digestive system which can lead to indigestion, bloating,
              and discomfort, especially when consumed in excess.
            </li>
            <li>
              <strong>Risk of Chronic Diseases:</strong> A diet rich in
              oil-based foods is associated with an increased risk of chronic
              diseases such as heart disease, stroke, and diabetes.
              Overconsumption of oil-based food can lead to inflammation and
              insulin resistance.
            </li>
            <li>
              <strong>Effect on Blood Pressure:</strong> High sodium content in
              many oil-based processessed foods can raise blood pressure,
              increasing the risk of hypertension.
            </li>
            <li>
              <strong>Reduced Nutrient Absorption:</strong> Consuming excessive
              oils can interfere with the absorption of fat-soluble vitamins
              like A,D,E and K. This can lead to nutrient deficiencies over
              time.
            </li>
            <li>
              <strong>Inflammatory Response:</strong> Some oils, especially
              those high in omega-6 fatty acids, can promote inflammation in the
              body when consumed in excess. Chronic inflammation is linked to
              various health issues.
            </li>
            <li>
              <strong>Calorie-Dense, Nutrient-Poor:</strong> Consuming these
              foods may lead to a diet that is deficient in vitamins, minerals,
              and fiber.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-6 text-justify">
            In contrast, zero-oil cooking focuses on harnessing the natural
            flavors of ingredients through innovative cooking techniques to
            create delicious, nutritious meals without the disadvantages
            associated with oil-based foods. By embracing this healthier
            approach, you can enjoy satisfying meals that support your
            well-being and promote a heart-healthy lifestyle.
          </p>
        </div>
      </section>

      {/* Section 4 - Why Avoid Oil-Based Food with video bg */}
      <section className="relative overflow-hidden py-20 px-6 md:px-16">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={textBgVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-teal-900/70" />
        <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Why Avoid Oil-Based Food?
          </h2>
          <p className="text-lg mb-8">
            In your journey towards a heart-healthy lifestyle, one of the most
            impactful choices you can make happens right in your kitchen.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-bold text-xl mb-3">
                Zero-oil Cooking Cuts Calories
              </h3>
              <ul className="space-y-2 text-sm">
                <li>- Every tablespoon of oil contains around 120 calories.</li>
                <li>
                  - Adopting zero-oil cooking means eliminating unnecessary
                  calories.
                </li>
                <li>
                  - Ideal for weight management and reducing the risk of
                  obesity-related issues.
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-bold text-xl mb-3">
                Lower Cholesterol with Zero-Oil Cooking
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  - Many oils are high in saturated and trans fats, which can
                  elevate cholesterol levels.
                </li>
                <li>
                  - Zero-oil cooking helps you cut out these harmful fats.
                </li>
                <li>
                  - Ideal for those managing cholesterol-related health
                  concerns.
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-bold text-xl mb-3">
                Preserve Nutrients Through Zero-Oil Cooking
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  - Frying and saut\u00e9ing in oil can lead to nutrient loss
                  due to high temperatures.
                </li>
                <li>
                  - Zero-oil cooking methods like steaming, boiling, and baking
                  retain maximum nutritional value.
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-bold text-xl mb-3">
                Gentler on Digestion
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  - Oil-heavy meals can be too much for the stomach and cause
                  discomfort.
                </li>
                <li>
                  - Zero-oil cooking promotes easier digestion and
                  gastrointestinal health.
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-bold text-xl mb-3">
                Reduce the Risk of Chronic Diseases
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  - Diets high in added fats, like cooking oils, are linked to
                  diabetes, certain cancers and Alzheimer's.
                </li>
                <li>
                  - Eliminating oil from your cooking reduces these risks.
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-bold text-xl mb-3">
                Enhanced Natural Flavors
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  - Zero-oil cooking allows the true flavors of ingredients to
                  shine.
                </li>
                <li>
                  - Discover a world of herbs, spices, and techniques to
                  elevate meals without oil.
                </li>
              </ul>
            </div>
          </div>
          <p className="text-lg mt-8">
            Therefore, opting for Zero-oil cooking is the most significant step
            towards a heart-healthy lifestyle and with SAAOL zero-oil cooking
            recipes, you can begin your journey to better health today!
          </p>
        </div>
      </section>

      {/* Section 5 - Mastering Techniques with 6 cards */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-700 text-center mb-12">
            Mastering the Art of Zero-Oil Cooking: Creative Techniques and
            Recipes
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {techniques.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-52 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-bold text-teal-700 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.points}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 - Healthy food recipes with 9 cards */}
      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-700 text-center mb-6">
            What are some healthy food recipes without Oil
          </h2>
          <p className="text-gray-700 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
            Some famous and delicious Indian dishes like appe, chilla, chole
            bhature, chocolate cake, kachori, veg biryani, balushahi, aloo
            tikki, and many more. Indians don't know much about zero oil cooking
            recipes. To teach people how to do cooking without oil and make
            delicious dishes like these, we have our own Youtube Channel named
            "SAAOL's Zero Oil Kitchen". We have some expert dieticians and
            nutritionists who will show and explain every step in detail on how
            to cook delicious food healthily. Some recipes without oil are
            discussed below.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-52 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-bold text-teal-700 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.des}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 - YouTube Subscribe */}
      <section className="py-20 px-6 md:px-16 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            These are just a few examples of recipes without oil but we know
            numerous of them and if you are wondering that you neither know
            their name nor know how to cook them, so we are here to teach you
            how you can do that. You can visit our Youtube Channel to know how
            to do cooking without oil, we have made detailed informative videos
            on many recipes. We have also created a dedicated playlist for you
            so don't have to waste your time to find them and can easily access
            what you are looking for.
          </p>
          <button
            onClick={openYouTube}
            className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-700 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Subscribe to SAAOL's Zero Oil Kitchen
          </button>
        </div>
      </section>

      {/* Section 8 - Zero Oil Cooking Process with videos */}
      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-6">
            Zero Oil Cooking Process
          </h2>
          <p className="text-gray-700 text-lg mb-12 max-w-3xl mx-auto">
            With the help of our expert chefs, we have come up with over 1000
            delicious recipes without using a single drop of oil.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/wvwsMmpAX28"
                title="Zero Oil Cooking Video 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/9xd2Y7gKQMo"
                title="Zero Oil Cooking Video 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/wvwsMmpAX28"
                title="Zero Oil Cooking Video 3"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ZeroOilCooking;
