import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Column 1 */}
        <div>
          <h2 className="text-xl font-bold mb-4">About Site</h2>
          <p className="text-sm text-gray-300">
            We help you find your dream house with ease. Trusted by thousands across the country.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">Properties</a></li>
            <li><a href="#" className="hover:text-white">FAQs</a></li>
          </ul>
        </div>

        {/* Column 3 - Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Report Issue</a></li>
          </ul>
        </div>

        {/* Column 4 - Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-white flex items-center justify-center bg-lime-600 rounded-full w-10 h-10 ">
              <FaFacebookF />
            </a>
            <a href="#" className="text-white flex items-center justify-center bg-lime-600 rounded-full w-10 h-10">
              <FaTwitter />
            </a>
            <a href="#" className="text-white flex items-center justify-center bg-lime-600 rounded-full w-10 h-10">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-white flex items-center justify-center bg-lime-600 rounded-full w-10 h-10">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} FindHouse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
