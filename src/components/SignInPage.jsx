import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUser, FaLock } from "react-icons/fa";  // React Icons

const SignInPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      alert("User already signed up! Please login.");
      navigate("/login");
      return;
    }

    const userData = { username, password };
    localStorage.setItem("user", JSON.stringify(userData));

    alert("Sign Up Successful! Now you can log in.");
    navigate("/login");
  };

  return (
    <motion.div
      className="flex justify-center items-center min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-96 md:w-96 lg:w-96">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Sign Up</h2>
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
            Sign Up
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default SignInPage;
