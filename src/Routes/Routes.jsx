import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Alltoys from "../pages/AllToys/Alltoys";
import AddToy from "../pages/AddToy/AddToy";
import MyToys from "../pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import Error from "../pages/Error/Error";
import UpdateToy from "../pages/UpdateToy/UpdateToy";
import ToyDetails from "../pages/ToyDetails/ToyDetails";

const router = createBrowserRouter([
     {
          path:"/",
          element:<Main></Main>,
          children:[
               {
                    path:"/",
                    element:<Home></Home>
               },
               {
                    path:"/alltoys",
                    element:<Alltoys></Alltoys>
               },
               {
                    path:"/mytoys",
                    element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
               },
               {
                    path:"/addtoy",
                    element:<PrivateRoute><AddToy></AddToy></PrivateRoute>
               }
          ]
     },
     {
          path:"/login",
          element:<Login></Login>
     },
     {
          path:"/signup",
          element:<SignUp></SignUp>
     },
     {
          path:"/updatetoy/:id",
          element:<UpdateToy></UpdateToy>,
          loader:({params})=> fetch(`http://localhost:5000/update/${params.id}`)
     },
     {
          path:"/toydetails/:id",
          element:<PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>
          
     },
     {
          path:"*",
          element:<Error></Error>
     }
])

export default router;