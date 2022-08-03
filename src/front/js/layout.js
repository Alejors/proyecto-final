import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "./store/appContext";
import NotFound from "./pages/NotFound";
import Navbar from "./component/navbar";
import Home from "./pages/Home";

//create your first component
const Layout = () => {

    return (
        <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route component={Home} exact path="/home" />
                    <Route component={NotFound} />
                </Routes>
        </BrowserRouter>
    );
};

export default injectContext(Layout);
