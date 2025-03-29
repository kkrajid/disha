import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const menuItems = [
    { id: 1, title: "Courses For You", route: "/courses" },
    { id: 2, title: "Jobs for You", route: "/jobs" },
    { id: 3, title: "Exam Helper", route: "/exam-helper" },
    { id: 4, title: "Mock Interview", route: "/mock-interview" },
    { id: 5, title: "Sample Questions", route: "/sample-questions" },
    { id: 6, title: "My Progress", route: "/my-progress" },
    { id: 7, title: "Industry Trends", route: "/industry-trends" },
    { id: 8, title: "Salary Compare", route: "/salary-compare" },
    { id: 9, title: "Resume Generator", route: "/resume-generator" },
    { id: 10, title: "Resume Extraction", route: "/resume-extraction" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#d4d3d3] py-3 px-4 flex justify-between items-center z-10 shadow-md">
        <img 
          src={logo} 
          alt="DISHA Logo" 
          className="h-8 w-auto" 
        />
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-800">Karthik</span>
          <div className="w-9 h-9 rounded-full bg-[#4CA1E2] flex items-center justify-center overflow-hidden border-2 border-white">
            <img 
              src="/api/placeholder/40/40" 
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-16 px-4 pb-4">
        {/* Job Fair Banner with Image */}
        <div className="relative rounded-xl overflow-hidden mb-6 h-48 shadow-lg">
          {/* Banner Image */}
          <img
            src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
            alt="Job Fair Banner"
            className="w-full h-full object-cover absolute inset-0"
            loading="lazy"
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30" />
          
          {/* Content */}
          <div className="relative h-full flex flex-col justify-end p-4 text-white">
            <h2 className="text-xl font-bold mb-1 drop-shadow-md">Job Fair Oct 20-22</h2>
            <p className="text-sm opacity-90 drop-shadow-md">
              Discover opportunities with top companies
            </p>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-2 gap-3">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(item.route)}
              className="flex items-center justify-center p-4 h-20 rounded-xl bg-[#3AADE1] shadow-sm hover:shadow-md transition-shadow duration-200 active:scale-95"
            >
              <span className="text-sm font-medium text-white text-center">
                {item.title}
              </span>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;