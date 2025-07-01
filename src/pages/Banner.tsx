import React from "react";
import { Phone, Mail, MapPin, Calendar } from "lucide-react";
import logo1 from "../assets/logo1.png";
const Banner: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container-custom py-4">
          <div className="text-center">
            <img src={logo1} alt="" className="mx-auto" />
            <h3 className="text-gray-600 mt-2">Unlimited Heating Solutions</h3>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-custom py-10">
        {/* Coming Soon Banner */}
        <div className="text-center mb-6">
          <div className="inline-block bg-gradient-to-r from-espee-green to-espee-blue text-white px-6 py-3 rounded-full mb-6">
            <div className="flex items-center space-x-2">
              <Calendar size={20} />
              <span className="font-semibold">Website Coming Soon</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            We're Building Something Amazing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our new website will be live in{" "}
            <span className="font-bold text-espee-blue">30 days</span>. In the
            meantime, get in touch with us for all your heat pump solution
            needs.
          </p>
        </div>

        {/* Company Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* About Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border-2">
            <h3 className="text-xl font-bold mb-3">About ESPEE SYSTEM</h3>
            <p className="text-gray-600">
              Leading provider of innovative & energy-efficient heat pump
              solutions since 2013. Specializing in residential, commercial, and
              industrial applications.
            </p>
          </div>

          {/* Products Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-2">
            <h3 className="text-xl font-bold mb-3">Our Products</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Residential Heat Pumps (4.1kW - 12.8kW)</li>
              <li>• Commercial Heat Pumps (17.5kW - 21kW)</li>
              <li>• Industrial Heat Pumps (25kW - 88kW)</li>
              <li>• Swimming Pool Heat Pumps</li>
            </ul>
          </div>

          {/* Services Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border-2 md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold mb-3">Our Services</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Professional Installation</li>
              <li>• Maintenance & Repair</li>
              <li>• Technical Support</li>
              <li>• System Design Consultation</li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-600">
              Ready to discuss your heat pump needs? Contact us today for expert
              consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone */}
            <div className="text-center">
              <div className="w-16 h-16 bg-espee-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-white" size={24} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Call Us</h4>
              <p className="text-gray-600">+91 6366047846</p>
            </div>

            {/* Email */}
            <div className="text-center">
              <div className="w-16 h-16 bg-espee-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-white" size={24} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Email Us</h4>
              <p className="text-gray-600">service@espeesystem.com </p>
            </div>

            {/* Address */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-espee-green to-espee-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-white" size={24} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Visit Us</h4>
              <p className="text-gray-600 text-sm">
                #32, Chinnas Residency Basement, Sheshadri Road,
                <br className="hidden md:inline" />
                Ananda Rao Circle, Bangalore
              </p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center mt-12 bg-gradient-to-r from-espee-green to-espee-blue rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            "Green Home, Green Life, Green World" - We're committed to providing
            world-class, energy-efficient heating solutions that promote
            sustainability and environmental responsibility.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 ">
        <div className="container-custom text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} ESPEE SYSTEM. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Banner;
