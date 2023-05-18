import React, { useContext } from 'react';
import { AuthContext } from '../Authprovider/AuthProvider';
import { Navigate } from 'react-router-dom';
import './Spinner.css'
const PrivateROute = ({ children }) => {
    
    const {user,loading}= useContext(AuthContext)
    if (loading) {
        return (
          <div className='spinner-container'>
            <div className="spinner"></div>
          </div>
        );
    }
    if (user) {
        return children
    }
    return (
        <Navigate to={'/login'}></Navigate>
    );
};

export default PrivateROute;