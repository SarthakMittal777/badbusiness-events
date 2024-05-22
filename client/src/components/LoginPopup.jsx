// LoginPopup.js
import React from "react";
import { Link } from "react-router-dom";

function LoginPopup({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center w-full justify-center text-black ">
      <div className="bg-white p-6 rounded-md shadow-md w-2/3 md:w-1/3 bg-white/40 backdrop-blur-lg border border-white/5 shadow-neutral-800">
        <h2 className="text-xl text-black font-bold mb-4 text-center">
          Login Required!
        </h2>
        <p className="text-center font-semibold text-lg mt-10 text-black/80">
          You need to login before Creating an Event.
        </p>
        <p className="font-medium text-center mt-9">
          Please{" "}
          <Link to="/login" className="underline font-semibold">
            Login
          </Link>{" "}
          or{" "}
          <Link to="/register" className="underline font-semibold">
            Register
          </Link>{" "}
          to continue.
        </p>
        <button
          onClick={onClose}
          className="px-3 py-1 w-full mt-5 bg-white/90 text-black font-semibold rounded-md">
          Close
        </button>
      </div>
    </div>
  );
}

export default LoginPopup;
