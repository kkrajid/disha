import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/profile-setup");
  };

  const handleBack = () => {
    navigate(-1);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 sm:px-6">
      <div className="w-full max-w-md p-4 sm:p-6 relative">
        {/* Back button */}
        <button 
          onClick={handleBack} 
          className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-black text-white rounded-full p-2 sm:p-3"
          aria-label="Go back"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>

        {/* Logo */}
        <div className="flex flex-col items-center mt-12 sm:mt-16 mb-6 sm:mb-8">
          <img src={logo || "/placeholder.svg"} alt="DISHA Logo" className="w-[120px] sm:w-[150px]" />
        </div>

        {/* Heading */}
        <h1 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6">Hello! Register to get started</h1>

        {/* Form */}
        <form className="space-y-4 sm:space-y-5" onSubmit={handleRegister}>
          <div className="bg-gray-50 rounded-xl p-3 sm:p-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full bg-transparent border-b border-blue-200 py-2 focus:outline-none text-base"
              required
            />
          </div>

          <div className="bg-gray-50 rounded-xl p-3 sm:p-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border-b border-blue-200 py-2 focus:outline-none text-base"
              required
            />
          </div>

          <div className="bg-gray-50 rounded-xl p-3 sm:p-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full bg-transparent border-b border-blue-200 py-2 focus:outline-none pr-10 text-base"
              required
            />
            <button 
              type="button" 
              className="absolute right-4 top-4 text-gray-600 p-1"
              onClick={togglePasswordVisibility}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </button>
          </div>

          <div className="bg-gray-50 rounded-xl p-3 sm:p-4 relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full bg-transparent border-b border-blue-200 py-2 focus:outline-none pr-10 text-base"
              required
            />
            <button 
              type="button" 
              className="absolute right-4 top-4 text-gray-600 p-1"
              onClick={toggleConfirmPasswordVisibility}
              aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
            >
              {showConfirmPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </button>
          </div>

          <button 
            type="submit" 
            className="w-full py-3 sm:py-4 rounded-full bg-[#3AADE1] text-white text-lg sm:text-xl font-medium mt-6"
          >
            Register
          </button>
        </form>

        {/* Social login options */}
        <div className="mt-6 sm:mt-8">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="h-px bg-gray-300 flex-grow"></div>
            <p className="text-sm sm:text-base text-gray-600">or Register with</p>
            <div className="h-px bg-gray-300 flex-grow"></div>
          </div>
          
          <button className="w-full py-2 sm:py-3 px-4 border border-gray-300 rounded-full flex items-center justify-center space-x-2">
            <img src="https://cdn.cdnlogo.com/logos/g/35/google-icon.svg" alt="Google" className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-gray-700 text-base sm:text-lg">Google</span>
          </button>
        </div>

        {/* Log in link */}
        <p className="text-center mt-6 text-sm sm:text-base text-gray-600">
          Already have an account? <a href="/login" className="text-[#3AADE1] font-medium">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default Register;