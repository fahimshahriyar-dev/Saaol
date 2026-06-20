import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './style.css'
import Hero from './pages/Hero'
import Treatments from './pages/Treatments'

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/treatments" element={<Treatments />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
