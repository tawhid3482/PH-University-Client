import { createBrowserRouter } from "react-router";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";

import { adminRoutes } from "./admin.routes";

const router = createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        
    },
    {
        path:'/admin',
        element:<App></App>,
        children: adminRoutes
    },
    {
        path:'/faculty',
        element:<App></App>,
        children: []
    },
    {
        path:'/student',
        element:<App></App>,
        children: []
    },
    {
        path:'/register', // absolute path
        element:<Register></Register>
    },
    {
        path:'/login',
        element:<Login></Login>
    },
   
])

export default router;