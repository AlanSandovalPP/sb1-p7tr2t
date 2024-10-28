import React from 'react';
import { Smartphone, CreditCard, BarChart3, UserPlus, CheckCircle, Gift } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CallToAction from './components/CallToAction';
import SocialProof from './components/SocialProof';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#F5F0E8] text-gray-800 font-sans">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <CallToAction />
        <SocialProof />
      </main>
      <Footer />
    </div>
  );
}

export default App;