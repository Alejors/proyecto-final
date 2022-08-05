import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "./store/appContext";
import NotFound from "./pages/NotFound";
import Navbar from "./component/navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import DetailsServices from "./component/DetailsServices.jsx";
import DetailsCourses from "./component/DetailsCourses.jsx";
import DetailsMeditation from "./component/DetailsMeditation.jsx";
import DetailsHealthy from "./component/DetailsHealthy.jsx";
import Login from "./component/login";
import Footer from './component/footer'
import Profile from './pages/profile'
import PrivateHome from './pages/privatehome'
import InfoUpdate from "./pages/infoUpdate";

//create your first component
const Layout = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route element={<Home />} exact path='/' />
                <Route element={<Profile />} exact path='/profile' />
                <Route element={<Login />} exact path="/login" />
                <Route element={<PrivateHome />} exact path='/private' />
                <Route element={<InfoUpdate />} exact path='/update' />
                <Route element={<Services />} exact path="/services" />
                <Route element={<DetailsServices />} exact path="/services/:index" />
                <Route element={<DetailsCourses />} exact path="/courses/:index" />
                <Route element={<DetailsMeditation />} exact path="/meditation/:index" />
                <Route element={<DetailsHealthy />} exact path="/healthy/:index" />
                <Route element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default injectContext(Layout);

