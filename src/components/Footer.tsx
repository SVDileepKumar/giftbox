import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white mt-20 py-12 print:shadow-none relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-orange-400 rounded-full"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-red-400 rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-yellow-400 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Enhanced Header */}
        <div className="mb-8 relative">
          <h3 className="text-4xl font-cinzel font-bold text-accent-gold mb-4 title-glow">
            Ordering & Contact
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-300 to-orange-400 mx-auto rounded-full mb-6"></div>
          {/* CSS sparkles around title */}
          <div className="sparkle" style={{ top: '-10px', left: '-30px', animationDelay: '0s' }}></div>
          <div className="sparkle" style={{ top: '-10px', right: '-30px', animationDelay: '1s' }}></div>
        </div>
        
        {/* Contact Information */}
        <p className="max-w-4xl mx-auto text-gray-200 mb-8 text-lg font-playfair leading-relaxed">
          For orders or detailed inquiries, please contact us. 
          Note: Final item selection may vary slightly based on stock availability.
        </p>
        
        {/* Enhanced Contact Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
          <a 
            href="tel:+918074490037" 
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-extrabold text-xl tracking-wider px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative"
          >
            Call: +91 80744 90037
            {/* CSS sparkle on button */}
            <div className="sparkle" style={{ top: '-5px', right: '-5px', animationDelay: '0s' }}></div>
          </a>
          <div className="sparkle hidden sm:block" style={{ animationDelay: '1s' }}></div>
          <a 
            href="https://wa.me/918074490037" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-500 to-green-600 text-white font-extrabold text-xl tracking-wider px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative"
          >
            WhatsApp: 80744 90037
            {/* CSS sparkle on button */}
            <div className="sparkle" style={{ top: '-5px', right: '-5px', animationDelay: '1.5s' }}></div>
          </a>
        </div>

        {/* Safety Notice with Enhanced Styling - Moved to next line */}
        <div className="mt-8 relative">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white font-extrabold text-2xl py-6 px-8 rounded-2xl inline-block shadow-2xl mb-8 border-4 border-yellow-300 transform hover:scale-105 transition-all duration-300">
            SAFETY MANDATE: WEAR MASK. AVOID RISK.
          </div>
          {/* CSS sparkles around safety notice */}
          <div className="sparkle" style={{ top: '-10px', left: '-20px', animationDelay: '0s' }}></div>
          <div className="sparkle" style={{ top: '-10px', right: '-20px', animationDelay: '1s' }}></div>
        </div>
        
        {/* Brand Footer */}
        <div className="border-t border-yellow-300 pt-6 relative">
          <p className="text-yellow-300 text-lg font-cinzel font-bold tracking-widest">TARA PATAKA</p>
          <p className="text-gray-400 text-sm font-light mt-2">Light the Sky</p>
          {/* CSS sparkles around brand */}
          <div className="sparkle" style={{ top: '10px', left: '-30px', animationDelay: '0s' }}></div>
          <div className="sparkle" style={{ top: '10px', right: '-30px', animationDelay: '1.5s' }}></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;