import {createBrowserRouter } from "react-router-dom"
import Login from "./pages/login"
import Error from "./pages/error"
import Home from "./pages/home"
import CreatePost from "./pages/post"
import Profile from "./pages/profile"
import MyPhotos from "./pages/myphotos"
import Signup from "./pages/signup"

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login/>,
        errorElement: <Error />
    },
    {
        path: "/home",
        element: <Home/>,
        errorElement: <Error />
    },
    {
        path: "/post",
        element: <CreatePost/>,
        errorElement: <Error />
    },
    {
        path: "/profile",
        element: <Profile/>,
        errorElement: <Error />
    },
    {
        path: "/myphotos",
        element: <MyPhotos/>,
        errorElement: <Error />
    },
    {
        path: "/signup",
        element: <Signup/>,
        errorElement: <Error />
    },
] )