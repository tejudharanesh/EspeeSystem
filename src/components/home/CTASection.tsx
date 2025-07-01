
import React from "react";
import { Link } from "react-router-dom";

const CTASection: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Ready to Upgrade Your Heating Solution?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Contact us today to learn more about our energy-efficient heat pump solutions and how they can benefit your home or business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn-primary bg-espee-blue hover:bg-espee-dark-blue">
              Request a Quote
            </Link>
            <Link to="/products" className="btn-outline border-white text-white hover:bg-white hover:text-gray-900">
              Explore Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
