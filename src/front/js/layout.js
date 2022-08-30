import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "./store/appContext";
import NotFound from "./views/NotFound";
import Navbar from "./component/navbar";
import Home from "./views/home.jsx";
import Services from "./views/Services";
import DetailsGaming from "./component/DetailsGaming.jsx";
import DetailsOutdoor from "./component/DetailsOutdoor.jsx";
import DetailsSpirituality from "./component/DetailsSpirituality.jsx";
import DetailsHealthy from "./component/DetailsHealthy.jsx";
import DetailsFashion from "./component/DetailsFashion.jsx";
import DetailsSocialskills from "./component/DetailsSocialskills.jsx";
import DetailsSustainability from "./component/DetailsSustainability.jsx";
import DetailsPetcare from "./component/DetailsPetcare.jsx";
import DetailsHomecare from "./component/DetailsHomecare.jsx";
import DetailsHobbies from "./component/DetailsHobbies.jsx";
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
import Private_teacher from "./component/private_teacher";
import Fashion from "./views/Fashion";
import Socialskills from "./views/Socialskills";
import Sustainability from "./views/Sustainability";
import Petcare from "./views/Petcare";
import Homecare from "./views/Homecare";
import Hobbies from "./views/Hobbies";


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
                <Route element={<Gaming />} exact path="/gaming" />
                <Route element={<Healthy />} exact path="/health" />
                <Route element={<Spirituality />} exact path="/spirituality" />
                <Route element={<OutdoorLiving />} exact path="/outdoor" />
                <Route element={<Fashion />} exact path="/fashion" />
                <Route element={<Socialskills />} exact path="/socialskills" />
                <Route element={<Sustainability />} exact path="/sustainability" />
                <Route element={<Petcare />} exact path="/petcare" />
                <Route element={<Homecare />} exact path="/homecare" />
                <Route element={<Hobbies />} exact path="/hobbies" />
                <Route element={<DetailsGaming />} exact path="/gaming/:index" />
                <Route element={<DetailsHealthy />} exact path="/health/:index" />
                <Route element={<DetailsSpirituality />} exact path="/spirituality/:index" />
                <Route element={<DetailsHealthy />} exact path="/healthy/:index" />
                <Route element={<DetailsOutdoor />} exact path="/outdoor/:index" />
                <Route element={<DetailsFashion />} exact path="/fashion/:index" />
                <Route element={<DetailsSocialskills />} exact path="/socialskills/:index" />
                <Route element={<DetailsSustainability />} exact path="/sustainability/:index" />
                <Route element={<DetailsPetcare />} exact path="/petcare/:index" />
                <Route element={<DetailsHomecare />} exact path="/homecare/:index" />
                <Route element={<DetailsHobbies />} exact path="/hobbies/:index" />
                <Route element={<Private_teacher />} exact path="/private_teacher" />
                <Route element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default injectContext(Layout);

