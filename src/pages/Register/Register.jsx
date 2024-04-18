import { Helmet } from "react-helmet-async";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

const Register = () => {

  // const [registerSuccess, setRegisterSuccess] = useState()
  // const [registerError, setRegisterError] = useState()
  const [togglePass, setTogglePass] = useState(false)


  const {createUser} = useContext (AuthContext);

  const handleRegister = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name')
    const email = form.get('email')
    const photo = form.get('photo')
    const password = form.get('password')
    console.log(name, email, photo, password)

    // reset error and success
    // setRegisterSuccess('');
    // setRegisterError('');

    // password validation
    if (password.length < 6) {
      alert("Password should be at least 6 characters or longer");
      return;
    }

    else if(!/[A-Z]/.test(password)){
        alert('Your password should have at lest one uppercase characters')
        return
    }
    else if(!/[a-z]/.test(password)){
        alert('Your password should have at lest one lowercase characters')
        return
    }
    
   

    // create User

    createUser(email, password)
    .then(result => {
      console.log(result.user)
      // setRegisterSuccess('User registered successfully');
      alert('User registered successfully');
    })
    .catch(error => {
      console.error(error)
      // setRegisterError(error.message)
      alert(error.message)
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
                <div className="relative">
           <input
              type={ togglePass? "text" : "password"}
              name="password"
              placeholder="password"
              className="input input-bordered w-full"
              required
              />
              <span 
              className="absolute top-1/3 right-2 cursor-pointer"
              onClick={()=> setTogglePass(!togglePass)}>
                {
                    togglePass? <BsFillEyeSlashFill></BsFillEyeSlashFill> : <BsFillEyeFill></BsFillEyeFill>
                }
              </span>
           </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>

            {/* <div className="text-center px-8 pb-4">
          {registerSuccess && <p className="text-green-500 ">{registerSuccess}</p>}
          {registerError && <p className="text-red-500">{registerError}</p>}
        </div> */}
           
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
