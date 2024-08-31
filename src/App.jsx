import Home from "./screens/Home";
import Login from "./screens/Login";
import NotFound from "./screens/NotFound";
import Loading from "./screens/Loading";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function App() {

  const router = createBrowserRouter([
    { path: "/", element: <Loading /> },
    { path: "*", element: <NotFound /> },
    { path: "/home", element: <Home /> },
    { path: "/login", element: <Login /> },
  ]);

  return <RouterProvider router={router} />
}