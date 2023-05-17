import React, { useContext } from "react";
import { AuthContext } from "../Authprovider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { signUp } = useContext(AuthContext);

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
      })

      .catch((error) => {
        console.log(error.message);
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
    <>
      <div className="text-center mt-10">
        <h1 className="text-3xl">Sign Up here</h1>
        <p className="text-lg">
          Welcome to ToyVerse, your ultimate destination for action figure toys! <br />
          Join our vibrant community of toy enthusiasts by signing up today.
          Gain exclusive <br /> access to the latest releases, limited editions, and
          special offers.
        </p>
      </div>
      <div className="w-full flex justify-center mt-20">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mb-10">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="example@gmail.com"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                name="photo"
                type="text"
                placeholder="Photo url"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <label className="label-text-alt mt-2">
              You already have an account?
              <Link
                to="/login"
                href="#"
                className="ms-2 text-blue-800 bold label-text-alt link link-hover"
              >
                Login here.
              </Link>
            </label>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
