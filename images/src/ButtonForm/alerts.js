// Maybe have this as a better way to alert?

import React, { Component } from "react";
//import Button from "react-bootstrap/Button";
//import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import "../App.css";

function findType(type) {
  var HTML;
  switch (type) {
    case "danger":
      HTML = (
        <div className="Alert">
          <Alert
            variant="danger"
            show={this.state.upBool}
            onClose={() => this.setState({ upBool: false })}
            dismissible
          >
            <p>
              {" "}
              <b>NO IMAGE:</b> Select an image first to upload.
            </p>
          </Alert>
        </div>
      );
      break;
    case "success":
      HTML = (
        <Alert
          variant="success"
          show={this.state.succBool}
          onClose={() => this.setState({ succBool: false })}
          dismissible
        >
          <p>
            {" "}
            <b>SUCCESSFUL UPLOAD: </b> Scroll to see your picture in the slide
            show :-)
          </p>
        </Alert>
      );
      break;
  }
  return HTML;
}

class FileAlert extends Component {
  constructor(alertType, uploadBool, successBool) {
    super();
    this.state = {
      type: alertType,
      upBool: uploadBool,
      succBool: successBool
    };
  }

  render() {
    return findType(this.state.type);
  }
}

export default FileAlert;
