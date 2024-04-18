import { useContext } from "react";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import { AuthContext } from "../../providers/AuthProviders";

const EditProfile = () => {

    const { editProfile} = useContext(AuthContext)

    const handleProfileUpdate = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const userName = form.get('name')
        const photo = form.get('photo')
        console.log(userName, photo)

        
       
    
        // update User
    
        editProfile( userName, photo )
        .then( () => {
        //   console.log(result.user)
          alert('User updated successfully');
        
        })
        .catch(error => {
          console.error(error)
          
          alert(error.message)
        })
      }

  return (
    <div>
      <div className="container mx-auto min-h-screen">
        <Navbar></Navbar>
        <div className="hero mt-16 bg-base-100">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleProfileUpdate} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder='name'
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
              
              <div className="form-control mt-6">
                <button className="btn btn-primary">Update Profile</button>
              </div>
            </form>

            

           
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default EditProfile;
