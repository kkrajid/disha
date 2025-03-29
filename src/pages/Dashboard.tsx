import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState("");
  const [showGrid, setShowGrid] = useState(true);

  // Mock data for different sections
  const coursesData = [
    { title: "Digital-Marketing", duration: "6 Months", provider: "Google-Certification", fee: "50000", buttonText: "Enroll Now" },
    { title: "Event-Planning", duration: "12 Months", provider: "Skillshare", fee: "40000", buttonText: "Enroll Now" },
    { title: "Public-Health", duration: "24 Months", provider: "Johns-Hopkins", fee: "65000", buttonText: "Enroll Now" },
  ];

  const jobsData = [
    { title: "Illustrator", experience: "3 Years", provider: "Adobe", salary: "55000", buttonText: "Apply Now" },
    { title: "Tax-Consultant", experience: "5 Years", provider: "EY-India", salary: "70000", buttonText: "Apply Now" },
    { title: "Waiter", experience: "2 Years", provider: "ITC-Hotels", salary: "35000", buttonText: "Apply Now" },
  ];

  const examHelperData = [
    { title: "UPSC", year: "2025 Paper", university: "JNU", pages: "5", buttonText: "Download" },
    { title: "JEE", year: "2025 Paper", university: "IIT", pages: "5", buttonText: "Download" },
    { title: "UPSC", year: "2025 Paper", university: "JNU", pages: "4", buttonText: "Download" },
  ];

  const mockInterviewData = [
    { title: "AI-Developer", year: "2025 Q & A", provider: "Incralabs", pages: "5", buttonText: "Download" },
    { title: "AI-Developer", year: "2025 Q & A", provider: "Incralabs", pages: "5", buttonText: "Download" },
    { title: "AI-Developer", year: "2025 Q & A", provider: "Incralabs", pages: "5", buttonText: "Download" },
  ];

  const sampleQuestionsData = [
    { question: "What is the capital of France?", answer: "Paris", category: "General Knowledge" },
    { question: "What is 2 + 2?", answer: "4", category: "Mathematics" },
    { question: "Who wrote 'To Kill a Mockingbird'?", answer: "Harper Lee", category: "Literature" },
  ];

  const progressData = [
    { text: "UPSC Question Bank Downloaded 3-21-2025" },
    { text: "UPSC Question Bank Downloaded 3-21-2025" },
    { text: "UPSC Question Bank Downloaded 3-21-2025" },
    { text: "UPSC Question Bank Downloaded 3-21-2025" },
  ];

  const trendsData = [
    { text: "Nvidia Decides to hire new employees in india for their new warehouse" },
    { text: "China Launched AI ChatBot DeepSeek which crossed the popularity of chatgpt" },
    { text: "Nvidia Decides to hire new employees in india for their new warehouse" },
    { text: "China Launched AI ChatBot DeepSeek which crossed the popularity of chatgpt" },
  ];

  const salaryData = [
    { title: "AI Engineer", salary: "50000 per Month" },
    { title: "BMS Engineer", salary: "25000 per month" },
    { title: "AI Engineer", salary: "50000 per Month" },
    { title: "AI Engineer", salary: "50000 per Month" },
  ];

  const renderContent = () => {
    const renderCard = (item: any, buttonText: string) => (
      <div className="bg-gray-50 rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
        {Object.entries(item).map(([key, value]) =>
          key !== "buttonText" && (
            <p key={key} className="text-sm sm:text-base text-gray-700 mb-2">
              <span className="font-medium capitalize">{key}: </span>{value}
            </p>
          )
        )}
        <button className="w-full mt-3 py-2 bg-[#3AADE1] text-white rounded-full font-medium text-sm sm:text-base">
          {buttonText}
        </button>
      </div>
    );

    const renderSampleQuestionCard = (item: any) => (
      <div className="bg-gray-50 rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
        <p className="text-sm sm:text-base text-gray-700 mb-2">
          <span className="font-medium">Question: </span>{item.question}
        </p>
        <p className="text-sm sm:text-base text-gray-700 mb-2">
          <span className="font-medium">Answer: </span>{item.answer}
        </p>
        <p className="text-sm sm:text-base text-gray-700 mb-2">
          <span className="font-medium">Category: </span>{item.category}
        </p>
      </div>
    );

    switch (activeTab) {
      case "courses":
        return <div className="space-y-4">{coursesData.map((course, i) => renderCard(course, course.buttonText))}</div>;
      case "jobs":
        return <div className="space-y-4">{jobsData.map((job, i) => renderCard(job, job.buttonText))}</div>;
      case "examHelper":
        return <div className="space-y-4">{examHelperData.map((exam, i) => renderCard(exam, exam.buttonText))}</div>;
      case "mockInterview":
        return <div className="space-y-4">{mockInterviewData.map((interview, i) => renderCard(interview, interview.buttonText))}</div>;
      case "sampleQuestions":
        return <div className="space-y-4">{sampleQuestionsData.map((question, i) => renderSampleQuestionCard(question))}</div>;
      case "progress":
        return (
          <div className="space-y-4">
            {progressData.map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
                <p className="text-sm sm:text-base text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        );
      case "trends":
        return (
          <div className="space-y-4">
            {trendsData.map((trend, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
                <p className="text-sm sm:text-base text-gray-700">{trend.text}</p>
              </div>
            ))}
          </div>
        );
      case "salary":
        return (
          <div className="space-y-4">
            {salaryData.map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
                <p className="text-sm sm:text-base text-gray-700">{item.title} - {item.salary}</p>
              </div>
            ))}
          </div>
        );
      case "resumeGenerator":
        return (
          <div className="bg-gray-50 rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
            <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">CV Generator</h2>
            <div className="space-y-4">
              {["Name", "Date of Birth", "Address", "Education", "Phone", "Email"].map((field) => (
                <input
                  key={field}
                  type={field === "Phone" ? "tel" : field === "Email" ? "email" : field === "Date of Birth" ? "date" : "text"}
                  placeholder={field}
                  className="w-full bg-transparent border-b border-blue-200 py-2 focus:outline-none text-base text-gray-700"
                />
              ))}
              <button className="w-full py-3 bg-[#3AADE1] text-white rounded-full font-medium text-base sm:text-lg">
                Generate CV
              </button>
            </div>
          </div>
        );
      case "resumeExtraction":
        return (
          <div className="bg-gray-50 rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200 text-center">
            <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">CV Extractor</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4">Attach Your CV Here!</p>
            <button className="w-full py-3 bg-[#3AADE1] text-white rounded-full font-medium text-base sm:text-lg">
              Upload
            </button>
          </div>
        );
      default:
        return null;
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

  const handleBack = () => {
    setShowGrid(true);
    setActiveTab(""); // Reset activeTab to ensure a fresh start
  };

  // Navigation icons
  const navIcons = {
    courses: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    jobs: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    examHelper: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
    trends: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    resumeGenerator: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
  };

  // Navigation items for bottom bar
  const navigationItems = [
    { tab: "courses", icon: navIcons.courses, label: "Learn" },
    { tab: "jobs", icon: navIcons.jobs, label: "Jobs" },
    { tab: "examHelper", icon: navIcons.examHelper, label: "Exams" },
    { tab: "trends", icon: navIcons.trends, label: "Trends" },
    { tab: "resumeGenerator", icon: navIcons.resumeGenerator, label: "Resume" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white px-4 sm:px-6">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white py-3 px-4 sm:px-6 flex justify-between items-center z-10 shadow-sm border-b border-gray-200">
        <button onClick={() => setShowGrid(true)} className="flex items-center">
          <img src={logo} alt="DISHA Logo" className="h-8 sm:h-10 w-auto" />
        </button>
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="text-sm sm:text-base font-medium text-gray-800">Karthik</span>
          <Link
            to="/profile-setup"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#4CA1E2] flex items-center justify-center overflow-hidden border-2 border-white"
          >
            {/* Using a placeholder div instead of an external image */}
            <div className="w-full h-full bg-[#4CA1E2] flex items-center justify-center text-white font-bold">K</div>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-16 sm:pt-20 pb-16">
        <div className="w-full max-w-md mx-auto">
          {showGrid ? (
            <>
              {/* Banner */}
              <div className="relative rounded-xl overflow-hidden mb-6 h-48 shadow-lg">
                {/* Using a styled div instead of an external image */}
                <div className="w-full h-full bg-gradient-to-r from-blue-400 to-blue-600 absolute inset-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30" />
                <div className="relative h-full flex flex-col justify-end p-4 text-white">
                  <h2 className="text-lg sm:text-xl font-bold mb-1 drop-shadow-md">Job Fair Oct 20-22</h2>
                  <p className="text-sm sm:text-base opacity-90 drop-shadow-md">
                    Discover opportunities with top companies
                  </p>
                </div>
              </div>

              {/* Grid View */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleGridItemClick(item.tab)}
                    className="flex items-center justify-center p-4 h-20 rounded-xl bg-[#3AADE1] shadow-sm hover:shadow-md transition-shadow duration-200 active:scale-95"
                    aria-label={`Go to ${item.title}`}
                  >
                    <span className="text-sm sm:text-base font-medium text-white text-center">
                      {item.title}
                    </span>
                  </button>
                ))}
              </div>
            </>
          ) : (
            /* Content View */
            <>
              {/* Back Button */}
              <div className="absolute top-16 sm:top-20 left-4 sm:left-6">
                <button
                  onClick={handleBack}
                  className="bg-gray-700 text-white rounded-full p-2 sm:p-3 hover:bg-gray-800 transition-colors"
                  aria-label="Go back to dashboard grid"
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
              </div>

              {/* Content */}
              <div className="pt-12 sm:pt-16">{renderContent()}</div>
            </>
          )}
        </div>
      </main>

      {/* Bottom Navigation (Only in content view) */}
      {!showGrid && (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 sm:px-6 z-10 shadow-sm">
          <div className="max-w-md mx-auto grid grid-cols-5 gap-1 sm:gap-2">
            {navigationItems.map((item) => (
              <button
                key={item.tab}
                onClick={() => setActiveTab(item.tab)}
                className={`flex flex-col items-center justify-center p-1 sm:p-2 ${
                  activeTab === item.tab ? "text-[#3AADE1]" : "text-gray-500"
                }`}
                aria-label={`Go to ${item.label} section`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
                <span className="text-xs sm:text-sm">{item.label}</span>
              </button>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
};

export default Dashboard;