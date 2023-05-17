import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Login from "../../Login/Login";
import SignUp from "../../Signup/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
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
