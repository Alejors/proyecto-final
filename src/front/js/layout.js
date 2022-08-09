import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "./store/appContext";
import NotFound from "./views/NotFound";
import Navbar from "./component/navbar";
import Home from "./views/home.jsx";
import Services from "./views/Services";
import DetailsServices from "./component/DetailsServices.jsx";
import DetailsCourses from "./component/DetailsCourses.jsx";
import DetailsSpirituality from "./component/DetailsSpirituality.jsx";
import DetailsHealthy from "./component/DetailsHealthy.jsx";
import Login from "./views/login";
import Footer from './component/footer'
import Profile from './views/profile'
import PrivateHome from './views/privatehome'
import InfoUpdate from "./views/infoUpdate";
import OutdoorLiving from "./views/Outdoor-Living";
import Gaming from "./views/Gaming";
import Spirituality from "./views/Spirituality";
import Healthy from "./views/Healthy";
import Preferences from "./views/preferences";

//create your first component
const Layout = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route element={<Home />} exact path='/' />
                <Route element={<Preferences />} exact path='/preferences' />
                <Route element={<Profile />} exact path='/profile' />
                <Route element={<Login />} exact path="/login" />
                <Route element={<PrivateHome />} exact path='/private' />
                <Route element={<InfoUpdate />} exact path='/update' />
                <Route element={<Services />} exact path="/services" />
                <Route element={<OutdoorLiving />} exact path="/outdoor" />
                <Route element={<Gaming />} exact path="/gaming" />
                <Route element={<Spirituality />} exact path="/spirituality" />
                <Route element={<Healthy />} exact path="/healthy" />
                <Route element={<DetailsServices />} exact path="/services/:index" />
                <Route element={<DetailsCourses />} exact path="/courses/:index" />
                <Route element={<DetailsSpirituality />} exact path="/spirituality/:index" />
                <Route element={<DetailsHealthy />} exact path="/healthy/:index" />
                <Route element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default injectContext(Layout);

