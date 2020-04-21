import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import generateImages from "./generateImages.js";
import ImageGallery from "react-image-gallery";
import "../App.css";

function SlideShow() {
  return (
    <div style={{}}>
      <ImageGallery
        items={generateImages()}
        showFullscreenButton={false}
        showPlayButton={true}
        autoPlay={false}
        infinite={true}
        slideInterval={5000}
        lazyLoad={true}
      />
    </div>
  );
}

export default SlideShow;
