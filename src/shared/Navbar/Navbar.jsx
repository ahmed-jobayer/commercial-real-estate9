import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li className="mr-3">
        {" "}
        <NavLink to="/">Home</NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink to="/updateProfile">Update Profile</NavLink>{" "}
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link to='/' className=" text-xl">Nexus Commercial</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <li className="btn mr-3">
          <NavLink to="/login">Login</NavLink>
        </li>
        <li className="btn">
          <NavLink to="/register">Register</NavLink>
        </li>
      </div>
    </div>
  );
};

export default Navbar;