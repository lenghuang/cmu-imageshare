import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import firebase from "../Firebase/firebase.js";

// init from "../pics/default.png";
//(init, "", ""),

const urlCheck = [
  "https://firebasestorage.googleapis.com/v0/b/sushi-7c58c.appspot.com/o/images%2F73212175_1182813895246272_1156546173536829440_n.jpg?alt=media&token=4cb6aa34-3c68-4869-8d6c-52cba2a9b126",
  "https://firebasestorage.googleapis.com/v0/b/sushi-7c58c.appspot.com/o/images%2F29B72064-4FA9-4E10-8BA7-6C8D0512AD19.jpeg?alt=media&token=8d9d03b1-0718-4534-8571-9353e8be96cb"
];
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
  if (!urlCheck.includes(img) && ImageExists(img)) {
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
