import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "./store/appContext";
import NotFound from "./pages/NotFound";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import DetailsServices from "./component/DetailsServices.jsx";
import DetailsCourses from "./component/DetailsCourses.jsx";
import DetailsMeditation from "./component/DetailsMeditation.jsx";
import DetailsHealthy from "./component/DetailsHealthy.jsx";


//create your first component
const Layout = () => {

    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route element={<Home />} exact path="/" />
                    <Route element={NotFound} />
                    <Route element={<Services />} exact path="/services" />
                    <Route element={<DetailsServices />} exact path="/services/:index" />
                    <Route element={<DetailsCourses />} exact path="/courses/:index" />
                    <Route element={<DetailsMeditation />} exact path="/meditation/:index" />
                    <Route element={<DetailsHealthy />} exact path="/healthy/:index" />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default injectContext(Layout);
