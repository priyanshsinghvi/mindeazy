import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-24 lg:py-28 bg-white">
      <div className="w-full px-3 sm:px-4 lg:px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1D3557] mb-16">
          Get in Touch
        </h2>

        <div className="max-w-2xl mx-auto bg-[#F1FAEE]/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-10 border border-[#A8DADC]/30">
          <div className="space-y-6 md:space-y-8">
            <div className="flex items-center space-x-4 hover:translate-x-1 transition-transform duration-300 group">
              <Mail className="w-6 h-6 text-[#457B9D] group-hover:scale-110 transition-transform" />
              <span className="text-[#1D3557] group-hover:text-[#457B9D] transition-colors">priyanshsinghvi0308@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4 hover:translate-x-1 transition-transform duration-300 group">
              <Phone className="w-6 h-6 text-[#457B9D] group-hover:scale-110 transition-transform" />
              <span className="text-[#1D3557] group-hover:text-[#457B9D] transition-colors">+91 8949059969</span>
            </div>
            <div className="flex items-center space-x-4 hover:translate-x-1 transition-transform duration-300 group">
              <MapPin className="w-6 h-6 text-[#457B9D] group-hover:scale-110 transition-transform" />
              <span className="text-[#1D3557] group-hover:text-[#457B9D] transition-colors">Delhi, 201204</span>
            </div>
          </div>

          <div className="mt-10 md:mt-12 text-center">
            <h4 className="text-xl font-semibold text-[#1D3557] mb-4">Follow Us</h4>
            <div className="flex justify-center space-x-4">
              {[
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Linkedin, href: '#' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-[#457B9D] flex items-center justify-center text-white hover:bg-[#1D3557] hover:scale-110 transition-all duration-300 shadow-sm"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;