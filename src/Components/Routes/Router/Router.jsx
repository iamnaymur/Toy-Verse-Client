import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Login from "../../Login/Login";
import SignUp from "../../Signup/SignUp";
import HomePage from "../../Home/HomePage";
import Blog from "../../Blog/Blog";
import AddToy from "../../AddToy/AddToy";
import MyToys from "../../MyToys/MyToys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/addToy",
        element: <AddToy></AddToy>,
      },
      {
        path: "/mytoys",
        element: <MyToys></MyToys>,
      },
    ],
  },
]);

export default router;
