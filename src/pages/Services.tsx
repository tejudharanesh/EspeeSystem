
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesOverview from "@/components/services/ServicesOverview";
import ServiceProcess from "@/components/services/ServiceProcess";
import CTASection from "@/components/home/CTASection";

const Services: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-gray-100 py-16">
          <div className="container-custom text-center">
            <h1 className="mb-4">Our Services</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional installation, maintenance, and support services for your heat pump system.
            </p>
          </div>
        </div>
        <ServicesOverview />
        <ServiceProcess />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Services;
