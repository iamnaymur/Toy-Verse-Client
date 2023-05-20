import React, { useContext } from "react";
import { AuthContext } from "../Authprovider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import DynamicPageTitle from "../DynamicPageTitle/DynamicPageTitle";

const SignUp = () => {
  const { signUp } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    signUp(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        updateData(user, name, photo);
        console.log(user);
        toast.success("User account created successfully");
        form.reset();
        navigate(from, { replace: true });
      })

      .catch((error) => {
        toast.error(error.message);
      });

    const updateData = (user, name, photo) => {
      updateProfile(user, {
        displayName: name,
        photoURL: photo,
      })
        .then(() => {
          console.log("updated profile successfully");
        })
        .catch((error) => {
          console.log(error.message);
        });
    };
  };
  return (
    <div className="container mx-auto mt-10">
      <DynamicPageTitle title="SignUp" />
      <h1 className="text-3xl font-bold mb-4">Sign Up Here</h1>
      <p className="text-lg">
        Welcome to ToyVerse, your ultimate destination for action figure toys!
        Join our vibrant community of toy enthusiasts by signing up today. Gain
        exclusive access to the latest releases, limited editions, and special
        offers. He is watching you behind,sign up the form fast!
      </p>

      <div className="flex justify-center mt-10">
        <div className="relative w-3/6  bg-white rounded-lg shadow-xl">
          <img
            src="https://i.ibb.co/fny1SvV/Batman-BTAS.webp"
            alt="Batman"
            className="absolute   object-contain  h-full w-full  rounded-t-lg opacity-75"
          />
          <div className="p-6 relative ">
            <form onSubmit={handleSignUp}>
              <div className="mb-4">
                <label htmlFor="name" className="text-lg font-bold">
                  Name
                </label>
                <input
                  required
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-opacity-75"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="text-lg font-bold">
                  Email
                </label>
                <input
                  required
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-opacity-75"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="photo" className="text-lg font-bold">
                  Photo URL
                </label>
                <input
                  required
                  id="photo"
                  name="photo"
                  type="text"
                  placeholder="Photo URL"
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-opacity-75"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="text-lg font-bold">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-opacity-75"
                />
              </div>
              <p className="text-sm bold text-center">
                Already have an account?{" "}
                <Link
                  to="/login"
                  href="#"
                  className="text-indigo-500 font-bold hover:underline"
                >
                  Login here.
                </Link>
              </p>
              <div className="flex justify-center mt-6">
                <button className="px-4 btn-wide py-2 bg-gray-600 text-white rounded-lg hover:bg-blue-500">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
