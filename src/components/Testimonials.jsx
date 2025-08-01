import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import { motion } from "motion/react";

function Testimonials() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center container mx-   auto py-20 px-6 md:px-20 lg:px-32 w-full overflow-hidden"
      id="Testimonials"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        Customer
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Testimonials
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Real Stories from Those Who Found Home with Us
      </p>

      {/* Testimonials box */}
      <div className="flex flex-wrap justify-center gap-8">
        {testimonialsData.map((testimonialsData, index) => (
          <div
            key={index}
            className="max-w-[340px] border shadow-lg rounded px-6 py-12 text-center"
          >
            <img className="w-20 h-20 rounded-full mx-auto mb-4" src={testimonialsData.image} alt={testimonialsData.alt} />
            <h2 className="text-xl text-gray-700 font-medium">{testimonialsData.name}</h2>
            <p className="text-gray-500 mb-4 text-sm">{testimonialsData.title}</p>
            <div className="flex justify-center gap-1 text-red-500 mb-5">
                {Array.from({ length: testimonialsData.rating },(item, index) => (
                    <img key={index} src={assets.star_icon} alt="Star" />
                ))}
            </div>
            <p className="text-gray-600">{testimonialsData.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Testimonials;
