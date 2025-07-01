
import React from "react";

interface Testimonial {
  name: string;
  position: string;
  company: string;
  quote: string;
  image: string;
  rating: number;
}

const TestimonialCard: React.FC<Testimonial> = ({ name, position, company, quote, image, rating }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex items-center mb-4">
        {/* Rating stars */}
        <div className="flex mr-4">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>

      <blockquote className="italic text-gray-600 mb-6">"{quote}"</blockquote>

      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-sm text-gray-500">{position}, {company}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsList: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Rahul Sharma",
      position: "Facility Manager",
      company: "Grand Hotel",
      quote: "ESPEE SYSTEM's heat pumps have significantly reduced our energy costs while providing reliable hot water for our 200-room hotel. Their installation team was professional and efficient.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      rating: 5
    },
    {
      name: "Priya Patel",
      position: "Homeowner",
      company: "Residential Client",
      quote: "We installed an ESPEE heat pump for our home heating and hot water needs. The system has been running flawlessly for two years now, and our electricity bills have dropped by 40%.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
      rating: 5
    },
    {
      name: "Vikram Mehta",
      position: "Operations Director",
      company: "Sunrise Industries",
      quote: "The industrial heat pump system from ESPEE SYSTEM has revolutionized our manufacturing process. Their team provided excellent consultation and designed a custom solution that perfectly meets our needs.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80",
      rating: 4
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our heat pump solutions and services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Share Your Experience</h3>
          <p className="mb-6 text-gray-600 max-w-2xl mx-auto">
            Are you a satisfied ESPEE SYSTEM customer? We'd love to hear about your experience with our products and services.
          </p>
          <button className="btn-primary">Write a Review</button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsList;
