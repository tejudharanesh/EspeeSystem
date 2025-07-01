import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import CTASection from "@/components/home/CTASection";
import TestimonialsList from "@/components/testimonials/TestimonialsList";
import ServicesOverview from "@/components/services/ServicesOverview";
import ServiceProcess from "@/components/services/ServiceProcess";
const Index: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <IntroSection />
        <FeaturedProducts />
        <ServicesOverview />
        <ServiceProcess />
        <TestimonialsList />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
