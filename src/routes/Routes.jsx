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
import Updatejob from "./Updatejob";
import Privateroute from "./Privateroute";

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
            path:'/jobs/:id', 
            element:<Privateroute><Jobdetails></Jobdetails></Privateroute>,
            loader:()=>fetch('https://ecommerce-project-server-1mpm6vxrp-banjir-sultanas-projects.vercel.app/categories')
           
    
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
            element:<Privateroute><Addjob></Addjob></Privateroute>

        },
        {
            path:'/mypostedjob',
            element:<Privateroute><Mypostedjob></Mypostedjob></Privateroute>,
            loader:()=>fetch('https://ecommerce-project-server-1mpm6vxrp-banjir-sultanas-projects.vercel.app/addedjobs')

        },
        {
            path:'/update/:id',
            element:<Updatejob></Updatejob>,
            loader:({params})=>fetch(`https://ecommerce-project-server-1mpm6vxrp-banjir-sultanas-projects.vercel.app/addedjobs/${params.id}`)

        },
        {
            path:'/mybids',
            element:<Privateroute><Mybids></Mybids></Privateroute>,
            loader:()=>fetch('https://ecommerce-project-server-1mpm6vxrp-banjir-sultanas-projects.vercel.app/bidedjobs')

        },
        {
            path:'/bidrequest',
            element:<Privateroute><Bidrequest></Bidrequest></Privateroute>,
            loader:()=>fetch('https://ecommerce-project-server-1mpm6vxrp-banjir-sultanas-projects.vercel.app/bidedjobs')

        }
      ]
    },
   
  ]);
  export default router