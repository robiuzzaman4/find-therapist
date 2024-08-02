import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/root-layout";
import DashboardLayout from "../layout/dashboard-layout";
import Home from "../pages/home";
import SignUp from "../pages/sign-up";
import SignIn from "../pages/sign-in";
import ProtectedRoute from "./protected-route";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <SignUp />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Home />,
      },
    ],
  },
]);
