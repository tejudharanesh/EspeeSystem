
import React from "react";

const MissionVision: React.FC = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mb-6">Our Mission & Vision</h2>
          <p className="text-lg text-gray-600">
            At ESPEE SYSTEM, we're driven by our commitment to sustainable energy solutions and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="w-16 h-16 rounded-full bg-espee-soft-blue flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-espee-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To offer world-class, energy-efficient heating products while promoting sustainability and environmental responsibility. We strive to deliver exceptional value through innovative solutions, quality products, and excellent customer service.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="w-16 h-16 rounded-full bg-espee-soft-green flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-espee-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              "Green Home Green Life Green World" - We envision a future where sustainable heating solutions are the standard in homes and businesses worldwide, contributing to a greener planet and more energy-efficient living.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
