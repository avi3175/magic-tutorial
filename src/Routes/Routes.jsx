import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home";
import Teacher from "../Components/Teacher"
import SignUp from "../Components/SignUp";
import LogIn from "../Components/LogIn";

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
        }
      ]
    },
  ]);