import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import firebase from "../Firebase/firebase.js";

// init from "../pics/default.png";
//(init, "", ""),

const urlCheck = [];
const images = [
  {
    original:
      "https://firebasestorage.googleapis.com/v0/b/sushi-7c58c.appspot.com/o/default%2Fdefault.png?alt=media&token=a6fba805-0145-44df-ad06-c011f1eaec04",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/sushi-7c58c.appspot.com/o/default%2Fdefault.png?alt=media&token=a6fba805-0145-44df-ad06-c011f1eaec04"
  }
];

function ImageExists(url) {
  var img = new Image();
  img.src = url;
  console.log(img);
  return img.height !== 0;
}

function safeSplice(entry) {
  var img = entry.original;
  console.log(!urlCheck.includes(img));
  console.log(ImageExists(img));
  if (!urlCheck.includes(img)) {
    urlCheck.push(img);
    images.splice(1, 0, entry);
    console.log("PUSHED:");
    console.log(entry);
  } else {
    console.log("REJECTED: ");
    console.log(entry);
  }
}
function gotData(data) {
  var pic = data.val();
  var keys = Object.keys(pic);
  for (var i = 0; i < keys.length; i++) {
    var dict = pic[keys[i]];
    var entry = {
      original: dict.imageURL,
      thumbnail: dict.imageURL,
      description: dict.caption,
      thumbnailLabel: dict.person
    };
    safeSplice(entry);
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

function generateImages() {
  console.log("BEFORE");
  console.log(images);
  populateList();
  console.log("AFTER");
  console.log(images);
  //return images.map(makeItem);
  return images;
}

export default generateImages;
