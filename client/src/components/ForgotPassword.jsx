import { useState } from "react";
import { server } from "../api";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const res = await server.post("/api/v1/user/forgot-password", {
        email,
        username,
      });
      if (res.data.success) {
        toast.success("OTP sent to your email");
        navigate("/reset-password");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to send OTP");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <ToastContainer />
      <div className="bg-gray-700 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-white text-2xl mb-4">Forgot Password</h2>
        <form onSubmit={handleForgotPassword}>
          <div className="mb-4">
            <label className="block text-white mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md bg-gray-600 text-white border border-gray-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md bg-gray-600 text-white border border-gray-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Send OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
