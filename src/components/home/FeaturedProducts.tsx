
import React from "react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  title: string;
  capacity: string;
  image: string;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, capacity, image, category }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden card-shadow">
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <span className="inline-block bg-espee-soft-blue text-espee-blue text-xs font-semibold px-3 py-1 rounded-full mb-3">
          {category}
        </span>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">Capacity: {capacity}</p>
        <Link to="/products" className="btn-primary inline-block">View Details</Link>
      </div>
    </div>
  );
};

const FeaturedProducts: React.FC = () => {
  const products = [
    {
      title: "Residential Heat Pump",
      capacity: "4.1kW - 12.8kW",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=600&q=80",
      category: "Residential"
    },
    {
      title: "Commercial Heat Pump",
      capacity: "17.5kW - 21kW",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      category: "Commercial"
    },
    {
      title: "Swimming Pool Heat Pump",
      capacity: "9kW - 24kW",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=600&q=80",
      category: "Pool Heating"
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="mb-4">Explore Our Products</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tailored to meet different energy needs and performance requirements, our range of heat pumps offers solutions for residential, commercial, and industrial applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/products" className="btn-outline inline-block">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
