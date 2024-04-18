import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";

const Brocker = ({ brocker }) => {
  const { loading } = useContext(AuthContext);

  if (!brocker) {
    return loading;
  }

  return (
    <div className="flex  justify-center">
      <div className="card md:card-side bg-base-100 shadow-xl max-w-[1000px] items-center m-2">
        <figure className="w-2/3">
          <img
            className="rounded-md w-full"
            // src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            src={brocker.image}
            alt={brocker.name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{brocker.name}</h2>
          <p>{brocker.description}</p>
          
        </div>
      </div>
    </div>
  );
};

export default Brocker;
