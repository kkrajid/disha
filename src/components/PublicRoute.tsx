import { JSX } from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const accessToken = localStorage.getItem('access_token');
  
  if (accessToken) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default PublicRoute;