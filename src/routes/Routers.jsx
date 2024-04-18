import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import UpdateProfile from "../pages/updateProfile/UpdateProfile";
import Error from "../pages/error page/Error";
import EstateDetails from "../pages/Home/estates/EstateDetails";
import PrivateRoute from "./PrivateRoute";
import Brockers from "../pages/Brockers/Brockers";
import EditProfile from "../pages/updateProfile/EditProfile";




const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch('/estates.json')
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/updateProfile',
                element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
            },
            {
                path: '/editProfile',
                element: <EditProfile></EditProfile>
            },
            {
                path:'/estateDetails/:id',
                element: <PrivateRoute><EstateDetails></EstateDetails></PrivateRoute>,
                loader: () => fetch('/estates.json')
            },
            {
                path:'/brockers',
                element: <PrivateRoute><Brockers></Brockers></PrivateRoute>,
                loader: () => fetch('/brockers.json')
            },
            {
                path: '*',
                element: <Error></Error>
              }
        ]
    }
])

export default router