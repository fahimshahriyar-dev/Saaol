import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './style.css'
import Home from './pages/Home/Home'
import Treatments from './pages/Treatments'
import Blog from './pages/Blog'
import Testimonial from './pages/Testimonial'
import Contact from './pages/Contact'
import AboutUs from './pages/About/AboutUs'
import AboutDrBimalChhajer from './pages/About/AboutDrBimalChhajer'
import AboutMohonRayhan from './pages/About/AboutMohonRayhan'
import PatientJourney from './pages/About/PatientJourney'
import SaaolWebinar from './pages/About/SaaolWebinar'
import PatientsInstructions from './pages/About/PatientsInstructions'
import ZeroOilCooking from './pages/Treatments/ZeroOilCooking'
import EeecpTreatments from './pages/Treatments/EeecpTreatments'
import LifeStyle from './pages/Treatments/LifeStyle'
import SaaolDetox from './pages/Treatments/SaaolDetox'
import BookContent from './pages/BookContent'

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/treatments" element={<Treatments />} />
        <Route path="/treatments/zero-oil-cooking" element={<ZeroOilCooking />} />
        <Route path="/treatments/eecp-treatments" element={<EeecpTreatments />} />
        <Route path="/treatments/lifestyle" element={<LifeStyle />} />
        <Route path="/treatments/saaol-detox" element={<SaaolDetox />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/book-content" element={<BookContent />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/about/dr-bimal-chhajer" element={<AboutDrBimalChhajer />} />
        <Route path="/about/mohon-rayhan" element={<AboutMohonRayhan />} />
        <Route path="/about/patient-journey" element={<PatientJourney />} />
        <Route path="/about/saaol-webinar" element={<SaaolWebinar />} />
        <Route path="/about/patients-instructions" element={<PatientsInstructions />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
