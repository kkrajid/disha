import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState("courses");
  const [showGrid, setShowGrid] = useState(true);

  // Mock data for different sections
  const coursesData = [
    {
      title: "Digital-Marketing",
      duration: "6 Months",
      provider: "Google-Certification",
      fee: "50000",
      buttonText: "Enroll Now"
    },
    {
      title: "Event-Planning",
      duration: "12 Months",
      provider: "Skillshare",
      fee: "40000",
      buttonText: "Enroll Now"
    },
    {
      title: "Public-Health",
      duration: "24 Months",
      provider: "Johns-Hopkins",
      fee: "65000",
      buttonText: "Enroll Now"
    }
  ];

  const jobsData = [
    {
      title: "Illustrator",
      experience: "3 Years",
      provider: "Adobe",
      salary: "55000",
      buttonText: "Apply Now"
    },
    {
      title: "Tax-Consultant",
      experience: "5 Years",
      provider: "EY-India",
      salary: "70000",
      buttonText: "Apply Now"
    },
    {
      title: "Waiter",
      experience: "2 Years",
      provider: "ITC-Hotels",
      salary: "35000",
      buttonText: "Apply Now"
    }
  ];

  const examHelperData = [
    {
      title: "UPSC",
      year: "2025 Paper",
      university: "JNU",
      pages: "5",
      buttonText: "Download"
    },
    {
      title: "JEE",
      year: "2025 Paper",
      university: "IIT",
      pages: "5",
      buttonText: "Download"
    },
    {
      title: "UPSC",
      year: "2025 Paper",
      university: "JNU",
      pages: "4",
      buttonText: "Download"
    }
  ];

  const mockInterviewData = [
    {
      title: "AI-Developer",
      year: "2025 Q & A",
      provider: "Incralabs",
      pages: "5",
      buttonText: "Download"
    },
    {
      title: "AI-Developer",
      year: "2025 Q & A",
      provider: "Incralabs",
      pages: "5",
      buttonText: "Download"
    },
    {
      title: "AI-Developer",
      year: "2025 Q & A",
      provider: "Incralabs",
      pages: "5",
      buttonText: "Download"
    }
  ];

  const progressData = [
    { text: "UPSC Question Bank Downloaded 3-21-2025" },
    { text: "UPSC Question Bank Downloaded 3-21-2025" },
    { text: "UPSC Question Bank Downloaded 3-21-2025" },
    { text: "UPSC Question Bank Downloaded 3-21-2025" }
  ];

  const trendsData = [
    { text: "Nvidia Decides to hire new employees in india for their new warehouse" },
    { text: "China Launched AI ChatBot DeepSeek which crossed the popularity of chatgpt" },
    { text: "Nvidia Decides to hire new employees in india for their new warehouse" },
    { text: "China Launched AI ChatBot DeepSeek which crossed the popularity of chatgpt" }
  ];

  const salaryData = [
    { title: "AI Engineer", salary: "50000 per Month" },
    { title: "BMS Engineer", salary: "25000 per month" },
    { title: "AI Engineer", salary: "50000 per Month" },
    { title: "AI Engineer", salary: "50000 per Month" }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "courses":
        return (
          <div className="space-y-4">
            {coursesData.map((course, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4">
                <div className="mb-2">
                  <p><span className="font-medium">Title : </span>{course.title}</p>
                  <p><span className="font-medium">Duration : </span>{course.duration}</p>
                  <p><span className="font-medium">Provider : </span>{course.provider}</p>
                  <p><span className="font-medium">Fee : </span>{course.fee}</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-purple-600">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="24" height="24" rx="5" fill="#F3E8FF" />
                      <path d="M12 6V18M12 6L7 11M12 6L17 11" stroke="#9333EA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-md text-sm">
                    {course.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        );

      case "jobs":
        return (
          <div className="space-y-4">
            {jobsData.map((job, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4">
                <div className="mb-2">
                  <p><span className="font-medium">Title : </span>{job.title}</p>
                  <p><span className="font-medium">Experience : </span>{job.experience}</p>
                  <p><span className="font-medium">Provider : </span>{job.provider}</p>
                  <p><span className="font-medium">Salary : </span>{job.salary}</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-purple-600">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="24" height="24" rx="5" fill="#F3E8FF" />
                      <path d="M12 6V18M12 6L7 11M12 6L17 11" stroke="#9333EA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-md text-sm">
                    {job.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        );

      case "examHelper":
        return (
          <div className="space-y-4">
            {examHelperData.map((exam, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4">
                <div className="mb-2">
                  <p><span className="font-medium">Title : </span>{exam.title}</p>
                  <p><span className="font-medium">Year : </span>{exam.year}</p>
                  <p><span className="font-medium">University : </span>{exam.university}</p>
                  <p><span className="font-medium">Pages : </span>{exam.pages}</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-purple-600">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="24" height="24" rx="5" fill="#F3E8FF" />
                      <path d="M12 6V18M12 6L7 11M12 6L17 11" stroke="#9333EA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-md text-sm">
                    {exam.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        );

      case "mockInterview":
        return (
          <div className="space-y-4">
            {mockInterviewData.map((interview, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4">
                <div className="mb-2">
                  <p><span className="font-medium">Title : </span>{interview.title}</p>
                  <p><span className="font-medium">Year : </span>{interview.year}</p>
                  <p><span className="font-medium">Provider : </span>{interview.provider}</p>
                  <p><span className="font-medium">Pages : </span>{interview.pages}</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-purple-600">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="24" height="24" rx="5" fill="#F3E8FF" />
                      <path d="M12 6V18M12 6L7 11M12 6L17 11" stroke="#9333EA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-md text-sm">
                    {interview.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        );

      case "progress":
        return (
          <div className="space-y-4">
            {progressData.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4">
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        );

      case "trends":
        return (
          <div className="space-y-4">
            {trendsData.map((trend, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4">
                <p>{trend.text}</p>
              </div>
            ))}
          </div>
        );

      case "salary":
        return (
          <div className="space-y-4">
            {salaryData.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4">
                <p>{item.title} - {item.salary}</p>
              </div>
            ))}
          </div>
        );

      case "resumeGenerator":
        return (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-6">CV Generator</h2>
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-[#3AADE1]"
                />
              </div>
              
              <button
                className="w-full py-2 bg-gray-200 text-gray-500 rounded-md"
              >
                Date of Birth
              </button>
              
              <div>
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-[#3AADE1]"
                />
              </div>
              
              <div>
                <input
                  type="text"
                  placeholder="Education"
                  className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-[#3AADE1]"
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-[#3AADE1]"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-[#3AADE1]"
                />
              </div>
              
              <button
                className="w-full py-3 bg-[#3AADE1] text-white rounded-md font-medium"
              >
                Generate CV
              </button>
            </div>
          </div>
        );

      case "resumeExtraction":
        return (
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h2 className="text-xl font-bold mb-6">CV Extractor</h2>
            <p className="mb-4">Attach Your CV Here!</p>
            <button className="w-full py-3 bg-[#3AADE1] text-white rounded-md font-medium">
              Upload
            </button>
          </div>
        );

      default:
        return (
          <div className="text-center py-12">
            <p>Select a section from above</p>
          </div>
        );
    }
  };

  const menuItems = [
    { id: 1, title: "Courses For You", tab: "courses" },
    { id: 2, title: "Jobs for You", tab: "jobs" },
    { id: 3, title: "Exam Helper", tab: "examHelper" },
    { id: 4, title: "Mock Interview", tab: "mockInterview" },
    { id: 5, title: "Sample Questions", tab: "sampleQuestions" },
    { id: 6, title: "My Progress", tab: "progress" },
    { id: 7, title: "Industry Trends", tab: "trends" },
    { id: 8, title: "Salary Compare", tab: "salary" },
    { id: 9, title: "Resume Generator", tab: "resumeGenerator" },
    { id: 10, title: "Resume Extraction", tab: "resumeExtraction" },
  ];

  const handleGridItemClick = (tab: string) => {
    setActiveTab(tab);
    setShowGrid(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#d4d3d3] py-3 px-4 flex justify-between items-center z-10 shadow-md">
        <button onClick={() => setShowGrid(true)} className="flex items-center">
          <img 
            src={logo} 
            alt="DISHA Logo" 
            className="h-8 w-auto" 
          />
        </button>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-800">Karthik</span>
          <Link to="/profile-setup" className="w-9 h-9 rounded-full bg-[#4CA1E2] flex items-center justify-center overflow-hidden border-2 border-white">
            <img 
              src="/api/placeholder/40/40" 
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-16 px-4 pb-4">
        {showGrid ? (
          <>
            {/* Grid View */}
            <div className="relative rounded-xl overflow-hidden mb-6 h-48 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
                alt="Job Fair Banner"
                className="w-full h-full object-cover absolute inset-0"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30" />
              <div className="relative h-full flex flex-col justify-end p-4 text-white">
                <h2 className="text-xl font-bold mb-1 drop-shadow-md">Job Fair Oct 20-22</h2>
                <p className="text-sm opacity-90 drop-shadow-md">
                  Discover opportunities with top companies
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleGridItemClick(item.tab)}
                  className="flex items-center justify-center p-4 h-20 rounded-xl bg-[#3AADE1] shadow-sm hover:shadow-md transition-shadow duration-200 active:scale-95"
                >
                  <span className="text-sm font-medium text-white text-center">
                    {item.title}
                  </span>
                </button>
              ))}
            </div>
          </>
        ) : (
          /* Tab Content View */
          <>
            <div className="bg-[#3AADE1] py-3 px-4 text-white text-center font-medium text-lg">
              {activeTab === "courses" && "Courses For You"}
              {activeTab === "jobs" && "Jobs For You"}
              {activeTab === "examHelper" && "Exam Helper"}
              {activeTab === "mockInterview" && "Mock Interview Questions"}
              {activeTab === "sampleQuestions" && "Sample Questions"}
              {activeTab === "progress" && "My Progress"}
              {activeTab === "trends" && "Industry Trends"}
              {activeTab === "salary" && "Salary Compare"}
              {activeTab === "resumeGenerator" && "CV Generator"}
              {activeTab === "resumeExtraction" && "CV Extractor"}
            </div>

            <div className="p-4">
              {renderContent()}
            </div>
          </>
        )}
      </main>

      {/* Bottom Navigation (Only in tab view) */}
      {!showGrid && (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 z-10">
          <div className="grid grid-cols-5 gap-1">
            <button
              onClick={() => setActiveTab("courses")}
              className={`flex flex-col items-center justify-center p-1 ${activeTab === "courses" ? "text-[#3AADE1]" : "text-gray-500"}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className="text-xs">Learn</span>
            </button>
            
            <button
              onClick={() => setActiveTab("jobs")}
              className={`flex flex-col items-center justify-center p-1 ${activeTab === "jobs" ? "text-[#3AADE1]" : "text-gray-500"}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-xs">Jobs</span>
            </button>
            
            <button
              onClick={() => setActiveTab("examHelper")}
              className={`flex flex-col items-center justify-center p-1 ${activeTab === "examHelper" ? "text-[#3AADE1]" : "text-gray-500"}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span className="text-xs">Exams</span>
            </button>
            
            <button
              onClick={() => setActiveTab("trends")}
              className={`flex flex-col items-center justify-center p-1 ${activeTab === "trends" ? "text-[#3AADE1]" : "text-gray-500"}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span className="text-xs">Trends</span>
            </button>
            
            <button
              onClick={() => setActiveTab("resumeGenerator")}
              className={`flex flex-col items-center justify-center p-1 ${activeTab === "resumeGenerator" ? "text-[#3AADE1]" : "text-gray-500"}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-xs">Resume</span>
            </button>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Dashboard;