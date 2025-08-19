import React, { useEffect, useRef, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FiPhone, FiMail } from "react-icons/fi";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

export default function Header() {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef(null);
  const btnRef = useRef(null);
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  // Close drawer on outside click or ESC
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    function onDown(e) {
      const target = e.target;
      if (!open) return;
      if (
        drawerRef.current &&
        !drawerRef.current.contains(target) &&
        btnRef.current &&
        !btnRef.current.contains(target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, [open]);

  // Lock body scroll while drawer is open
  useEffect(() => {
    const original = typeof document !== "undefined" ? document.body.style.overflow : "";
    if (open && typeof document !== "undefined") document.body.style.overflow = "hidden";
    return () => {
      if (typeof document !== "undefined") document.body.style.overflow = original;
    };
  }, [open]);

  const menuItems = ["Home", "Listing", "Properties", "About", "Contact"];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
            H
          </div>
          <div>
            <div className="text-base font-semibold text-gray-800">Home Lengo</div>
            <div className="text-xs text-gray-500 -mt-0.5">Searching homes</div>
          </div>
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((label) => (
            <a key={label} href="#" className="text-gray-700 hover:text-blue-600 font-medium">
              {label}
            </a>
          ))}
        </div>

        {/* Right: desktop actions + mobile button */}
        <div className="flex items-center gap-3">
          {/* Sign in button */}
          <button
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded-full"
            onClick={() => setLoginOpen(true)}
          >
            Sign in
          </button>

          {/* Submit Property */}
          <button className="px-4 py-2 text-sm rounded-full bg-blue-600 text-white">
            Submit Property
          </button>

          {/* Hamburger only on mobile */}
          <button
            ref={btnRef}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="p-2 md:hidden"
          >
            <HiMenu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Drawer Backdrop */}
      {open && <div className="fixed inset-0 z-40 bg-black/40" aria-hidden="true" />}

      {/* Drawer */}
      <aside
        ref={drawerRef}
        className={`fixed top-0 left-0 z-50 h-full w-68 bg-white shadow-xl transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal={open ? "true" : "false"}
      >
        {/* Logo */}
        <div className="px-4 py-3 bg-white shadow-md">
          <a href="/" className="flex items-center space-x-2">
            <img src="/your-logo.png" alt="Logo" className="h-8 w-auto" />
            <span className="font-bold text-lg text-gray-800">Home Lengo</span>
          </a>
        </div>

        {/* Drawer header: Login/Register */}
        <div className="flex items-center justify-between px-4 py-3 w-[90%] mx-auto border-b-2 border-gray-200">
          <div className="text-sm font-medium text-gray-900">
            <span className="hover:text-blue-600 cursor-pointer" onClick={() => setLoginOpen(true)}>
              Login
            </span>
            <span> / </span>
            <span className="hover:text-blue-600 cursor-pointer" onClick={() => setRegisterOpen(true)}>
              Register
            </span>
          </div>
        </div>

        {/* Drawer links */}
        <nav className="flex flex-col px-3 py-2 text-gray-900 w-[90%] mx-auto border-b-2 border-gray-200">
          {menuItems.map((label) => (
            <a
              key={label}
              href="#"
              className="flex items-center justify-between py-3 px-3 hover:text-blue-600"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Submit button */}
        <div className="px-4 mt-4">
          <button className="w-full py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
            Submit Property
          </button>
        </div>

        {/* Contact Info */}
        <div className="mt-6 w-[90%] mx-auto text-sm text-gray-600">
          <div className="flex items-center gap-3 border-t-2 border-gray-200 pt-4">
            <FiPhone className="w-5 h-5 text-blue-600" />
            <span>1-333-345-6868</span>
          </div>
          <div className="flex items-center gap-3 border-t-2 border-gray-200 pt-4 mt-3">
            <FiMail className="w-5 h-5 text-blue-600" />
            <span>themesflat@gmail.com</span>
          </div>
        </div>
      </aside>

      {/* Close drawer button */}
      {open && (
        <button
          onClick={() => setOpen(false)}
          className="fixed top-4 right-4 z-50 p-2 text-white text-3xl"
          aria-label="Close menu"
        >
          <HiX className="w-10 h-10" />
        </button>
      )}

      {/* Modals: Login */}
      {loginOpen && (
        <LoginModal
          onClose={() => setLoginOpen(false)}
          onSwitchToRegister={() => {
            setLoginOpen(false);
            setRegisterOpen(true);
          }}
        />
      )}

      {/* Modals: Register */}
      {registerOpen && (
        <RegisterModal
          onClose={() => setRegisterOpen(false)}
          onSwitchToLogin={() => {
            setRegisterOpen(false);
            setLoginOpen(true);
          }}
        />
      )}
    </header>
  );
}
