import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { verifyOTP, resetPassword } from "../api/authApi";
import logo from "../assets/logo.png";

const ResetPassword: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [phoneNumber] = useState<string>(location.state?.phoneNumber || "");
  const [otp, setOtp] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [otpVerified, setOtpVerified] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleVerifyOTP = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await verifyOTP(phoneNumber, otp);
      setOtpVerified(true);
    } catch (err: any) {
      setError(err.response?.data?.error || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      await resetPassword(phoneNumber, password);
      setSuccess(true);
      setTimeout(() => navigate("/login", { replace: true }), 3000);
    } catch (err: any) {
      setError(err.response?.data?.error || "Password reset failed");
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
          <h1 className="text-lg sm:text-xl font-bold">
            {success ? "Password Reset Successful" : "Create New Password"}
          </h1>
          {!success && (
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              Enter the OTP and your new password
            </p>
          )}
        </div>

        {success ? (
          <div className="text-center">
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
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Password updated successfully! Redirecting to login...
            </p>
          </div>
        ) : !otpVerified ? (
          <form onSubmit={handleVerifyOTP} className="space-y-5 sm:space-y-6">
            {error && <div className="text-red-500 text-sm text-center mb-4">{error}</div>}
            <div className="bg-gray-50 rounded-xl p-3 sm:p-4">
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full bg-transparent border-b border-blue-200 py-2 focus:outline-none text-base"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 sm:py-4 rounded-full bg-[#3AADE1] text-white text-lg sm:text-xl font-medium mt-2 disabled:opacity-50"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleResetPassword} className="space-y-5 sm:space-y-6">
            {error && <div className="text-red-500 text-sm text-center mb-4">{error}</div>}
            <div className="bg-gray-50 rounded-xl p-3 sm:p-4">
              <input
                type="password"
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent border-b border-blue-200 py-2 focus:outline-none text-base"
                required
              />
            </div>
            <div className="bg-gray-50 rounded-xl p-3 sm:p-4">
              <input
                type="password"
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-transparent border-b border-blue-200 py-2 focus:outline-none text-base"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 sm:py-4 rounded-full bg-[#3AADE1] text-white text-lg sm:text-xl font-medium mt-2 disabled:opacity-50"
            >
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </form>
        )}

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

export default ResetPassword;

// src/pages/ResetConfirmation.tsx
