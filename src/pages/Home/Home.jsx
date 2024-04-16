import { Helmet } from "react-helmet-async";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";


const Home = () => {
    return (
        <div>
          <Helmet>
            <title>Nexus Commercial - Home</title>
          </Helmet>
          <Navbar></Navbar>
          <h2 className="text-5xl">Its home  </h2>
          <Footer></Footer>
        </div>
    );
};

export default Home;