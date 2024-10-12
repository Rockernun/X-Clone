import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../../pages/home/home";
import Profile from "../../pages/profile/profile";
import Login from "../../pages/login/login";
import CreateAccount from "../../pages/create-account/create-account";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/create-account",
    element: <CreateAccount />,
  },
]);

export default router;
