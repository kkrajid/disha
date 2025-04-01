import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const accessToken = localStorage.getItem("access_token");

  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />; // This allows child routes to render properly
};

export default ProtectedRoute;



// src/components/PublicRoute.tsx


// src/pages/Login.tsx
