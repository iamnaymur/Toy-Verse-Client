import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Authprovider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(()=>{})
    .catch(error=>console.log(error))
  }
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {user && (
              <>
                <li>
                  <Link to='/'>Home</Link>
                </li>

                <li>
                  <a>All Toys</a>
                </li>
                <li>
                  <a>My Toys</a>
                </li>
                <li>
                  <a>Add a Toy</a>
                </li>
              </>
            )}
            <li>
              <a>Blogs</a>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Toy VERSE
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {user && (
            <>
              <li>
                <Link to='/'>Home</Link>
              </li>

              <li>
                <a>All Toys</a>
              </li>
              <li>
                <a>My Toys</a>
              </li>
              <li>
                <a>Add a Toy</a>
              </li>
            </>
          )}
          <li>
            <a>Blogs</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        {user && (
          <div className="tooltip  tooltip-left" data-tip={user?.displayName || 'no name found'}>
            <div className="avatar">
              <div className="w-10 me-2 rounded-full ring-2 ring-offset-base-100 ring-offset-2 ">
                <img src={user?.photoURL || " "} />
              </div>
            </div>
          </div>
        )}
        {user ? (
          <button onClick={handleLogOut} className="btn">
            Logout
          </button>
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
