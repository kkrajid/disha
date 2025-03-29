import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

// Industry options
const industries = [
  "Arts & Design",
  "Education",
  "Engineering",
  "Finance",
  "Healthcare",
  "Hospitality",
  "Marketing",
  "Technology",
];

const ProfileSetup: React.FC = () => {
  const navigate = useNavigate();

  // State for form fields
  const [name, setName] = useState("");
  const [qualification, setQualification] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [gender, setGender] = useState("");
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);

  const handleIndustryToggle = (industry: string) => {
    if (selectedIndustries.includes(industry)) {
      setSelectedIndustries(selectedIndustries.filter((item) => item !== industry));
    } else {
      setSelectedIndustries([...selectedIndustries, industry]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - in a real app you would send this data to the server
    console.log({
      name,
      qualification,
      dateOfBirth,
      address,
      mobileNumber,
      gender,
      selectedIndustries,
    });
    navigate("/dashboard"); // Navigate to dashboard after saving
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white py-3 px-4 sm:px-6 flex justify-between items-center z-10 shadow-md">
        <div className="flex items-center">
          <button
            onClick={handleBack}
            className="bg-gray-700 text-white rounded-full p-2 sm:p-3 mr-3 sm:mr-4 hover:bg-gray-800 transition-colors"
            aria-label="Go back"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <img src={logo} alt="DISHA Logo" className="h-8 sm:h-10 w-auto" />
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="text-sm sm:text-base font-medium text-gray-800">Karthik</span>
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#4CA1E2] flex items-center justify-center overflow-hidden shadow-sm">
            <img src="/api/placeholder/40/40" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-16 sm:pt-20 pb-6">
        <div className="w-full max-w-lg mx-auto">
          <form onSubmit={handleSubmit}>
            {/* Personal Information Card */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg border border-gray-100 mb-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-center mb-4 sm:mb-6 text-[#3AADE1]">
              Fill Up Your Profile
              </h2>

              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-gray-50 rounded-lg p-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3AADE1] text-gray-700 text-base"
                    required
                  />
                </div>

                <div className="relative">
                  <input
                    type="text"
                    placeholder="Highest Qualification"
                    value={qualification}
                    onChange={(e) => setQualification(e.target.value)}
                    className="w-full bg-gray-50 rounded-lg p-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3AADE1] text-gray-700 text-base"
                    required
                  />
                </div>

                <div className="relative">
                  <input
                    type="date"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    className="w-full bg-gray-50 rounded-lg p-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3AADE1] text-gray-700 text-base"
                    required
                  />
                </div>

                <div className="relative">
                  <input
                    type="text"
                    placeholder="Complete Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full bg-gray-50 rounded-lg p-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3AADE1] text-gray-700 text-base"
                    required
                  />
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    className="w-full bg-gray-50 rounded-lg p-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3AADE1] text-gray-700 text-base"
                    required
                  />
                </div>

                <div className="flex flex-wrap items-center gap-4 sm:gap-6 py-2">
                  {["Male", "Female", "Others"].map((option) => (
                    <label key={option} className="flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        checked={gender === option}
                        onChange={() => setGender(option)}
                        className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-[#3AADE1] rounded-full text-[#3AADE1] focus:ring-[#3AADE1]"
                      />
                      <span className="ml-2 text-sm sm:text-base text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Industry Preferences Card */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg border border-gray-100 mb-6">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-[#3AADE1]">
                Industry Preferences
              </h2>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {industries.map((industry) => (
                  <button
                    key={industry}
                    type="button"
                    onClick={() => handleIndustryToggle(industry)}
                    className={`p-3 sm:p-4 rounded-lg text-sm sm:text-base font-medium transition-all duration-200 ${
                      selectedIndustries.includes(industry)
                        ? "bg-[#2C8EB6] text-white shadow-md"
                        : "bg-[#3AADE1]/20 text-[#3AADE1] hover:bg-[#3AADE1]/30"
                    }`}
                  >
                    {industry}
                  </button>
                ))}
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-center pb-6">
              <button
                type="submit"
                className="w-full max-w-xs py-3 sm:py-4 rounded-lg bg-[#3AADE1] text-white text-lg sm:text-xl font-semibold hover:bg-[#2C8EB6] transition-colors shadow-md"
              >
                Save Profile
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ProfileSetup;