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
          CMU Image Share{" "}
          <img src={scsday} style={{ height: 15 + "vh" }} alt="" />
        </h1>
        <div className="intro">
          {" "}
          A platform to see and share the daily happenings of fellow{" "}
          <a href="https://www.youtube.com/watch?v=nyHnU123Iew">
            Carnegie Mellon Students
          </a>
          . Hit arrows on the sides to scroll through images and the bottom
          right to autoplay! Upload your pictures below!
        </div>
      </div>
      <SlideShow />
      <ImageUpload />
      <div className="footer">
        <div className="intro">
          {" "}
          <b>DISCLAIMER: </b> Uploaded pictures are publicly visible. By
          uploading, you agree that you have permission to redistribute this
          photo from any involved party, including but not limited to: photo
          creator, people in the photo, people associated with the photo, etc.
        </div>
        <a href="https://github.com/lenghuang/cmu-imageshare">
          Made by Len Huang &copy; March 2020
        </a>
      </div>
    </div>
  );
}

export default App;
