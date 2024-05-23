import React from "react";
import { Link } from "react-router-dom";

function LoginPopup({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-11 py-10 rounded-md shadow-md w-2/3 md:w-1/5 bg-white/30 backdrop-blur-lg border border-white/5 shadow-neutral-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h2 className="text-xl text-black font-bold mb-4 text-center cursor-default">
          Login Required!
        </h2>
        <p className="text-center font-semibold text-xl mt-10 text-black/80 pointer-events-none">
          You need to login before Creating an Event.
        </p>
        <p className="font-medium text-lg text-black text-center mt-9">
          Please{" "}
          <Link to="/login" className="font-semibold">
            Login
          </Link>{" "}
          or{" "}
          <Link to="/register" className="font-semibold">
            Register
          </Link>{" "}
          to continue.
        </p>
        <button
          onClick={onClose}
          className="px-3 py-1 w-full mt-7 bg-white/90 text-black font-semibold rounded-md">
          Close
        </button>
      </div>
    </div>
  );
}

export default LoginPopup;
