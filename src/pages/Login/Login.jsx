import { Helmet } from "react-helmet-async";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";


const Login = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Helmet><title>Nexus Commercial - Login</title></Helmet>
            i am login
            <Footer></Footer>
        </div>
    );
};

export default Login;