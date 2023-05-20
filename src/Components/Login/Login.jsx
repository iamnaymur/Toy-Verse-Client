import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Authprovider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import DynamicPageTitle from "../DynamicPageTitle/DynamicPageTitle";

const Login = () => {
  
  const { signIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";




  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    signIn(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        toast.success("User log in successfully");
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((userCredentials) => {
        const user = userCredentials.user;
        toast.success("User signed in successfully");
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <>
      <DynamicPageTitle title="Login" />
      <p className="text-center text-3xl mt-10 bold">Login here now</p>
      <div>
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co/R2sx4sP/png-transparent-spider-man-in-television-cartoon-drawing-anya-corazon-spider-man-comics-heroes-super.png"
            alt=""
          />
        </div>
        <div className="mt-20 ">
          <div className="p-8 w-1/3 mx-auto shadow-2xl bg-base-100 mb-20">
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control border-b-4 ">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  className="btn mt-5 bg-red-500 border-none"
                >
                  <FaGoogle className="me-2" /> Sign In With Google
                </button>
                <label className="label-text-alt mt-2 font-semibold">
                  You are new to ToyVerse?
                  <Link
                    to="/signup"
                    href="#"
                    className="ms-2 text-blue-800 bold label-text-alt link link-hover"
                  >
                    Register here.
                  </Link>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn bg-indigo-500">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
