import React from "react";
import meme_logo from "../images/TrollFace.png";

export default function Navbar() {
    return(
        <div className= "Navbar">
            <img src={meme_logo} alt="TrollFace"/>
            <h3>Meme Generator</h3>
            <h4>React Course - Project 3</h4>
        </div>
    )
}