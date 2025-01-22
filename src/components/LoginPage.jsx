import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUser, FaLock } from "react-icons/fa"; // React Icons
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/authSlice"; // Import the login action

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    // If already logged in, redirect to Todo page
    if (isLoggedIn) {
      navigate("/todo");
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const userData = JSON.parse(storedUser);

      if (username === userData.username && password === userData.password) {
        // Dispatch login action to store user data in Redux state
        dispatch(login({ username }));
        
        // Optionally store login status in localStorage
        localStorage.setItem("isLoggedIn", "true");

        navigate("/todo");
      } else {
        alert("Invalid credentials, please try again.");
      }
    } else {
      alert("No user found. Please sign up first.");
      navigate("/signup");
    }
  };

  return (
    <motion.div
      className="flex justify-center items-center min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-[384px] md:w-[384px] lg:w-[384px] xl:w-[384px]">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center border border-gray-300 rounded-md p-2">
            <FaUser className="text-gray-500 mr-3" />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
              className="w-full px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-md p-2">
            <FaLock className="text-gray-500 mr-3" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <motion.button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Login
          </motion.button>

          {/* Sign Up Button */}
          <div className="text-center mt-4">
            <button
              onClick={() => navigate("/signup")}
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Don't have an account? Sign up
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default LoginPage;
