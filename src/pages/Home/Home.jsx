import { Helmet } from "react-helmet-async";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";
import Estates from "./estates/Estates";
// import HomeSlider from "./slider/HomeSlider";
import { useLoaderData } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import SwiperSlider from "./slider/SwiperSlider";





const Home = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  })
  const estates = useLoaderData();
  console.log(estates)
    return (
        <div>
          <Helmet>
            <title>Nexus Commercial - Home</title>
          </Helmet>
          <div className="container mx-auto">
          <Navbar></Navbar>
          {/* <HomeSlider></HomeSlider> */}
          <SwiperSlider></SwiperSlider>
          <div  className="grid gap-6 container mx-auto my-4 p-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {
            estates.map(estate => <Estates
            
            key={estate.id}
            estate = {estate}
            ></Estates> )
          }
          </div>
          </div>
          <Footer></Footer>
        </div>
    );
};

export default Home;