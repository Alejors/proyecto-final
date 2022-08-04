import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "./store/appContext";
import NotFound from "./pages/NotFound";
import Navbar from "./component/navbar";
import Home from "./pages/Home";
import Login from "./component/login";
import Footer from './component/footer'
import Profile from './pages/profile'
import PrivateHome from './pages/privatehome'

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
        <Route element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default injectContext(Layout)
