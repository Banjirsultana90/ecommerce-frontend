import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Pages/Error";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Addjob from "../Pages/Addjob";
import Mypostedjob from "../Pages/Mypostedjob";
import Bidrequest from "../Pages/Bidrequest";
import Mybids from "../Pages/Mybids";
import Home from "../Components/Home/Home";
import Jobdetails from "../Pages/Jobdetails";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      errorElement:<Error></Error>,
      children:[

        {
            path:'/',
            element:<Home></Home>

        },
       
        {
            path:'/login',
            element:<Login></Login>

        },
        {
            path:'/register',
            element:<Register></Register>

        },
        {
            path:'/addjob',
            element:<Addjob></Addjob>

        },
        {
            path:'/mypostedjob',
            element:<Mypostedjob></Mypostedjob>

        },
        {
            path:'/mybids',
            element:<Mybids></Mybids>

        },
        {
            path:'/bidrequest',
            element:<Bidrequest></Bidrequest>

        }
      ]
    },
    {
        path:'/jobs/:id',
        element:<Jobdetails></Jobdetails>
       

    },
  ]);
  export default router