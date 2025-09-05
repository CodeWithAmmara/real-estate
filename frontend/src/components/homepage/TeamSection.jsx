import React from "react";
import { agents } from "../../data.js";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const TeamSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h6 className="text-blue-600 font-semibold tracking-wider uppercase">
          Our Teams
        </h6>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-12">
          Meet Our Agents
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="bg-white shadow-md rounded-2xl overflow-hidden group hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-full h-64 object-cover"
                />
                {/* Social Icons (hover) */}
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={agent.social.facebook}
                    className="text-white bg-blue-600 p-2 rounded-full hover:bg-blue-700"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href={agent.social.twitter}
                    className="text-white bg-sky-500 p-2 rounded-full hover:bg-sky-600"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href={agent.social.linkedin}
                    className="text-white bg-blue-700 p-2 rounded-full hover:bg-blue-800"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href={agent.social.instagram}
                    className="text-white bg-pink-600 p-2 rounded-full hover:bg-pink-700"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{agent.name}</h3>
                <p className="text-gray-500 text-sm">{agent.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
