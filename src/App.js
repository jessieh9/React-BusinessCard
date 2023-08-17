import React from "react";
import Image from "./components/Image";
import Bio from "./components/Bio";
import Buttons from "./components/Buttons";
import Info from "./components/Info";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Image />
      <Bio />
      <Buttons />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
