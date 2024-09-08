import * as React from "react";

import { createBrowserRouter } from "react-router-dom";

import App from "../App/App";
import Page404 from "@pages/Page404";
import HomePage from "@pages/HomePage";
import SearchPage from "@pages/SearchPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {path: "", element: <HomePage/>},
            {path: "search", element: <SearchPage/>},
            {path: "404", element: <Page404/>},
        ]
    }
])