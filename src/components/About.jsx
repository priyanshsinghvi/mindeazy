import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-24 lg:py-28 bg-white">
      <div className="w-full px-3 sm:px-4 lg:px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1D3557] mb-16 relative">
          About MindfulSpace
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#1D3557] mb-4">
              Your Journey to Mental Wellness
            </h3>
            <p className="text-[#457B9D] leading-relaxed text-lg">
              MindfulSpace is more than just a platform – it's your companion on the journey to better mental health. 
              We combine cutting-edge technology with compassionate support to provide you with the tools and 
              resources needed for emotional well-being.
            </p>
            <p className="text-[#457B9D] leading-relaxed text-lg">
              Our mission is to make mental wellness accessible to everyone, providing a safe space for growth, 
              healing, and personal development.
            </p>
          </div>
          <div className="bg-[#F1FAEE] p-8 md:p-10 rounded-xl shadow-md transform hover:shadow-lg transition-all duration-300">
            <blockquote className="text-xl italic text-[#1D3557]">
              "Mental health is not a destination, but a journey. It's about how you drive, not where you're going."
            </blockquote>
            <p className="mt-4 text-[#457B9D] font-semibold">- MindfulSpace Philosophy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;