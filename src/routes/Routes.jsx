import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Pages/Error";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Addjob from "../Pages/Addjob";
import Mypostedjob from "../Pages/Mypostedjob";
import Bidrequest from "../Pages/Bidrequest";
import Mybids from "../Pages/Mybids";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      errorElement:<Error></Error>,
      children:[
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
  ]);
  export default router