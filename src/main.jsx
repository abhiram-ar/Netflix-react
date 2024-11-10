import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VideoPlayer from "./components/VideoPlayer.jsx";
import SignUp from "./components/auth/SignUp.jsx";
import Login from "./components/auth/Login.jsx";
import LoadingSpinner from "./components/LoadingSpinner.jsx";

const appRouter = createBrowserRouter([
    {
        path: "/home",
        element: <App />,
    },
    {
        path: "signup",
        element: <SignUp />,
    },
    {
        path: "login",
        element: <Login />,
    },
    {
        path: "/watch/:id?",
        element: <VideoPlayer />,
    },
    {
        path: "test",
        element: <LoadingSpinner />,
    },
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={appRouter} />
);
