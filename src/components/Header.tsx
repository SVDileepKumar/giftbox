import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header-bg text-white py-12 md:py-20 mb-12">
      <div className="container mx-auto text-center relative z-10">
        {/* Spectacular Logo with Professional Firework Effects */}
        <div className="mb-12 relative fade-in-up">
          <img 
            src="/logo.png" 
            alt="Tara Pataka Emblem - Light the Sky" 
            className="logo-image mx-auto rounded-full border-4 border-yellow-300 shadow-2xl logo-glow pulse-animation glow-animation" 
            style={{ width: '250px', height: '250px', objectFit: 'cover' }}
          />
          
          {/* Professional Firework Bursts */}
          <div className="firework-burst" style={{ top: '-20px', right: '-20px', animationDelay: '0s' }}></div>
          <div className="firework-burst" style={{ bottom: '-20px', left: '-20px', animationDelay: '1s' }}></div>
          <div className="firework-burst" style={{ top: '50%', left: '-30px', transform: 'translateY(-50%)', animationDelay: '2s' }}></div>
          <div className="firework-burst" style={{ top: '50%', right: '-30px', transform: 'translateY(-50%)', animationDelay: '0.5s' }}></div>
          
          {/* Firework Trails */}
          <div className="firework-trail" style={{ top: '-25px', left: '25%', animationDelay: '0.5s' }}></div>
          <div className="firework-trail" style={{ top: '-25px', right: '25%', animationDelay: '1.5s' }}></div>
          <div className="firework-trail" style={{ bottom: '-25px', left: '30%', animationDelay: '2.5s' }}></div>
          <div className="firework-trail" style={{ bottom: '-25px', right: '30%', animationDelay: '3s' }}></div>
          
          {/* Golden Rain Effect */}
          <div className="golden-rain" style={{ top: '-30px', left: '20%', animationDelay: '1s' }}></div>
          <div className="golden-rain" style={{ top: '-30px', left: '40%', animationDelay: '1.2s' }}></div>
          <div className="golden-rain" style={{ top: '-30px', left: '60%', animationDelay: '1.4s' }}></div>
          <div className="golden-rain" style={{ top: '-30px', left: '80%', animationDelay: '1.6s' }}></div>
          
          {/* Sparkle Bursts */}
          <div className="sparkle-burst" style={{ top: '20%', left: '20%', animationDelay: '0.8s' }}></div>
          <div className="sparkle-burst" style={{ top: '20%', right: '20%', animationDelay: '1.8s' }}></div>
          <div className="sparkle-burst" style={{ bottom: '20%', left: '20%', animationDelay: '2.8s' }}></div>
          <div className="sparkle-burst" style={{ bottom: '20%', right: '20%', animationDelay: '3.8s' }}></div>
          
          {/* Firework Fountains */}
          <div className="firework-fountain" style={{ top: '30%', left: '15%', animationDelay: '1.2s' }}></div>
          <div className="firework-fountain" style={{ top: '30%', right: '15%', animationDelay: '2.2s' }}></div>
          <div className="firework-fountain" style={{ bottom: '30%', left: '15%', animationDelay: '3.2s' }}></div>
          <div className="firework-fountain" style={{ bottom: '30%', right: '15%', animationDelay: '4.2s' }}></div>
        </div>
        
        {/* Professional Fireworks Business Title */}
        <h1 className="font-cinzel text-6xl md:text-8xl font-extrabold text-yellow-300 tracking-widest leading-none title-glow mb-6 relative slide-in-left">
          <span className="tapaka-highlight">TARA PATAKA</span>
          <div className="text-2xl md:text-4xl font-bold text-red-400 mt-2">
            🎆 PREMIUM CRACKERS & FIREWORKS 🎆
          </div>
          
          {/* Spectacular Firework Bursts Around Title */}
          <div className="firework-burst" style={{ top: '-30px', left: '-30px', animationDelay: '0s' }}></div>
          <div className="firework-burst" style={{ top: '-30px', right: '-30px', animationDelay: '0.5s' }}></div>
          <div className="firework-burst" style={{ bottom: '-30px', left: '-30px', animationDelay: '1s' }}></div>
          <div className="firework-burst" style={{ bottom: '-30px', right: '-30px', animationDelay: '1.5s' }}></div>
          <div className="firework-burst" style={{ top: '50%', left: '-40px', transform: 'translateY(-50%)', animationDelay: '2s' }}></div>
          <div className="firework-burst" style={{ top: '50%', right: '-40px', transform: 'translateY(-50%)', animationDelay: '2.5s' }}></div>
          
          {/* Firework Trails Around Title */}
          <div className="firework-trail" style={{ top: '-35px', left: '20%', animationDelay: '0.3s' }}></div>
          <div className="firework-trail" style={{ top: '-35px', right: '20%', animationDelay: '0.8s' }}></div>
          <div className="firework-trail" style={{ bottom: '-35px', left: '25%', animationDelay: '1.3s' }}></div>
          <div className="firework-trail" style={{ bottom: '-35px', right: '25%', animationDelay: '1.8s' }}></div>
          
          {/* Golden Rain Around Title */}
          <div className="golden-rain" style={{ top: '-40px', left: '10%', animationDelay: '0.5s' }}></div>
          <div className="golden-rain" style={{ top: '-40px', left: '30%', animationDelay: '0.7s' }}></div>
          <div className="golden-rain" style={{ top: '-40px', left: '50%', animationDelay: '0.9s' }}></div>
          <div className="golden-rain" style={{ top: '-40px', left: '70%', animationDelay: '1.1s' }}></div>
          <div className="golden-rain" style={{ top: '-40px', left: '90%', animationDelay: '1.3s' }}></div>
          
          {/* Sparkle Bursts Around Title */}
          <div className="sparkle-burst" style={{ top: '10%', left: '10%', animationDelay: '0.6s' }}></div>
          <div className="sparkle-burst" style={{ top: '10%', right: '10%', animationDelay: '1.6s' }}></div>
          <div className="sparkle-burst" style={{ bottom: '10%', left: '10%', animationDelay: '2.6s' }}></div>
          <div className="sparkle-burst" style={{ bottom: '10%', right: '10%', animationDelay: '3.6s' }}></div>
        </h1>
        
        {/* Professional Business Subtitle */}
        <div className="flex items-center justify-center mb-8 relative slide-in-right">
          <div className="w-24 h-2 bg-gradient-to-r from-transparent via-red-400 to-transparent rounded-full"></div>
          <p className="text-2xl md:text-4xl text-white tracking-widest mx-8 font-cinzel subtitle-glow">
            🎇 SPECIALIZED CRACKERS & FIREWORKS 🎇
          </p>
          <div className="w-24 h-2 bg-gradient-to-l from-transparent via-red-400 to-transparent rounded-full"></div>
          
          {/* Professional Firework Effects Around Subtitle */}
          <div className="firework-burst" style={{ left: '-60px', top: '50%', transform: 'translateY(-50%)', animationDelay: '1s' }}></div>
          <div className="firework-burst" style={{ right: '-60px', top: '50%', transform: 'translateY(-50%)', animationDelay: '1.5s' }}></div>
          <div className="firework-burst" style={{ left: '-60px', top: '30%', animationDelay: '2s' }}></div>
          <div className="firework-burst" style={{ right: '-60px', top: '30%', animationDelay: '2.5s' }}></div>
          <div className="firework-burst" style={{ left: '-60px', bottom: '30%', animationDelay: '3s' }}></div>
          <div className="firework-burst" style={{ right: '-60px', bottom: '30%', animationDelay: '3.5s' }}></div>
          
          {/* Firework Trails Around Subtitle */}
          <div className="firework-trail" style={{ left: '-70px', top: '40%', animationDelay: '1.2s' }}></div>
          <div className="firework-trail" style={{ right: '-70px', top: '40%', animationDelay: '1.7s' }}></div>
          <div className="firework-trail" style={{ left: '-70px', bottom: '40%', animationDelay: '2.2s' }}></div>
          <div className="firework-trail" style={{ right: '-70px', bottom: '40%', animationDelay: '2.7s' }}></div>
          
          {/* Golden Rain Around Subtitle */}
          <div className="golden-rain" style={{ left: '-80px', top: '20%', animationDelay: '1.5s' }}></div>
          <div className="golden-rain" style={{ left: '-80px', top: '50%', animationDelay: '1.7s' }}></div>
          <div className="golden-rain" style={{ left: '-80px', bottom: '20%', animationDelay: '1.9s' }}></div>
          <div className="golden-rain" style={{ right: '-80px', top: '20%', animationDelay: '2.5s' }}></div>
          <div className="golden-rain" style={{ right: '-80px', top: '50%', animationDelay: '2.7s' }}></div>
          <div className="golden-rain" style={{ right: '-80px', bottom: '20%', animationDelay: '2.9s' }}></div>
        </div>
        
        {/* Elegant Discount Banner */}
        <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white font-bold text-2xl md:text-3xl py-3 px-6 rounded-lg shadow-lg mb-6 text-center">
          🎆 50% OFF - LIMITED TIME OFFER 🎆
        </div>
        
        {/* Professional Business Tagline */}
        <p className="text-2xl md:text-3xl text-yellow-300 font-cinzel italic tracking-wide relative fade-in-up">
          🎆 LIGHT THE SKY WITH PREMIUM CRACKERS 🎆
          
          {/* Spectacular Firework Bursts Around Tagline */}
          <div className="firework-burst" style={{ top: '-50px', left: '10%', animationDelay: '0.5s' }}></div>
          <div className="firework-burst" style={{ top: '-50px', left: '30%', animationDelay: '0.8s' }}></div>
          <div className="firework-burst" style={{ top: '-50px', left: '50%', animationDelay: '1.1s' }}></div>
          <div className="firework-burst" style={{ top: '-50px', left: '70%', animationDelay: '1.4s' }}></div>
          <div className="firework-burst" style={{ top: '-50px', left: '90%', animationDelay: '1.7s' }}></div>
          
          {/* Firework Trails Around Tagline */}
          <div className="firework-trail" style={{ top: '-55px', left: '15%', animationDelay: '0.7s' }}></div>
          <div className="firework-trail" style={{ top: '-55px', left: '35%', animationDelay: '1s' }}></div>
          <div className="firework-trail" style={{ top: '-55px', left: '55%', animationDelay: '1.3s' }}></div>
          <div className="firework-trail" style={{ top: '-55px', left: '75%', animationDelay: '1.6s' }}></div>
          <div className="firework-trail" style={{ top: '-55px', left: '95%', animationDelay: '1.9s' }}></div>
          
          {/* Golden Rain Around Tagline */}
          <div className="golden-rain" style={{ top: '-60px', left: '5%', animationDelay: '0.6s' }}></div>
          <div className="golden-rain" style={{ top: '-60px', left: '25%', animationDelay: '0.9s' }}></div>
          <div className="golden-rain" style={{ top: '-60px', left: '45%', animationDelay: '1.2s' }}></div>
          <div className="golden-rain" style={{ top: '-60px', left: '65%', animationDelay: '1.5s' }}></div>
          <div className="golden-rain" style={{ top: '-60px', left: '85%', animationDelay: '1.8s' }}></div>
          
          {/* Sparkle Bursts Around Tagline */}
          <div className="sparkle-burst" style={{ top: '-45px', left: '20%', animationDelay: '0.8s' }}></div>
          <div className="sparkle-burst" style={{ top: '-45px', left: '40%', animationDelay: '1.1s' }}></div>
          <div className="sparkle-burst" style={{ top: '-45px', left: '60%', animationDelay: '1.4s' }}></div>
          <div className="sparkle-burst" style={{ top: '-45px', left: '80%', animationDelay: '1.7s' }}></div>
          
          {/* Firework Fountains Around Tagline */}
          <div className="firework-fountain" style={{ top: '-40px', left: '12%', animationDelay: '0.9s' }}></div>
          <div className="firework-fountain" style={{ top: '-40px', left: '32%', animationDelay: '1.2s' }}></div>
          <div className="firework-fountain" style={{ top: '-40px', left: '52%', animationDelay: '1.5s' }}></div>
          <div className="firework-fountain" style={{ top: '-40px', left: '72%', animationDelay: '1.8s' }}></div>
          <div className="firework-fountain" style={{ top: '-40px', left: '92%', animationDelay: '2.1s' }}></div>
        </p>
        
        <p className="text-lg text-white font-medium mt-4 max-w-4xl mx-auto leading-relaxed">
          🎆 Premium crackers and fireworks for every celebration! 🎆<br />
          Specialized in high-quality crackers, rockets, sparklers, and firework displays. 
          Perfect for Diwali, weddings, festivals, and special occasions.
        </p>
        
        {/* Contact Details in Header */}
        <div className="bg-black bg-opacity-40 rounded-lg p-4 mt-6 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center justify-center">
              <span className="text-yellow-300 mr-2">📞</span>
              <span className="text-yellow-100 font-bold">Primary: +91-63008-00587</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-yellow-300 mr-2">📱</span>
              <span className="text-yellow-100">WhatsApp: +91-80744-90037</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-yellow-300 mr-2">📍</span>
              <span className="text-yellow-100">Rayadurgam, India</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
