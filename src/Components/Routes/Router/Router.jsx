import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Login from "../../Login/Login";
import SignUp from "../../Signup/SignUp";
import HomePage from "../../Home/HomePage";

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
    ],
  },
]);

export default router;
