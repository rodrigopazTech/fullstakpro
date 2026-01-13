import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CourseStructure from './components/CourseStructure';
import Bonus from './components/Bonus';
import Pricing from './components/Pricing';
import ChatWidget from './components/ChatWidget';
import Footer from './components/Footer';
import PagoExitoso from './pages/PagoExitoso';
import PagoFallido from './pages/PagoFallido';
import PagoPendiente from './pages/PagoPendiente';
import Privacidad from './pages/Privacidad';
import Instructor from './components/Instructor';
import StickyCTA from './components/StickyCTA';
import FAQ from './components/FAQ';
import { useScrollTracking, useTimeOnPage } from './lib/useAnalyticsTracking';

// Componente de la Landing Page principal
const LandingPage = () => {
  // Track scroll depth and time on page
  useScrollTracking();
  useTimeOnPage();

  return (
  <div className="min-h-screen bg-[#0B0F19] text-white selection:bg-primary-500/30">
    <Navbar />
    <main>
      <Hero />
      <CourseStructure />
      <Instructor />
      <Bonus />
      <Pricing />
      <FAQ />
    </main>
    <Footer />
    <StickyCTA />
    <ChatWidget />
  </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/pago-exitoso" element={<PagoExitoso />} />
      <Route path="/pago-fallido" element={<PagoFallido />} />
      <Route path="/pago-pendiente" element={<PagoPendiente />} />
      <Route path="/privacidad" element={<Privacidad />} />
    </Routes>
  );
}

export default App;
