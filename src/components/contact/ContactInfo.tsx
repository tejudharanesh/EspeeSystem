import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";

const ContactInfo: React.FC = () => {
  return (
    <div className="bg-espee-blue text-white rounded-lg shadow-md p-8">
      <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

      <div className="space-y-6">
        <div className="flex items-start">
          <MapPin size={20} className="mr-3 mt-1" />
          <div>
            <p className="font-semibold">Registered Office:</p>
            <p>Address</p>
          </div>
        </div>

        <div className="flex items-start">
          <MapPin size={20} className="mr-3 mt-1" />
          <div>
            <p className="font-semibold">Branch Office:</p>
            <p>address 380061</p>
          </div>
        </div>

        <div className="flex items-center">
          <Phone size={20} className="mr-3" />
          <p>+91 98765 43210</p>
        </div>

        <div className="flex items-center">
          <Mail size={20} className="mr-3" />
          <p>info@espeesystem.com</p>
        </div>

        <div className="flex items-center">
          <Clock size={20} className="mr-3" />
          <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
        </div>

        <div>
          <p className="font-semibold mb-2">Follow Us:</p>
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="hover:text-gray-300 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="hover:text-gray-300 transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="hover:text-gray-300 transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
