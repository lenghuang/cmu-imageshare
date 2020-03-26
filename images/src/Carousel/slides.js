import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import left from "../pics/leftarrow.png";
import right from "../pics/rightarrow.png";
import Carousel from "react-bootstrap/Carousel";
import generateImages from "./generateImages.js";
import "../App.css";

function SlideShow() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        nextIcon={React.createElement("img", {
          src: right,
          style: { height: "min(12vh,10vw)" }
        })}
        prevIcon={React.createElement("img", {
          src: left,
          style: { height: "min(12vh,10vw)" }
        })}
      >
        {generateImages()}
      </Carousel>
    </div>
  );
}

export default SlideShow;
