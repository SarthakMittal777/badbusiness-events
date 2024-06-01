import { useState } from "react";
import { server } from "../api";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const res = await server.post("/api/v1/user/reset-password", {
        username,
        email,
        otp,
        newPassword,
      });
      if (res.data.success) {
        toast.success("Password reset successful");
        navigate("/login");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to reset password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <ToastContainer />
      <div className="bg-gray-700 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-white text-2xl mb-4">Reset Password</h2>
        <form onSubmit={handleResetPassword}>
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
            <label className="block text-white mb-2">OTP</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md bg-gray-600 text-white border border-gray-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md bg-gray-600 text-white border border-gray-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
