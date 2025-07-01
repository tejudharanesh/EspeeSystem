
import React from "react";

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

const ServiceProcess: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      number: 1,
      title: "Initial Consultation",
      description: "We begin with a detailed discussion about your heating needs, space requirements, and budget considerations."
    },
    {
      number: 2,
      title: "Site Assessment",
      description: "Our technicians conduct a thorough assessment of your property to determine the optimal heat pump solution."
    },
    {
      number: 3,
      title: "System Design",
      description: "Based on the assessment, we design a customized heat pump system that meets your specific requirements."
    },
    {
      number: 4,
      title: "Installation",
      description: "Our certified technicians professionally install your heat pump system with minimal disruption."
    },
    {
      number: 5,
      title: "Testing & Commissioning",
      description: "We rigorously test the installed system to ensure everything is working correctly and efficiently."
    },
    {
      number: 6,
      title: "Training & Handover",
      description: "We provide comprehensive training on system operation and maintenance before final handover."
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Our Service Process</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From initial consultation to final handover, we follow a structured process to ensure the best possible outcome for your heat pump installation.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-espee-blue/30 transform -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step number circle - centered for mobile, offset for desktop */}
                <div className="absolute top-0 left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-espee-blue text-white flex items-center justify-center font-bold text-xl shadow-lg z-10">
                  {step.number}
                </div>
                
                {/* Content box - full width for mobile, half width and alternating sides for desktop */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} bg-white p-6 rounded-lg shadow-md`}>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
