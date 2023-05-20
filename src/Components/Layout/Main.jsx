import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-286px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
      ></ToastContainer>
    </div>
  );
};

export default Main;
