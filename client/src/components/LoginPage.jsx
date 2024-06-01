import { Link, useNavigate } from "react-router-dom";
import { server } from "../api";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const userLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await server.post("/api/v1/user/login", { email, password });
      const { accessToken } = res.data;
      localStorage.setItem("accessToken", accessToken);
      console.log(res.data);
      toast.success("Login Successful");
      navigate("/");
      const user = await server.get("/api/v1/user/profile", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      // console.log(user.data);
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: user.data.user.username,
          email: user.data.user.email,
          id: user.data.user._id,
        })
      );
    } catch (err) {
      console.log(err);
      toast.error("Failed to login");
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
        <form onSubmit={userLogin}>
          <div className="mb-4">
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
            Login
          </button>
          <Link
            to="/forgot-password"
            className="text-white text-center block mb-4">
            Forgot Password?
          </Link>
        </form>
        <p className="text-gray-400">
          Don&apos;t have an account yet?{" "}
          <Link to="/register" className="text-white">
            Register Here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
