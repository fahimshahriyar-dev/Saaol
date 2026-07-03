import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Hero from "./Hero";
import HomeAbout from "./HomeAbout";
import Benefit from "./Benefit";
import Conditions from "./Conditions";
import WhyUs from "./WhyUs";
import EECPTherapy from "./EECPTherapy";
import Reviews from "./Reviews";
import Faq from "./Faq";
import CenterDetails from "./CenterDetails";
import Footer from "../../components/Footer";

const Home = () => {
  const [section, setSection] = useState<"hero" | "homeabout">("hero");
  const location = useLocation();

  // Handle navigation state from other pages
  useEffect(() => {
    const targetSection = (location.state as { section?: string })?.section;
    if (targetSection === "homeabout") {
      setSection("homeabout");
      // Clear state so back navigation doesn't re-trigger
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  // Handle custom event from Navbar "HomeAbout" click
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail === "homeabout") setSection("homeabout");
      if (detail === "hero") setSection("hero");
    };
    window.addEventListener("goto-section", handler);
    return () => window.removeEventListener("goto-section", handler);
  }, []);

  const goToHomeAbout = () => {
    setSection("homeabout");
  };

  const goToHero = () => {
    setSection("hero");
  };

  return (
    <div className={`relative h-screen w-screen bg-slate-50 ${section === "homeabout" ? "overflow-y-auto" : "overflow-hidden"}`}>
      <Navbar whiteLogo={section === "hero"} />

      {section === "hero" && (
        <Hero key="hero" standalone={false} onGoToHomeAbout={goToHomeAbout} />
      )}

      {section === "homeabout" && (
        <HomeAbout key="homeabout" standalone={false} onGoToHero={goToHero} />
      )}

      <Benefit/>

      <Conditions/>

      <WhyUs/>

      <EECPTherapy/>

      <Reviews/>

      <Faq/>

      <CenterDetails/>

      <Footer/>
    </div>
  );
};

export default Home;
