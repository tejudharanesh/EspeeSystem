
import React from "react";

interface PoolHeatPump {
  name: string;
  model: string;
  capacity: string;
  voltage: string;
  cop: string;
  application: string;
  image: string;
}

const SwimmingPoolHeatPumps: React.FC = () => {
  const poolHeatPumps: PoolHeatPump[] = [
    {
      name: "AquaWarm 10",
      model: "AW-100",
      capacity: "9kW",
      voltage: "230V/50Hz",
      cop: "6.2",
      application: "Small residential pools",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "AquaWarm 15",
      model: "AW-150",
      capacity: "15kW",
      voltage: "230V/50Hz",
      cop: "6.0",
      application: "Medium residential pools",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "AquaWarm 25",
      model: "AW-250",
      capacity: "24kW",
      voltage: "400V/50Hz",
      cop: "5.9",
      application: "Commercial pools",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="mb-4">Swimming Pool Heat Pumps</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our swimming pool heat pumps are designed to efficiently maintain your pool temperature while keeping energy costs low. With advanced technology and durable construction, they're perfect for extending your swimming season.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg overflow-hidden shadow-md">
            <thead className="bg-espee-blue text-white">
              <tr>
                <th className="p-4 text-left">Model</th>
                <th className="p-4 text-left">Power Output</th>
                <th className="p-4 text-left">Voltage</th>
                <th className="p-4 text-left">COP</th>
                <th className="p-4 text-left">Application</th>
                <th className="p-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {poolHeatPumps.map((pump, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="p-4 border-t">{pump.model}</td>
                  <td className="p-4 border-t">{pump.capacity}</td>
                  <td className="p-4 border-t">{pump.voltage}</td>
                  <td className="p-4 border-t">{pump.cop}</td>
                  <td className="p-4 border-t">{pump.application}</td>
                  <td className="p-4 border-t">
                    <button className="bg-espee-green text-white py-1 px-3 rounded-md text-sm hover:bg-espee-green/90">
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Need a Pool Heating Solution?</h3>
          <p className="mb-6 text-gray-600">
            Contact us for a customized quote tailored to your swimming pool requirements.
          </p>
          <button className="btn-primary">Request a Quote</button>
        </div>
      </div>
    </section>
  );
};

export default SwimmingPoolHeatPumps;
