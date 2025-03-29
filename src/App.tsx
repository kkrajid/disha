import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Register from "./pages/Register"
import ProfileSetup from "./pages/ProfileSetup"
import Dashboard from "./pages/Dashboard"
import ForgotPassword from "./pages/ForgotPassword"



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile-setup" element={<ProfileSetup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* 
        <Route path="/profile-setup" element={<ProfileSetup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/exam-helper" element={<ExamHelper />} />
        <Route path="/loading" element={<Loading />} /> */}
      </Routes>
    </Router>
  )
}

export default App

