import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CourseStructure from './components/CourseStructure';
import Schedule from './components/Schedule';
import Bonus from './components/Bonus';
import Pricing from './components/Pricing';
import ChatWidget from './components/ChatWidget';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white selection:bg-primary-500/30">
      <Navbar />
      <main>
        <Hero />
        <CourseStructure />
        <Schedule />
        <Bonus />
        <Pricing />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;
