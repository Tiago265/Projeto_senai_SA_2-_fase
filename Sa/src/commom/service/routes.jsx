import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../../pages/Landing/Landing";
import Home from "../../pages/Home/Home";


const AppRoutes = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element = { <Home/> } />
            <Route path="/landing" element = { <Landing/> } />
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;