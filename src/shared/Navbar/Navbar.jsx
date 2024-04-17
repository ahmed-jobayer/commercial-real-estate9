import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then().catch();
  };

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
    <div>
      <nav className="container mx-auto ">
        <div className="navbar-start w-full text-center my-4">
          <Link to="/">Nexus Commercial</Link>
        </div>
        <div className=" bg-base-100 flex justify-between items-center mb-4">
          <div className=" ">
            <ul className=" flex px-1">{links}</ul>
          </div>
          <div className="">
            {user ? (
              <div className="flex gap-1 items-center">
                <div className="tooltip w-9 " data-tip={user.displayName}>
                  <img
                    className="rounded-2xl"
                    alt={user.displayName}
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>

                <li
                  onClick={handleLogOut}
                  className="btn mr-1 p-2 md:p-4 md:mr-3"
                >
                  <NavLink to="">Log Out</NavLink>
                </li>
              </div>
            ) : (
              <li className="btn mr-1 p-2 md:p-4 md:mr-3">
                <NavLink to="/login">Login</NavLink>
              </li>
            )}
            {/* <li className="btn p-2 md:p-4">
              <NavLink to="/register">Register</NavLink>
            </li> */}
          </div>
        </div>
      </nav>

      {/* experiment */}
    </div>
  );
};

export default Navbar;
