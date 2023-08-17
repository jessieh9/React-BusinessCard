import React from "react";
import logo from "./images/Cropped_Image.png"
import Bio from "./components/Bio";
import Buttons from "./components/Buttons";
import Info from "./components/Info";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <img className="profile" src={logo} alt="profile-headshot" />
      <Bio />
      <Buttons />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
