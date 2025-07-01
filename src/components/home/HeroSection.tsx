
import React from "react";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-espee-green/90 to-espee-blue/90 text-white py-24 md:py-32">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-overlay"></div>
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="mb-6 font-bold leading-tight animate-fade-up">
            ESPEE SYSTEM
            <span className="block text-2xl md:text-3xl mt-2 font-normal">
              Unlimited Heating Solutions
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Innovative & Energy-Efficient Heat Pumps
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Link to="/products" className="btn-primary bg-white text-espee-blue hover:bg-gray-100">
              Explore Products
            </Link>
            <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-espee-blue">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
