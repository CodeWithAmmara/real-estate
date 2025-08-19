import React, { useRef, useEffect } from "react";
import { HiX } from "react-icons/hi";

export default function LoginModal({ onClose, onSwitchToRegister }) {
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
      <div className="absolute inset-0 bg-black/40"></div>
      <div ref={modalRef} className="bg-white p-6 rounded-xl z-50 w-full max-w-md relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <HiX className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Email or Name" className="border rounded-full px-4 py-2" />
          <input type="password" placeholder="Password" className="border rounded-full px-4 py-2" />
          <button type="submit" className="bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700">
            Login
          </button>
        </form>
        <p className="text-sm text-center mt-3">
          Don’t have an account?{" "}
          <span className="text-blue-600 cursor-pointer" onClick={onSwitchToRegister}>
            Register
          </span>
        </p>
      </div>
    </div>
  );
}
