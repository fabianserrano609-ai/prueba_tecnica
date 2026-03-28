import { createBrowserRouter, Navigate } from "react-router-dom";
import { UserDetails } from "@/pages/UserDetail/UserDetails";
import { UserList } from "@/pages/UserList/UserList";
import { MainLayout } from "@/pages/MainLayout";

export const navRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <UserList /> },
      { path: "details/:id", element: <UserDetails /> },
      { path: "*", element: <Navigate to="/" replace></Navigate> },
    ],
  },
]);
