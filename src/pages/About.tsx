
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CompanyOverview from "@/components/about/CompanyOverview";
import MissionVision from "@/components/about/MissionVision";
import OfficeInfo from "@/components/about/OfficeInfo";

const About: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-gray-100 py-16">
          <div className="container-custom text-center">
            <h1 className="mb-4">About ESPEE SYSTEM</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn about our company's journey, mission, and vision in the heat pump industry.
            </p>
          </div>
        </div>
        <CompanyOverview />
        <MissionVision />
        <OfficeInfo />
      </main>
      <Footer />
    </>
  );
};

export default About;
