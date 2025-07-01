
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const IntroSection: React.FC = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-6 text-gray-800">Welcome to ESPEE SYSTEM</h2>
          <p className="text-lg text-gray-600">
            We specialize in high-efficiency, eco-friendly air source water heat pumps that provide reliable heating solutions for homes and businesses. Our products combine innovative technology with sustainable design to deliver exceptional performance while reducing energy consumption and environmental impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg p-6 card-shadow">
            <div className="w-14 h-14 bg-espee-soft-green rounded-full flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-espee-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Energy Efficient</h3>
            <p className="text-gray-600 mb-4">
              Our heat pumps use advanced technology to maximize energy efficiency, saving you money on utility bills.
            </p>
            <Link to="/products" className="inline-flex items-center text-espee-blue hover:text-espee-dark-blue font-medium">
              Learn more <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg p-6 card-shadow">
            <div className="w-14 h-14 bg-espee-soft-blue rounded-full flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-espee-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Eco-Friendly</h3>
            <p className="text-gray-600 mb-4">
              Reduce your carbon footprint with our environmentally-friendly heating and cooling solutions.
            </p>
            <Link to="/about" className="inline-flex items-center text-espee-blue hover:text-espee-dark-blue font-medium">
              Learn more <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg p-6 card-shadow">
            <div className="w-14 h-14 bg-espee-soft-green rounded-full flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-espee-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Versatile Solutions</h3>
            <p className="text-gray-600 mb-4">
              From residential to industrial applications, we offer a wide range of heat pump solutions.
            </p>
            <Link to="/services" className="inline-flex items-center text-espee-blue hover:text-espee-dark-blue font-medium">
              Learn more <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
