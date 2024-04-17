import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import UpdateProfile from "../pages/updateProfile/UpdateProfile";
import Error from "../pages/error page/Error";




const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch('estates.json')
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
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path: '*',
                element: <Error></Error>
              }
        ]
    }
])

export default router