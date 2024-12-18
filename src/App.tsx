import React from 'react';
import HeroSection from './components/HeroSection';
import AboutHackathon from './components/AboutHackathon';
import EventHighlights from './components/EventHighlights';
// import RegistrationForm from './components/RegistrationForm';
import PrizeSection from './components/PrizeSection';
import RulesSection from './components/RulesSection';
import Register from './components/Register';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />

      <div className="container mx-auto px-4 py-16 space-y-16">
        {/* About Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center mb-8">About the Event</h2>
          <AboutHackathon />
        
        </section>

        {/* Event Details */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center mb-8">Event Highlights</h2>
          <EventHighlights />
        </section>

        {/* Rules Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center mb-8">Rules & Regulations</h2>
          <RulesSection />
        </section>

        {/* Prizes Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center mb-8">Prizes & Recognition</h2>
          <PrizeSection />
        </section>

        {/* Registration Form */}
        <section className="max-w-4xl mx-auto space-y-8" id="register">
          <h2 className="text-3xl font-bold text-center mb-8">Register Your Team</h2>
          <Register />
        </section>
      </div>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 PW Institute of Innovation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;