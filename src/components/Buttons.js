import React from "react";
import email from "../images/email_logo.png"
import linkedin from "../images/linkedin.png";

export default function Buttons() {
    return (
        <div className="buttons">
            <button className="email--btn">
                <a href="mailto:swaggyroach@gmail.com">
                    <img className="email" src={email} alt="email-logo" />
                    Email
                </a>
            </button>
            <button className="linkedin--btn">
                <a href="https://www.linkedin.com/in/hejessie/">
                    <img className="linkedin" src={linkedin} alt="linkedin-logo" />
                    Linkedin
                </a>
            </button>
        </div>
    );
};