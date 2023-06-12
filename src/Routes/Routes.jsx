import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home";
import Teacher from "../Components/Teacher"
import SignUp from "../Components/SignUp";
import LogIn from "../Components/LogIn";
import Dashboard from "../Layout/Dashboard";
import Mycart from "../Components/Mycart";
import PrivateRoute from "./PrivateRoute";
import MyClass from "../Components/MyClass";
import ManageUser from "../Components/ManageUser";
import MySelectedClass from "../Components/MySelectedClass";
import AdminRoute from "../Routes/AdminRoute"
import Allclass from "../Components/Allclass";
import AddClass from "../Components/AddClass";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/teacher",
            element:<Teacher></Teacher>
        },
        {
            path:"/signup",
            element:<SignUp></SignUp>
        },
        {
            path:"/login",
            element:<LogIn></LogIn>
        },
        {
          path:"/class",
          element:<MyClass></MyClass>
        },
      ]
    },
    {
      path:"dashboard",
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:"mycart",
          element:<Mycart></Mycart>
        },
        
        {
          path:"manageuser",
          element:<ManageUser></ManageUser>
        },
        {
          path:"manageclass",
          element:<Allclass></Allclass>
        },
        {
          path:"myselectedclass",
          element:<MySelectedClass></MySelectedClass>
        },
        {
          path:"addclass",
          element:<AddClass></AddClass>
        },
        {
          path:"allclass",
          element:<Allclass></Allclass>
        },
      ]
    }
  ]);