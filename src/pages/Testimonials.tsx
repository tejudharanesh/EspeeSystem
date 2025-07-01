
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TestimonialsList from "@/components/testimonials/TestimonialsList";

const Testimonials: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-gray-100 py-16">
          <div className="container-custom text-center">
            <h1 className="mb-4">Testimonials</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Read what our satisfied customers have to say about their experience with ESPEE SYSTEM.
            </p>
          </div>
        </div>
        <TestimonialsList />
      </main>
      <Footer />
    </>
  );
};

export default Testimonials;
