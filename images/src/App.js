import React from "react";
import SlideShow from "./Carousel/slides.js";
import ImageUpload from "./ButtonForm/uploadimage.js";
import scsday from "./pics/s20_logo.png";
import "./App.css";

function App() {
  return (
    <div className="main">
      <div className="header">
        <h1>
          SCS Image Share{" "}
          <img src={scsday} style={{ height: 15 + "vh" }} alt="" />
        </h1>
      </div>
      <SlideShow />
      <ImageUpload />
      <div className="footer">
        <a href="https://github.com/lenghuang/cmu-imageshare">
          Made by Len Huang &copy; March 2020
        </a>
      </div>
    </div>
  );
}

export default App;
