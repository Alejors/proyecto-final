import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "./store/appContext";
import NotFound from "./pages/NotFound";
import Navbar from "./component/navbar";
import Home from "./pages/Home";
import Login from "./component/login";

//create your first component
const Layout = () => {

    return (
        <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route component={Home} exact path="/" />
                    <Route component={Login} exact path="/login" />
                    <Route component={NotFound} />

                </Routes>
        </BrowserRouter>
    );
};

export default injectContext(Layout);
