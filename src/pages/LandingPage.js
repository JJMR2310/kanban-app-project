import React from "react";
import Header from "../components/Landingpage/Header";
import MainContent from "../components/Landingpage/MainContent";
import Footer from "../components/Landingpage/Footer";
import "../styles/StylesLanding/LandingPage.css";
const Landingpage = () =>{
    return (
        <div className="content">
            <div className="nav"><Header/></div>
            <div className="main"><MainContent/></div>    
            <div className="footer"><Footer/></div>
        </div>
    );
};

export default Landingpage;