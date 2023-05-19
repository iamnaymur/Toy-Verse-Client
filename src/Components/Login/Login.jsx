import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Authprovider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);

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
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <>
      <p className="text-center text-3xl">Sign in here now</p>
      <div className="w-full flex justify-center mt-20">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mb-20">
          <form onSubmit={handleLogin} className="card-body">
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
                className="btn mt-5"
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
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
