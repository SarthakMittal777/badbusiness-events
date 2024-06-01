import { Link, useNavigate } from "react-router-dom";
import { server } from "../api";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const navigate = useNavigate();

  const userRegister = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        username,
        email,
        password,
      };
      await server.post("/api/v1/user/register", payload);
      toast.success("Registration Successful");
      navigate("/login");
    } catch (err) {
      console.error("Error:", err.response ? err.response.data : err.message);
      toast.error("Failed to register");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-700">
      <ToastContainer />
      <div className="bg-transparent p-8 rounded-lg shadow-lg max-w-sm w-full border border-white/5 shadow-neutral-800">
        <div className="text-center mb-8">
          <img
            src="/brand/logo.jpg"
            alt="Luma Logo"
            className="h-16 mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-white">
            Welcome to BadBusiness
          </h1>
          <p className="text-gray-400">Please Login or Register below.</p>
        </div>
        <form onSubmit={userRegister}>
          <div className="mb-4">
            <label className="block text-gray-400 mb-1">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter Your Name"
              className="w-full px-4 py-2 border rounded-md bg-gray-700 text-white border-gray-600"
            />
            <label className="block text-gray-400 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              className="w-full px-4 py-2 border rounded-md bg-gray-700 text-white border-gray-600"
            />
            <label className="block text-gray-400 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Your Password"
              className="w-full px-4 py-2 border rounded-md bg-gray-700 text-white border-gray-600"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mb-4 mt-10 bg-blue-600 hover:bg-blue-700 text-white rounded-md">
            Register
          </button>
        </form>
        <p className="text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-white">
            Login Here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
