import { Helmet } from "react-helmet-async";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";
import Estates from "./estates/Estates";
import HomeSlider from "./slider/HomeSlider";




const Home = () => {
    return (
        <div>
          <Helmet>
            <title>Nexus Commercial - Home</title>
          </Helmet>
          <div className="container mx-auto">
          <Navbar></Navbar>
          <HomeSlider></HomeSlider>
          <Estates></Estates>
          </div>
          <Footer></Footer>
        </div>
    );
};

export default Home;