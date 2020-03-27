// https://docs.clarifai.com/api-guide/predict

import { app } from "../API/clarifai.js";

function clarify(url) {
  app.predict("e9576d86d2004ed1a38ba0cf39ecb4b1", url).then(
    response => {
      console.log(response["outputs"][0]["data"]["concepts"]);
    },
    err => {}
  );
}

export default clarify;
