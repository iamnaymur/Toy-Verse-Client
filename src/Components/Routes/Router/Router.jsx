import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Login from "../../Login/Login";
import SignUp from "../../Signup/SignUp";
import HomePage from "../../Home/HomePage";
import Blog from "../../Blog/Blog";
import AddToy from "../../AddToy/AddToy";
import MyToys from "../../MyToys/MyToys";
import PrivateROute from "../../PrivateRoute/PrivateROute";
import UpdateToyData from "../../MyToys/UpdateToyData";
import AllToys from "../../AllToys/AllToys";

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
        path: "/blogs",
        element: <Blog></Blog>,
      },
      {
        path: "/addToy",
        element: (
          <PrivateROute>
            <AddToy></AddToy>
          </PrivateROute>
        ),
      },
      {
        path: "/mytoys",
        element: (
          <PrivateROute>
            <MyToys></MyToys>
          </PrivateROute>
        ),
      },
      {
        path: "/updateToyData/:id",
        element: <UpdateToyData></UpdateToyData>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/addedToys/${params.id}`),
      },
      {
        path: '/alltoys',
        element:<AllToys></AllToys>
      }
    
    
    ],
  },
]);

export default router;
