
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Product {
  name: string;
  model: string;
  capacity: string;
  voltage: string;
  cop: string;
  description: string;
  image: string;
}

const ProductCategories: React.FC = () => {
  const [activeTab, setActiveTab] = useState("residential");

  const residentialProducts: Product[] = [
    {
      name: "ECO Home 5",
      model: "EH-050",
      capacity: "4.1kW",
      voltage: "230V/50Hz",
      cop: "4.7",
      description: "Ideal for small residential spaces with efficient heating capabilities.",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "ECO Home 10",
      model: "EH-100",
      capacity: "8.5kW",
      voltage: "230V/50Hz",
      cop: "4.5",
      description: "Perfect for medium-sized homes with balanced heating performance.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "ECO Home 15",
      model: "EH-150",
      capacity: "12.8kW",
      voltage: "400V/50Hz",
      cop: "4.3",
      description: "High-capacity solution for larger residential properties.",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const commercialProducts: Product[] = [
    {
      name: "ECO Business 20",
      model: "EB-200",
      capacity: "17.5kW",
      voltage: "400V/50Hz",
      cop: "4.2",
      description: "Designed for small commercial spaces with reliable performance.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "ECO Business 25",
      model: "EB-250",
      capacity: "21kW",
      voltage: "400V/50Hz",
      cop: "4.1",
      description: "Ideal for medium commercial applications requiring consistent heating.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const industrialProducts: Product[] = [
    {
      name: "ECO Industry 30",
      model: "EI-300",
      capacity: "25kW",
      voltage: "400V/50Hz",
      cop: "4.0",
      description: "Industrial-grade heat pump for smaller manufacturing facilities.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "ECO Industry 60",
      model: "EI-600",
      capacity: "50kW",
      voltage: "400V/50Hz",
      cop: "3.9",
      description: "Powerful heating solution for medium industrial applications.",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "ECO Industry 100",
      model: "EI-1000",
      capacity: "88kW",
      voltage: "400V/50Hz",
      cop: "3.8",
      description: "High-capacity heat pump for large industrial facilities.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const renderProductCards = (products: Product[]) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="h-48">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-sm text-gray-500 mb-4">Model: {product.model}</p>
              
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="text-sm">
                  <span className="font-semibold">Capacity:</span> {product.capacity}
                </div>
                <div className="text-sm">
                  <span className="font-semibold">Voltage:</span> {product.voltage}
                </div>
                <div className="text-sm">
                  <span className="font-semibold">COP:</span> {product.cop}
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-4">{product.description}</p>
              
              <button className="btn-primary w-full">View Details</button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="mb-4">Our Heat Pump Range</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our wide range of heat pump solutions designed for different applications and requirements. From residential to industrial use, we have the perfect solution for your heating needs.
          </p>
        </div>

        <Tabs defaultValue="residential" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="residential">Residential</TabsTrigger>
              <TabsTrigger value="commercial">Commercial</TabsTrigger>
              <TabsTrigger value="industrial">Industrial</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="residential">
            {renderProductCards(residentialProducts)}
          </TabsContent>
          
          <TabsContent value="commercial">
            {renderProductCards(commercialProducts)}
          </TabsContent>
          
          <TabsContent value="industrial">
            {renderProductCards(industrialProducts)}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProductCategories;
