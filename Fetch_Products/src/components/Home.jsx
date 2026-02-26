import React from "react";

const Home = () => {
  return (
    <div className="bg-gradient-to-red from-blue-50 to-purple-50 min-h-screen">

      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Welcome to ShopSphere
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Discover premium products at unbeatable prices. Quality, style,
          and convenience — all in one place.
        </p>
        <div className="space-x-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
            Shop Now
          </button>
          <button className="bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
            Explore
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-4 gap-8 px-10">
          {[
            {
              title: "Fast Delivery",
              desc: "Quick and secure delivery to your doorstep.",
            },
            {
              title: "Secure Payments",
              desc: "Safe transactions with trusted payment gateways.",
            },
            {
              title: "Premium Quality",
              desc: "Handpicked products with guaranteed quality.",
            },
            {
              title: "24/7 Support",
              desc: "Our team is always ready to help you.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;