import React from "react";
import { services } from "../../data";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ServicesSection = () => {
  return (
   <section className="py-16 bg-white">
      <div className="text-center mb-12">
        <p className="text-sm font-medium text-blue-600 uppercase">
          Our Services
        </p>
        <h2 className="text-3xl font-bold text-gray-900">What We Do?</h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3  ">
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="p-6 m-4 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition relative text-center group"     
           initial="rest"
            whileHover="hover"
            animate="rest"
          >
            {/* Image with variants */}
            <div className="flex justify-center mb-6">
              <motion.img
                src={service.image}
                alt={service.title}
                className="w-40 h-40"
                variants={{
                  rest: { rotateY: 0, transition: { duration: 0.8, ease: "easeInOut" } },
                  hover: { rotateY: 360, transition: { duration: 1, ease: "easeInOut" } }, 
                  // 720 = two full spins for faster/more rotation
                }}
              />
            </div>

            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-600 mb-6">{service.description}</p>

            <button className=" inline-flex gap-2 px-6 py-2 border border-blue-500 text-blue-500 rounded-full group-hover:bg-blue-500 group-hover:text-white">
              Learn More 
            <ArrowRight className="w-5 h-6" />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
