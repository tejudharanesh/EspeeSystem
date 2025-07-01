
import React from "react";

interface Service {
  title: string;
  description: string;
  icon: JSX.Element;
}

const ServicesOverview: React.FC = () => {
  const services: Service[] = [
    {
      title: "Installation Services",
      description: "Professional installation of heat pump systems by our certified technicians. We ensure proper setup, configuration, and testing to maximize the efficiency and lifespan of your system.",
      icon: (
        <svg className="w-12 h-12 text-espee-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Maintenance & Repair",
      description: "Regular maintenance and prompt repair services to keep your heat pump system operating at peak efficiency. Our preventative maintenance plans help you avoid costly repairs and extend equipment life.",
      icon: (
        <svg className="w-12 h-12 text-espee-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      )
    },
    {
      title: "System Design & Consultation",
      description: "Expert consultation services to design the optimal heat pump solution for your specific requirements. We analyze your needs, space, and budget to recommend the most efficient system.",
      icon: (
        <svg className="w-12 h-12 text-espee-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Energy Efficiency Audits",
      description: "Comprehensive assessment of your current heating system to identify potential improvements for energy efficiency. Our audits help you reduce operating costs and environmental impact.",
      icon: (
        <svg className="w-12 h-12 text-espee-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At ESPEE SYSTEM, we provide comprehensive services to ensure your heat pump system delivers optimal performance throughout its lifespan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
