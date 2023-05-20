import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Authprovider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div className="navbar h-20 mb-5 rounded-2xl bg-gray-200">
      <div className="navbar-start">
        <div className="dropdown" >
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box bold w-52 bg-yellow-400"

          >
            {user && (
              <>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "bg-indigo-500" : "default"
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "bg-indigo-500" : "default"
                    }
                    to="/mytoys"
                  >
                    My Toys
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "bg-indigo-500" : "default"
                    }
                    to="/addToy"
                  >
                    Add a Toy
                  </NavLink>
                </li>
              </>
            )}
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-indigo-500" : "default"
                }
                to="/blogs"
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-indigo-500" : "default"
                }
                to="/alltoys"
              >
                All Toys
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to="/">
          <img
            className="w-36"
            src="https://i.ibb.co/YPK2VJD/Screenshot-2023-05-19-224137-removebg-preview.png"
            alt=""
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 bold">
          {user && (
            <>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "bg-indigo-500" : "default"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "bg-indigo-500" : "default"
                  }
                  to="/mytoys"
                >
                  My Toys
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "bg-indigo-500" : "default"
                  }
                  to="/addToy"
                >
                  Add a Toy
                </NavLink>
              </li>
            </>
          )}
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-indigo-500" : "default"
              }
              to="/alltoys"
            >
              All Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-indigo-500" : "default"
              }
              to="/blogs"
            >
              Blogs
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        {user && (
          <div
            className="tooltip  tooltip-left cursor-pointer"
            data-tip={user?.displayName || "no name found"}
          >
            <div className="avatar">
              <div className="w-10 me-2 rounded-full ring-2 ring-offset-base-100 ring-offset-2 ">
                <img src={user?.photoURL || " "} />
              </div>
            </div>
          </div>
        )}
        {user ? (
          <button
            onClick={handleLogOut}
            className="btn bg-indigo-500 border-none"
          >
            Logout
          </button>
        ) : (
          <Link to="/login" className="btn bg-indigo-500 border-none">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
