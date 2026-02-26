import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-10">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          About ShopSphere
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          ShopSphere was founded with a mission to make quality products
          accessible to everyone. We believe shopping should be simple,
          enjoyable, and trustworthy.
        </p>

        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Our team carefully selects products that combine style, performance,
          and affordability. We are committed to innovation and customer
          satisfaction.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div className="bg-blue-50 p-6 rounded-xl">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To deliver high-quality products with exceptional service while
              building long-term customer relationships.
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl">
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To become a trusted online marketplace known for reliability,
              quality, and customer happiness.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;