import { Helmet } from "react-helmet-async";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Register = () => {

  const {createUser} = useContext (AuthContext);

  const handleRegister = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name')
    const email = form.get('email')
    const photo = form.get('photo')
    const password = form.get('password')
    console.log(name, email, photo, password)
    // create User

    createUser(email, password)
    .then(result => {
      console.log(result.user)
    })
    .catch(error => {
      console.error(error)
    })
  }

  return (
    
    <div>
      <div className="container mx-auto">
        <Helmet>
          <title>Nexus Commercial - Register</title>
        </Helmet>
        <Navbar></Navbar>
        <div className="hero min-h-screen bg-base-100">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
           
            <p className="block text-center mb-4">
              Already have an account?{" "}
              <Link className="font-bold" to="/login">
                Login Now!
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Register;
