import Home from "./screens/Home";
import Chat from "./screens/Chat";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import ImgSwap from "./screens/ImgSwap";
import Profile from "./screens/Profile";
import Loading from "./screens/Loading";
import ChatList from "./screens/chatList";
import NotFound from "./screens/NotFound";
import Location from "./screens/Location";
import MarketPlace from "./screens/MarketPlace";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function App() {

  const router = createBrowserRouter([
    { path: "/", element: <Loading /> },
    { path: "*", element: <NotFound /> },
    { path: "/home", element: <Home /> },
    { path: "/chat", element: <Chat /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    { path: "/imgSwap", element: <ImgSwap /> },
    { path: "/Profile", element: <Profile /> },
    { path: "/location", element: <Location /> },
    { path: "/chatList", element: <ChatList /> },
    { path: "/marketPlace", element: <MarketPlace /> },
  ]);

  return <RouterProvider router={router} />
}