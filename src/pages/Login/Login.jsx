import { Helmet } from "react-helmet-async";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";
import { Link } from "react-router-dom";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Login = () => {

  const {loginUser, googleLogin, githubLogin} = useContext(AuthContext)

  // const [loginSuccess, setLoginSuccess] = useState();
  // const [loginError, setLoginError] = useState();

  const handleLogin = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email')
    const password = form.get('password')
    console.log(email, password)

    // reset error or success
    // setLoginSuccess('');
    // setLoginError('');

   loginUser(email, password)
   .then(result =>{
    console.log(result.user)
    alert('User logged in successfully')
    // setLoginSuccess('User logged in successfully')
   
   })
   .catch(error =>{
    console.error(error)
    alert(error.message)
    // setLoginError(error.message)
   })
  }
// google login

  const handleGoogleLogin = e =>{
    e.preventDefault()
    googleLogin()
    .then(result =>{
      console.log(result.user)
      alert('User logged in successfully')
      // setLoginSuccess('User logged in successfully')
     
     })
     .catch(error =>{
      console.error(error)
      alert(error.message)
      // setLoginError(error.message)
     })
    
  }

  // github login

  const handleGitHubLogin = e =>{
    e.preventDefault()
    githubLogin()
    .then(result =>{
      console.log(result.user)
      alert('User logged in successfully')
      // setLoginSuccess('User logged in successfully')
     
     })
     .catch(error =>{
      console.error(error)
      alert(error.message)
      // setLoginError(error.message)
     })
    
  }

  return (
    <div>
      <div className="container mx-auto">
        <Navbar></Navbar>
        <Helmet>
          <title>Nexus Commercial - Login</title>
        </Helmet>
        <div className="hero min-h-screen bg-base-100">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
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
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
                {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            {/* <div className="text-center px-8 pb-4">
          {loginError &&  <p className="text-red-500">{loginError}</p>}
          {loginSuccess && <p className="text-green-500 ">{loginSuccess}</p>}
        </div> */}
            <div className="">
              <p className="block text-center">or</p>
              <div className="my-4 flex flex-col justify-center gap-3">
                <button onClick={handleGoogleLogin} className="flex items-center justify-center gap-3">
                  <AiFillGoogleCircle className="text-4xl" /> Continue With
                  Google
                </button>
                <button onClick={handleGitHubLogin} className="flex items-center justify-center gap-3">
                  <FaGithub className="text-3xl" /> Continue With GitHub
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
