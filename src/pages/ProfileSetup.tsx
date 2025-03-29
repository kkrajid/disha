import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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
  "Technology"
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
      setSelectedIndustries(selectedIndustries.filter(item => item !== industry));
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
      selectedIndustries
    });
    navigate("/dashboard"); // Navigate to dashboard after saving
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Fixed Header - Made responsive */}
      <div className="fixed top-0 left-0 right-0 bg-[#d4d3d3] text-white py-3 px-4 flex justify-between items-center z-10 shadow-md">
        <div className="flex items-center" onClick={() => navigate("/")}>
          <img src={logo} alt="DISHA Logo" className="h-6 sm:h-8" />
        </div>
        <div className="flex items-center">
          <div className="flex flex-col items-end mr-2 sm:mr-3">
            <span className="text-sm sm:text-lg font-medium">Karthik</span>
          </div>
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#4CA1E2] flex items-center justify-center overflow-hidden">
            <img 
              src="/api/placeholder/40/40" 
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Add padding to top to account for fixed header */}
      <div className="pt-16 sm:pt-20"></div>

      {/* Profile Form */}
      <div className="flex-1 px-4 py-6">
        <form onSubmit={handleSubmit}>
          {/* Personal Information Card */}
          <div className="bg-white rounded-lg shadow-md p-5 mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-center mb-4">Fill Up Your Profile</h2>
            <div className="border-b-2 border-black mb-6"></div>
            
            <div className="space-y-5">
              <div>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full py-3 border-b border-gray-300 focus:outline-none focus:border-[#3AADE1] text-gray-500"
                  required
                />
              </div>
              
              <div>
                <input
                  type="text"
                  placeholder="Your highest qualification ?"
                  value={qualification}
                  onChange={(e) => setQualification(e.target.value)}
                  className="w-full py-3 border-b border-gray-300 focus:outline-none focus:border-[#3AADE1] text-gray-500"
                  required
                />
              </div>
              
              <div>
                <button
                  type="button"
                  onClick={() => document.getElementById("dob-input")?.click()}
                  className="w-full py-3 bg-[#3AADE1] text-white rounded-md text-center"
                >
                  Date of Birth
                </button>
                <input
                  id="dob-input"
                  type="date"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  className="hidden"
                  required
                />
              </div>
              
              <div>
                <input
                  type="text"
                  placeholder="Enter Your Complete Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full py-3 border-b border-gray-300 focus:outline-none focus:border-[#3AADE1] text-gray-500"
                  required
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  placeholder="Enter Your Mobile Number"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  className="w-full py-3 border-b border-gray-300 focus:outline-none focus:border-[#3AADE1] text-gray-500"
                  required
                />
              </div>
              
              <div className="flex flex-wrap items-center space-x-2 sm:space-x-6 py-2">
                <label className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={gender === "Male"}
                    onChange={() => setGender("Male")}
                    className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-[#3AADE1] rounded text-[#3AADE1] focus:ring-[#3AADE1]"
                  />
                  <span className="ml-2 text-base sm:text-lg">Male</span>
                </label>
                
                <label className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={gender === "Female"}
                    onChange={() => setGender("Female")}
                    className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-[#3AADE1] rounded text-[#3AADE1] focus:ring-[#3AADE1]"
                  />
                  <span className="ml-2 text-base sm:text-lg">Female</span>
                </label>
                
                <label className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={gender === "Others"}
                    onChange={() => setGender("Others")}
                    className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-[#3AADE1] rounded text-[#3AADE1] focus:ring-[#3AADE1]"
                  />
                  <span className="ml-2 text-base sm:text-lg">Others</span>
                </label>
              </div>
            </div>
          </div>
          
          {/* Industry Preferences Card */}
          <div className="bg-white rounded-lg shadow-md p-5 mb-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Select Your Industry Preferences</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {industries.map((industry) => (
                <button
                  key={industry}
                  type="button"
                  onClick={() => handleIndustryToggle(industry)}
                  className={`p-3 sm:p-4 rounded-md text-white text-center text-sm sm:text-base ${
                    selectedIndustries.includes(industry)
                      ? "bg-[#2C8EB6]"
                      : "bg-[#3AADE1]"
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>
          
          {/* Save Button */}
          <div className="flex justify-center sm:justify-end pb-6">
            <button
              type="submit"
              className="bg-[#009688] text-white py-2 sm:py-3 px-8 sm:px-12 rounded-md text-lg sm:text-xl"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileSetup;