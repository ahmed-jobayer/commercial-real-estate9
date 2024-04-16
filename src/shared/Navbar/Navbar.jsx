import { Link, NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  const links = (
    <>
      <li className=" btn mr-1 p-2 md:mr-3">
        {" "}
        <NavLink to="/">Home</NavLink>{" "}
      </li>
      <li className="btn p-2">
        {" "}
        <NavLink to="/updateProfile">Update Profile</NavLink>{" "}
      </li>
    </>
  );

  return (
    <nav className="container mx-auto">
      <div className="navbar-start w-full text-center my-4">
        <Link to='/'>Nexus Commercial</Link>
      </div>
      <div className=" bg-base-100 flex justify-between items-center mb-4">
        <div className=" ">
          <ul className=" flex px-1">{links}</ul>
        </div>
        <div className="">
          <li className="btn mr-1 p-2 md:p-4 md:mr-3">
            <NavLink to="/login">Login</NavLink>
          </li>
          <li className="btn p-2 md:p-4">
            <NavLink to="/register">Register</NavLink>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
