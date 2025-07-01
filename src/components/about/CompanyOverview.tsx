
import React from "react";

const CompanyOverview: React.FC = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6">About ESPEE SYSTEM</h2>
            <p className="text-gray-600 mb-4">
              Since 2013, ESPEE SYSTEM has been at the forefront of the heat pump industry in India, providing innovative and energy-efficient heating solutions for residential, commercial, and industrial applications.
            </p>
            <p className="text-gray-600 mb-4">
              Our company specializes in air source water heat pumps that combine advanced technology with eco-friendly design, helping our customers reduce their energy consumption and carbon footprint while enjoying reliable heating and cooling.
            </p>
            <p className="text-gray-600">
              With a team of experienced professionals and a commitment to quality, we have established ourselves as a leading supplier of heat pump solutions across India, serving diverse sectors including hospitality, healthcare, manufacturing, and residential buildings.
            </p>
          </div>
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=800&q=80" 
                alt="ESPEE SYSTEM Office" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg w-48 md:w-64">
              <p className="text-espee-blue font-bold text-4xl">10+</p>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
