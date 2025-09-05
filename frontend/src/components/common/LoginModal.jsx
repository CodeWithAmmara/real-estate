import React, { useRef, useEffect, useState } from "react";
import { HiX } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/auth/authSlice";
import  login from "../../assets/images/login.jpg";

export default function LoginModal({ onClose, onSwitchToRegister }) {
  const modalRef = useRef();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const [form, setForm] = useState({ email: "", password: "" });

  useEffect(() => {
    function handleClickOutside(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(form));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Modal */}

       <div
        ref={modalRef}
       className="relative z-50 bg-white rounded-3xl shadow-lg flex flex-col md:flex-row 
            w-[60%] max-w-4xl h-[500px] overflow-hidden"
      >
        {/* Left Image (hidden on small screens) */}
       <div className="hidden md:block w-1/2">
        <img
         src= {login}
         alt="Building"
         className="w-full h-full object-cover"
        />
        </div>

        {/* Right Form */}
       <div className="w-full md:w-1/2 p-6 sm:p-5 relative flex flex-col justify-center">
       {/* Close Button */}
       <button
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        onClick={onClose}
       >
       <HiX className="w-6 h-6" />
       </button>

      <h2 className="text-2xl font-semibold mb-6">Login</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
       {/* Account */}
       <div className="flex flex-col">
       <label className="text-sm mb-1">Account</label>
        <input
        name="email"
        type="email"
        placeholder="Your name"
        className="border rounded-full px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
        onChange={handleChange}
      />
    </div>

    {/* Password */}
    <div className="flex flex-col">
      <label className="text-sm mb-1">Password</label>
      <input
        name="password"
        type="password"
        placeholder="Your password"
        className="border rounded-full px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
        onChange={handleChange}
      />
      <span className="text-xs text-right mt-1 text-gray-600 cursor-pointer hover:underline">
        Forgot password
      </span>
    </div>

    {/* Login Button */}
    <button
      type="submit"
      disabled={loading}
      className="bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition text-sm font-medium"
    >
      {loading ? "Loading..." : "Login"}
    </button>
  </form>

  {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

  {/* Register Link */}
  <p className="text-sm text-center mt-4">
    Don’t you have an account?{" "}
    <span
      className="text-blue-600 cursor-pointer hover:underline"
      onClick={onSwitchToRegister}
    >
      Register
    </span>
  </p>

  {/* Divider */}
  <div className="flex items-center gap-2 my-4">
    <div className="flex-grow h-px bg-gray-300"></div>
    <span className="text-sm text-gray-500">or login with</span>
    <div className="flex-grow h-px bg-gray-300"></div>
  </div>

  {/* Social Login */}
{/* Social Login */}
<div className="flex justify-center mt-2">
  <button className="flex items-center justify-center gap-2 border rounded-full px-16 py-3 hover:border-blue-600 text-sm">
    <FcGoogle className="text-2xl" />
    <span className="text-xl">Google</span>
  </button>
</div>

</div>

      </div>
    </div>
  );
}
