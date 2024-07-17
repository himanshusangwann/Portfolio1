import React from "react";

const services = [
  {
    id: 1,
    title: "Buy",
    desc: "Charming family home for sale",
  },
  {
    id: 2,
    title: "Sell",
    desc: "Charming home, great location, affordable",
  },
  {
    id: 3,
    title: "Rent",
    desc: "Cozy, spacious, modern, affordable, convenien",
  },
];

const Services = () => {
  return (
    <div className="bg-black text-white py-20 " id="service">
      <div className="mx-auto px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Services</h2>
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((ser) => (
            <div
              key={ser.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
        transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text
            bg-gradient-to-r from-green-600 to-blue-400"
              >
                {ser.id}
              </div>
              <h3
                className="mt-2 text-2xl font-bold text-transparent bg-clip-text
            bg-gradient-to-r from-green-600 to-blue-400"
              >
                {ser.title}
              </h3>
              <p
                className="mt-2 text-1xl font-light"
              >
                {ser.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
