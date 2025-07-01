import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const OfficeInfo: React.FC = () => {
  const offices = [
    {
      title: "Registered Office",
      address: "ADDRESS",
      phone: "+91 98765 43210",
      email: "info@espeesystem.com",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mb-6">Our Offices</h2>
          <p className="text-lg text-gray-600">
            ESPEE SYSTEM maintains offices in strategic locations to better
            serve our customers. Feel free to visit us or get in touch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {offices.map((office, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-64">
                <iframe
                  title={`ESPEE SYSTEM ${office.title} Map`}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.8219652911113!2d72.52866427557697!3d22.99370377920063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84e8f8295a89%3A0xbbc57db3ec7876f4!2sSatellite%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1682274456347!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">{office.title}</h3>
                <div className="space-y-3">
                  <div className="flex">
                    <MapPin
                      size={20}
                      className="mr-3 text-espee-blue flex-shrink-0"
                    />
                    <p className="text-gray-600">{office.address}</p>
                  </div>
                  <div className="flex">
                    <Phone
                      size={20}
                      className="mr-3 text-espee-blue flex-shrink-0"
                    />
                    <p className="text-gray-600">{office.phone}</p>
                  </div>
                  <div className="flex">
                    <Mail
                      size={20}
                      className="mr-3 text-espee-blue flex-shrink-0"
                    />
                    <p className="text-gray-600">{office.email}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficeInfo;
