import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/root-layout";
import DashboardLayout from "../layout/dashboard-layout";
import Home from "../pages/home";
import SignUp from "../pages/sign-up";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <SignUp/> },
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [{ path: "/dashboard", element: <Home /> }],
      },
    ],
  },
]);
