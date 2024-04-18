import { Link } from "react-router-dom";

const Estates = ({ estate }) => {
  const { estate_title, image, segment_name, status, price, id } = estate;

  return (
    <div data-aos = "fade-top" className=" ">
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt={segment_name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{estate_title}</h2>
          <p>Property Type: {segment_name}</p>
          <div className="flex justify-between my-2">
            <p>Price: ${price}</p>
            <p className="text-end">For {status}</p>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/estateDetails/${id}`}>
            <button className="btn ">View Property</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estates;
