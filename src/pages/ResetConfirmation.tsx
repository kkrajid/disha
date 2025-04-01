import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const ResetConfirmation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const phoneNumber = location.state?.phoneNumber;

  const handleBack = () => {
    navigate(-1);
  };

  const handleResend = () => {
    // Add resend logic here if needed
    console.log("Resending reset email...");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 sm:px-6">
      <div className="w-full max-w-md p-4 sm:p-6 rounded-3xl shadow-sm bg-white relative border border-gray-200 shadow-lg">
        <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
          <button onClick={handleBack} className="bg-black text-white rounded-full p-2 sm:p-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col items-center mb-6 sm:mb-8 mt-12 sm:mt-8">
          <img src={logo} alt="DISHA Logo" className="w-[80px] sm:w-[100px]" />
        </div>

        <div className="text-center mb-6 sm:mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 sm:h-10 sm:w-10 text-green-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <path d="M22 4 12 14.01l-3-3" />
              </svg>
            </div>
          </div>
          <h1 className="text-lg sm:text-xl font-bold mb-2">Check Your Email</h1>
          <p className="text-sm sm:text-base text-gray-600">
            We've sent a password reset OTP to your email address. Please check your email to proceed.
          </p>
        </div>

        <button
          onClick={() => navigate("/reset-password", { state: { phoneNumber }, replace: true })}
          className="w-full py-3 sm:py-4 rounded-full bg-[#3AADE1] text-white text-lg sm:text-xl font-medium"
        >
          Continue
        </button>

        <p className="text-center mt-6 text-sm sm:text-base text-gray-600">
          Didn't receive the email?{" "}
          <button onClick={handleResend} className="text-[#3AADE1] font-medium">
            Resend Link
          </button>
        </p>
      </div>
    </div>
  );
};

export default ResetConfirmation;

// src/pages/Home.tsx
