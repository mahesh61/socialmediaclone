import React from "react";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Outlet,
} from "react-router-dom";
import "./App.css";
import { ContentLayout } from "./pages/ContentLayout";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import NavBar from "./Components/navbar/NavBar";
import LeftBar from "./Components/leftbar/LeftBar";
import RightBar from "./Components/rightbar/RightBar";

export const ElemenetX = () => {
    return ( <
        >
        <
        NavBar / >
        <
        div style = {
            { display: "flex" } } >
        <
        LeftBar / >
        <
        div style = {
            { flex: 6 } } >
        <
        Outlet / >
        <
        /div> <
        RightBar / >
        <
        /div> <
        />
    );
};

const App = () => {
    const router = createBrowserRouter([{
            path: "/",
            element: < ElemenetX / > ,
            children: [
                { path: "/", element: < Home / > },
                { path: "/profile/:id", element: < Profile / > },
            ],
        },
        {
            path: "/login",
            element: < Login / > ,
        },
        {
            path: "/register",
            element: < Register / > ,
        },
    ]);
    return ( <
        div >
        <
        RouterProvider router = { router }
        /> <
        /div>
    );
};

export default App;