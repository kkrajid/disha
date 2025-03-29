"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import logo from "../assets/logo.png";
import googleIcon from "../assets/google-icon.png";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you would validate and authenticate here
    navigate("/dashboard");
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 sm:px-6">
      <div className="w-full max-w-md p-4 sm:p-6 rounded-3xl shadow-sm bg-white relative border border-gray-200 shadow-lg">
        <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
          <button 
            onClick={handleBack} 
            className="bg-black text-white rounded-full p-2 sm:p-3"
            aria-label="Go back"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
        </div>

        <div className="flex flex-col items-center mb-6 sm:mb-8 mt-12 sm:mt-8">
          <img src={logo || "/placeholder.svg"} alt="DISHA Logo" className="w-[80px] sm:w-[100px]" />
        </div>

        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-lg sm:text-xl font-bold">Welcome Back! Glad</h1>
          <h1 className="text-lg sm:text-xl font-bold">to see you Again!</h1>
        </div>

        <form onSubmit={handleLogin} className="space-y-5 sm:space-y-6">
          <div className="bg-gray-50 rounded-xl p-3 sm:p-4">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-transparent border-b border-blue-200 py-2 focus:outline-none text-base"
              required
            />
          </div>

          <div className="bg-gray-50 rounded-xl p-3 sm:p-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent border-b border-blue-200 py-2 focus:outline-none pr-10 text-base"
              required
            />
            <button 
              type="button" 
              onClick={() => setShowPassword(!showPassword)} 
              className="absolute right-4 top-4 text-gray-600 p-1"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff size={18} color="currentColor" />
              ) : (
                <Eye size={18} color="currentColor" />
              )}
            </button>
          </div>

          <div className="flex justify-end">
            <button 
              type="button"
              onClick={() => navigate("/forgot-password")}
              className="text-sm sm:text-base text-[#3AADE1] font-medium"
            >
              Forgot Password?
            </button>
          </div>

          <button 
            type="submit" 
            className="w-full py-3 sm:py-4 rounded-full bg-[#3AADE1] text-white text-lg sm:text-xl font-medium mt-2"
          >
            Login
          </button>
        </form>

        <div className="flex items-center my-5 sm:my-6">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-3 sm:px-4 text-sm sm:text-base text-gray-500">or Login with</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        <button className="w-full py-2 sm:py-3 px-4 border border-gray-300 rounded-full flex items-center justify-center space-x-2">
          <img src={googleIcon || "/placeholder.svg"} alt="Google" className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="text-gray-700 text-base sm:text-lg">Google</span>
        </button>

        <p className="text-center mt-6 text-sm sm:text-base text-gray-600">
          Don't have an account? <a href="/register" className="text-[#3AADE1] font-medium">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;