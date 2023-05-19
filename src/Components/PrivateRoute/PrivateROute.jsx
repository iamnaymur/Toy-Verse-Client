import React, { useContext } from "react";
import { AuthContext } from "../Authprovider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import "./Spinner.css";
import { toast } from "react-toastify";
const PrivateROute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    );
  }
  if (user) {
    return children;
  } else {
    toast.error("login first to go through");
  }

  return <Navigate state={{ from: location }} replace to={"/login"}></Navigate>;
};

export default PrivateROute;
