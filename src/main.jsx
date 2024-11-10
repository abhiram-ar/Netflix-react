import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VideoPlayer from "./components/VideoPlayer.jsx";
import SignUp from "./components/auth/SignUp.jsx";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
      path:"signup",
      element: <SignUp/>
    },
    {
        path: "/play",
        element: <VideoPlayer />,
    },
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={appRouter} />
);
