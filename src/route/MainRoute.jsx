import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "../pages/SignUp/SignUp";
import SignUp2rd from "../pages/SignUp/SignUp2nd";
import SignUp3rd from "../pages/SignUp/SignUp3rd";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import ReccomendMeals from "../pages/Reccomend/ReccomendMeals";
import Scan from "../pages/Scan/Scan";
import ReccomendStore from "../pages/Reccomend/ReccomendStore";
import ShowNutrition from "../pages/Scan/ShowNutrition";
import Profile from "../pages/Profile/Profile";

const MainRoute = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} /> 
        <Route path="/sign-up-2nd" element={<SignUp2rd />} />
        <Route path="/sign-up-3rd" element={<SignUp3rd />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/reccomend-meals" element={<ReccomendMeals />} />
        <Route path="/scan" element={<Scan />} />
        <Route path="/reccomend-store" element={<ReccomendStore />} />
        <Route path="/show-nutrition" element={<ShowNutrition />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default MainRoute;
