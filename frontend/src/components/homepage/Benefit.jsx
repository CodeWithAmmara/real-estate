import React from "react";
import { motion } from "framer-motion";
import decor from "../../assets/images/decor.jpg";
import { FaCheckCircle, FaCogs, FaHandshake } from "react-icons/fa";

const benefits = [
  {
    id: 1,
    title: "Proven Expertise",
    description:
      "Our seasoned team excels in real estate with years of successful market navigation, offering informed decisions and optimal results.",
    icon: <FaCheckCircle className="w-6 h-6 text-blue-600" />,
  },
  {
    id: 2,
    title: "Customized Solutions",
    description:
      "We pride ourselves on crafting personalized strategies to match your unique goals, ensuring a seamless real estate journey.",
    icon: <FaCogs className="w-6 h-6 text-blue-600" />,
  },
  {
    id: 3,
    title: "Transparent Partnerships",
    description:
      "Transparency is key in our client relationships. We prioritize clear communication and ethical practices, fostering trust and reliability throughout.",
    icon: <FaHandshake className="w-6 h-6 text-blue-600" />,
  },
];

const Benefit = () => {
  return (
    <section className="bg-gray-50 overflow-x-hidden px-3 md:px-6">
  <div className="w-full bg-white rounded-3xl overflow-hidden md:flex">
    {/* Left Image */}
    <motion.div
      className="md:w-1/2 h-80 md:h-auto"
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <img
        src={decor}
        alt="Living room"
        className="w-full h-full object-cover"
      />
    </motion.div>

    {/* Right Content */}
    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center space-y-6 bg-blue-50 rounded-r-3xl">
      <p className="text-sm text-blue-600 font-semibold">OUR BENEFIT</p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Why Choose HomeLengo
      </h2>
      <p className="text-gray-600 text-lg md:text-xl">
        Our seasoned team excels in real estate with years of successful
        market navigation, offering informed decisions and optimal results.
      </p>

      <div className="space-y-4">
        {benefits.map((benefit) => (
          <div
            key={benefit.id}
            className="flex items-start bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition"
          >
            <div className="mr-4 mt-1">{benefit.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

  );
};

export default Benefit;
