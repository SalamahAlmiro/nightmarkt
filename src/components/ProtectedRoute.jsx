import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth }  from '../context/AuthContext';


const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if ( !isAuthenticated) {
      navigate("/login", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) return null;

  return children;
};

export default ProtectedRoute;