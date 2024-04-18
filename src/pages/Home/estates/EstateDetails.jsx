import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../../shared/Navbar/Navbar";
import { GoDot } from "react-icons/go";
import Footer from "../../../shared/Footer/Footer";


const EstateDetails = () => {
    const estates = useLoaderData();
 const {id} = useParams();
 const estate = estates.find((estate) => estate.id === parseInt(id));
 const {
    estate_title,
    image,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
} = estate
  return (
    <div className="container mx-auto m-4">
        <Navbar></Navbar>
      
      <div className="card  lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
          className="rounded-2xl"
            src={image}
            alt="Album"
          />
        </figure>
        <div className="flex flex-col  ml-4 gap-4">
          <h2 className="card-title">{estate_title}</h2>
          <p><span className="text-xl">Property Type</span>: {segment_name}</p>
          <div>
            <p className="text-xl mb-2">Description:</p>
            <p>{description}</p>
          </div>
          <div className="flex justify-between my-2">
            <p><span className="text-xl">Price</span>: ${price}</p>
            <p className="text-end">For {status}</p>
          </div>
          <div className="flex justify-between my-2">
            <p><span className="text-xl">Area:</span> ${area}</p>
            <p className="text-end"><span className="text-xl">Location:</span> {location}</p>
          </div>
          <div>
            <p className="mb-2"><span className="text-xl">Facilities:</span></p>
            <ul>
                {
                   facilities.map((facilitie, index) =><li 
                   className="flex items-center" 
                   key={index}><GoDot />
                   {facilitie}</li> ) 
                }
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center m-4">
        <Link to='/brockers'><button className="btn ">Contact Brockers</button></Link>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default EstateDetails;
