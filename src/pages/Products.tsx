
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCategories from "@/components/products/ProductCategories";
import SwimmingPoolHeatPumps from "@/components/products/SwimmingPoolHeatPumps";
import SupportiveProducts from "@/components/products/SupportiveProducts";

const Products: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-gray-100 py-16">
          <div className="container-custom text-center">
            <h1 className="mb-4">Our Products</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our range of innovative and energy-efficient heat pump solutions.
            </p>
          </div>
        </div>
        <ProductCategories />
        <SwimmingPoolHeatPumps />
        <SupportiveProducts />
      </main>
      <Footer />
    </>
  );
};

export default Products;
