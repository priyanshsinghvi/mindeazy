import React from 'react';
import { Brain, Heart, Users, Calendar } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Support",
      description: "24/7 intelligent chatbot trained to provide emotional support and guidance"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Mental Wellness Tracking",
      description: "Track your mood patterns and emotional well-being over time"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Support",
      description: "Connect with others on similar journeys in a safe, anonymous environment"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Daily Challenges",
      description: "Engage in daily activities designed to boost mental wellness"
    }
  ];

  return (
    <section id="features" className="py-20 md:py-24 lg:py-28 bg-[#F1FAEE]">
      <div className="w-full px-3 sm:px-4 lg:px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1D3557] mb-16">
          Features Designed for Your Well-being
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 md:p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 mb-6 rounded-full bg-[#A8DADC]/20 flex items-center justify-center text-[#457B9D] group-hover:scale-110 group-hover:bg-[#A8DADC]/30 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#1D3557] mb-3">
                {feature.title}
              </h3>
              <p className="text-[#457B9D] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;