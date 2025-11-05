import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import ChatbotPage from './pages/ChatbotPage';
import ChallengesPage from './pages/ChallengesPage';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-[#F1FAEE] dark:bg-gray-900 px-3 sm:px-4 lg:px-5">
        <Routes>
          <Route path="/" element={
            <>
              <Header onAuthClick={() => setIsAuthModalOpen(true)} />
              <main className="py-8">
                <Hero />
                <About />
                <Features />
                <Contact />
              </main>
            </>
          } />
          <Route path="/chat" element={<ChatbotPage />} />
          <Route path="/challenges" element={<ChallengesPage />} />
        </Routes>

        <Footer />

        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
        />
      </div>
    </Router>
  );
}

export default App;