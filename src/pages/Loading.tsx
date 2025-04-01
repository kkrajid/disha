import type React from "react"
import logo from "../assets/logo.png"

const Loading: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 sm:px-6">
      <div className="w-full max-w-md p-4 sm:p-6 flex flex-col items-center">
        {/* Logo */}
        <div className="mb-8 sm:mb-12">
          <img src={logo || "/placeholder.svg"} alt="DISHA Logo" className="w-[80px] sm:w-[100px]" />
        </div>

        {/* Center blinking effect */}
        <div className="relative flex items-center justify-center mb-8">
          {/* Outer pulsing circle */}
          <div className="absolute w-16 h-16 sm:w-20 sm:h-20 bg-[#3AADE1]/10 rounded-full animate-ping"></div>

          {/* Middle pulsing circle */}
          <div className="absolute w-12 h-12 sm:w-16 sm:h-16 bg-[#3AADE1]/20 rounded-full animate-pulse"></div>

          {/* Center blinking dot */}
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#bad9e8] rounded-full animate-[blink_1.2s_infinite]"></div>
        </div>

        {/* Optional loading message */}
        <p className="text-sm sm:text-base text-gray-600 text-center">Please wait while we prepare your experience</p>
      </div>
    </div>
  )
}



export default Loading

