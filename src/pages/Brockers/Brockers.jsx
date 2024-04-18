import { useLoaderData } from "react-router-dom";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import Brocker from "./Broker/Brocker";



const Brockers = () => {
    const brockers = useLoaderData()
    console.log(brockers)
  return (
    <div>
      <div className="container mx-auto">
        <Navbar></Navbar>
       <Brocker></Brocker>
        <div className=" gap-4 grid ">
        {
                   brockers.map((brocker, index) =><Brocker
                   key={index}
                   brocker={brocker}
                   ></Brocker> ) 
                }
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Brockers;
