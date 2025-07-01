
import React from "react";

const GoogleMap: React.FC = () => {
  return (
    <section className="mt-12">
      <h3 className="text-2xl font-bold mb-4">Find Us</h3>
      <div className="rounded-lg overflow-hidden shadow-md h-96">
        <iframe 
          title="ESPEE SYSTEM Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.8219652911113!2d72.52866427557697!3d22.99370377920063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84e8f8295a89%3A0xbbc57db3ec7876f4!2sSatellite%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1682274456347!5m2!1sen!2sin"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </section>
  );
};

export default GoogleMap;
