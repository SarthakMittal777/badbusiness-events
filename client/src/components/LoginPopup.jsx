import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

function LoginPopup({ isOpen, onClose }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!isPopupOpen || e.target.closest(".popup")) return;
      onClose();
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isPopupOpen, onClose]);

  const handleClose = () => {
    setIsPopupOpen(false);
    onClose();
  };
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white/50 p-11 py-10 rounded-md shadow-md w-2/3 md:w-2/5 h-1/2 backdrop-blur-lg border border-white/5 shadow-neutral-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-black/80 hover:text-black transition-colors duration-200 focus:outline-none">
          <FaTimes className="text-2xl" />
        </button>
        <h2 className="text-4xl text-black font-bold mb-4 text-center cursor-default">
          Login Required!
        </h2>
        <p className="text-center font-semibold text-2xl flex items-center justify-center mt-20 text-black/90 pointer-events-none">
          BAD Account Required. Please Login or Register using the buttons
          below.
        </p>
        <div className="flex justify-center gap-5 mt-24 w-full">
          <Link
            to="/login"
            className="px-3 py-1 bg-white/90 text-black font-semibold rounded-md w-1/3 text-center">
            Login
          </Link>
          <Link
            to="/register"
            className="px-3 py-1 bg-white/90 text-black font-semibold rounded-md w-1/3 text-center">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPopup;
