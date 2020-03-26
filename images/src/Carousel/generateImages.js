import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../App.css";
import firebase from "../Firebase/firebase.js";
import img1 from "../pics/tomCortina1.jpg";
import img2 from "../pics/martial.png";
import notFound from "../pics/404.png";

const images = [
  "https://firebasestorage.googleapis.com/v0/b/sushi-7c58c.appspot.com/o/images%2F73212175_1182813895246272_1156546173536829440_n.jpg?alt=media&token=4cb6aa34-3c68-4869-8d6c-52cba2a9b126",
  "https://firebasestorage.googleapis.com/v0/b/sushi-7c58c.appspot.com/o/images%2F29B72064-4FA9-4E10-8BA7-6C8D0512AD19.jpeg?alt=media&token=8d9d03b1-0718-4534-8571-9353e8be96cb"
];

function ImageExists(url) {
  var img = new Image();
  img.src = url;
  return img.height !== 0;
}

function safePush(img, L) {
  if (!L.includes(img) && ImageExists(img)) {
    L.push(img);
  }
}

function gotData(data) {
  var pic = data.val();
  var keys = Object.keys(pic);
  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];
    var url = pic[k].imageURL;
    safePush(url, images);
  }
}

function errData(err) {
  console.log(err);
}

function populateList() {
  firebase
    .database()
    .ref("images")
    .on("value", gotData, errData);
}

function makeItem(img) {
  return (
    <Carousel.Item>
      <img className="slideshow" src={img} alt="" />
    </Carousel.Item>
  );
}

function generateImages() {
  populateList();
  console.log(images);
  return images.map(makeItem);
}

export default generateImages;

/*
makeItem(img2, "Tom Cortina", "tomLover123");
  makeItem(img3, "Po Shen Loh", "USA IMO");
  makeItem(img4, "", "");
  makeItem(img5, "Don't Eat Here", "CMU Senate");
*/
