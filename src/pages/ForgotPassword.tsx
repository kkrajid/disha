import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { requestPasswordReset } from "../api/authApi";
import logo from "../assets/logo.png";

const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await requestPasswordReset(phoneNumber);
      navigate("/reset-confirmation", { state: { phoneNumber }, replace: true });
    } catch (err: any) {
      setError(err.response?.data?.error || "Failed to send reset link");
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    navigate(-1);
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
          <h1 className="text-lg sm:text-xl font-bold">Forgot Password?</h1>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            Enter your phone number to receive a password reset link
          </p>
        </div>

        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
          <div className="bg-gray-50 rounded-xl p-3 sm:p-4">
            <input
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full bg-transparent border-b border-blue-200 py-2 focus:outline-none text-base"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 sm:py-4 rounded-full bg-[#3AADE1] text-white text-lg sm:text-xl font-medium mt-2 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        <p className="text-center mt-6 text-sm sm:text-base text-gray-600">
          Remember your password?{" "}
          <button onClick={() => navigate("/login")} className="text-[#3AADE1] font-medium">
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;

// src/pages/ResetPassword.tsx
