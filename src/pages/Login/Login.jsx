import { Helmet } from "react-helmet-async";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";
import { Link } from "react-router-dom";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  return (
    <div>
      <div className="container mx-auto">
        <Navbar></Navbar>
        <Helmet>
          <title>Nexus Commercial - Login</title>
        </Helmet>
        <div className="hero min-h-screen bg-base-100">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
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
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="">
              <p className="block text-center">or</p>
              <div className="my-4 flex flex-col justify-center gap-3">
                <button className="flex items-center justify-center gap-3">
                  <AiFillGoogleCircle className="text-4xl" /> Continue With
                  Google
                </button>
                <button className="flex items-center justify-center gap-3">
                  <FaGithub className="text-3xl" /> Continue With Google
                </button>
              </div>
            </div>
            <p className="block text-center mb-4">
              New here?{" "}
              <Link className="font-bold" to="/register">
                Register Now!
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;
