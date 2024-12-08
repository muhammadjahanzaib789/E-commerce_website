import React from "react";

const Herooo = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-[#fdf6e4] px-4 py-8 sm:px-8 md:p-16">
      {/* Left Section: Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="relative w-full max-w-xs sm:max-w-md">
          <img
            src="/asfo.png" // Replace with the correct image path
            alt="Asgaard Sofa"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Right Section: Content */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          New Arrivals
        </h2>
        <h3 className="text-lg sm:text-2xl md:text-3xl font-semibold text-gray-900 mt-2">
          Asgaard Sofa
        </h3>
        <button className="mt-6 px-6 py-3 bg-black text-white font-medium text-lg rounded hover:bg-gray-800 transition">
          Order Now
        </button>
      </div>
    </section>
  );
};

export default Herooo;
