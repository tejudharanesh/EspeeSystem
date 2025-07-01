
import React from "react";

interface SupportiveProduct {
  name: string;
  category: string;
  description: string;
  features: string[];
  image: string;
}

const SupportiveProducts: React.FC = () => {
  const supportiveProducts: SupportiveProduct[] = [
    {
      name: "Insulated Tanks",
      category: "Storage",
      description: "High-quality insulated tanks for efficient hot water storage, designed to work perfectly with our heat pump systems.",
      features: [
        "Superior insulation for minimal heat loss",
        "Capacities from 100L to 2000L",
        "Corrosion-resistant inner lining",
        "Multiple connection points for system integration"
      ],
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Water Softeners",
      category: "Water Treatment",
      description: "Water softening systems that protect your heat pump and plumbing from hard water damage.",
      features: [
        "Reduces scale buildup in pipes and equipment",
        "Extends the lifespan of your heating system",
        "Improves energy efficiency",
        "Easy maintenance and salt refill"
      ],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Industrial Dryers",
      category: "Industrial",
      description: "Energy-efficient industrial dryers that utilize heat pump technology for various applications.",
      features: [
        "Up to 70% energy savings compared to traditional dryers",
        "Low operating temperatures",
        "Gentle drying process",
        "Customizable for different industrial needs"
      ],
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Solar Panels",
      category: "Renewable Energy",
      description: "High-efficiency solar panels that can be integrated with our heat pump systems for even greater energy savings.",
      features: [
        "Seamless integration with heat pump systems",
        "Monocrystalline and polycrystalline options",
        "25-year performance warranty",
        "Reduces operational costs of heating systems"
      ],
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="mb-4">Supportive Products</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Complement your heat pump system with our range of supportive products designed to enhance performance, efficiency, and longevity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {supportiveProducts.map((product, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <span className="bg-espee-soft-blue text-espee-blue text-xs font-semibold px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="mb-4">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start mb-2">
                      <svg className="w-4 h-4 text-espee-green mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="btn-outline">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportiveProducts;
