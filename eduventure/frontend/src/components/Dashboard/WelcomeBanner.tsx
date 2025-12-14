import React, { useState, useEffect } from 'react';
import { useEduVenture } from '../../context/EduVentureContext';

const WelcomeBanner: React.FC = () => {
  const { state } = useEduVenture();
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    'विद्या ददाति विनयं - Knowledge gives humility (Hitopadesha)',
    'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन - Do your duty without attachment to results (Bhagavad Gita)',
    'सत्यं वद धर्मं चर - Speak truth, practice righteousness (Upanishads)',
    'आत्मनो मोक्षार्थं जगद्धिताय च - For self-liberation and for the welfare of the world',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [quotes.length]);

  const timeOfDay = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'morning';
    if (hour < 17) return 'afternoon';
    return 'evening';
  };

  const getGreeting = () => {
    const time = timeOfDay();
    const greetings: Record<string, string> = {
      morning: '🌅 Good Morning',
      afternoon: '☀️ Good Afternoon',
      evening: '🌙 Good Evening',
    };
    return greetings[time];
  };

  return (
    <section 
      aria-label="Welcome banner"
      className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 p-8 text-white shadow-lg"
    >
      <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>

      {/* Floating decorative elements */}
      <div
        className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full animate-float"
        aria-hidden="true"
      ></div>
      <div
        className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full animate-float"
        style={{ animationDelay: '1s' }}
        aria-hidden="true"
      ></div>

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-3 animate-bounce-in select-none">
          {getGreeting()}, {state.student.name}!
        </h1>
        <p className="text-lg mb-6 text-blue-100">
          Ready for another day of amazing learning adventures?
        </p>

        <blockquote className="bg-white/10 backdrop-blur-sm rounded-xl p-5 max-w-2xl mx-auto">
          <p 
            className="text-sm font-medium text-blue-100 transition-opacity duration-500 animate-pulse"
            key={currentQuote}
          >
            {quotes[currentQuote]}
          </p>
        </blockquote>
      </div>
    </section>
  );
};

export default WelcomeBanner;
