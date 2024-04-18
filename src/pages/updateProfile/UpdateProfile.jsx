import { Helmet } from "react-helmet-async";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link } from "react-router-dom";


const UpdateProfile = () => {

    const {user} = useContext(AuthContext)
    const {email, displayName, photoURL} = user

    console.log(user)

    return (
        <div>
            <div className="container mx-auto min-h-screen">
            <Helmet><title>Nexus Commercial - Update Profile</title></Helmet>
            <Navbar></Navbar>
            <div className=" flex flex-col items-center mt-16 gap-4 ">
                <img className="rounded-xl max-w-40" src={photoURL} alt="" />
                <h3>{email}</h3>
                <h1>{displayName}</h1>
                <Link to='/editProfile'><button className="btn">Edit Profile</button></Link>
            </div>
        </div>
            <Footer></Footer>
        </div>
    );
};

export default UpdateProfile;