import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from "../pages/Home";
import MensPage from "../pages/MensPage";
import MobileCovers from "../pages/MobileCovers";
import WomensPage from "../pages/WomensPage";
const Allroutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mens" element={<MensPage />} />
        <Route path="/womens" element={<WomensPage />} />
        <Route path="/mobilecovers" element={<MobileCovers />} />
      </Routes>
    </>
  );
};

export default Allroutes;