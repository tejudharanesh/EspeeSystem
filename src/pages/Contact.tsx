
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import GoogleMap from "@/components/contact/GoogleMap";

const Contact: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-gray-100 py-16">
          <div className="container-custom text-center">
            <h1 className="mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get in touch with our team for inquiries, quotes, or support. We're here to help.
            </p>
          </div>
        </div>

        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ContactForm />
              <ContactInfo />
            </div>
            <GoogleMap />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
