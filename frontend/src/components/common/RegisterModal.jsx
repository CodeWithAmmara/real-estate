import React, { useRef, useEffect } from "react";
import { HiX } from "react-icons/hi";

export default function RegisterModal({ onClose, onSwitchToLogin }) {
  const modalRef = useRef();

  // Close modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Modal box */}
      <div ref={modalRef} className="bg-white p-6 rounded-xl z-50 w-full max-w-md relative">
        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <HiX className="w-6 h-6" />
        </button>

        <h2 className="text-xl font-semibold mb-4">Register</h2>

        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Name" className="border rounded-full px-4 py-2" />
          <input type="email" placeholder="Email" className="border rounded-full px-4 py-2" />
          <input type="password" placeholder="Password" className="border rounded-full px-4 py-2" />
          <button type="submit" className="bg-green-600 text-white py-2 rounded-full hover:bg-green-700">
            Register
          </button>
        </form>

        <p className="text-sm text-center mt-3">
          Already have an account?{" "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={onSwitchToLogin}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
