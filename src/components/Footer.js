import React from "react";
// import twitter from "../images/twitter.png"
import github from "../images/github.png";
import insta from "../images/insta.png";

export default function Footer() {
    return (
        <footer>
            {/* <img src ={twitter} alt = "twitter-logo"/> */}
            {/* <img src={facebook} alt="facebook-logo" /> */}
            <img className="logo" src={insta} alt="insta-logo" />
            <img className="logo" src={github} alt="github-logo" />
            <img className="logo" src={insta} alt="insta-logo" />
            <img className="logo" src={github} alt="github-logo" />
        </footer>
    );
};