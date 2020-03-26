import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import firebase from "../Firebase/firebase.js";
//import FileAlert from "./alerts.js";
import "../App.css";

class ImageUpload extends Component {
  constructor() {
    super();
    this.state = {
      /*  Initial State */
      image: null,
      fileText: "Find an image...",
      showUploadError: false,
      showUploadSuccess: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleChange(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
      this.setState({ fileText: image.name });
    }
  }
  handleUpload = () => {
    const { image } = this.state;
    if (image === null) {
      console.log("Enter alert branch");
      this.setState({ showUploadError: true });
    } else {
      this.setState({ showUploadError: false });
      this.setState({ showUploadSuccess: true });
      const uploadTask = firebase
        .storage()
        .ref()
        .child(`images/${image.name}`)
        .put(image);
      uploadTask.on(
        "state_changed",
        snapshot => {
          console.log(snapshot);
        },
        error => {
          // error function ....
          console.log(error);
        },
        () => {
          // generate URL
          firebase
            .storage()
            .ref(`images`)
            .child(image.name)
            .getDownloadURL()
            .then(url => {
              console.log(url);
              // Store in database
              var data = {
                imageURL: url,
                caption: "Default Caption",
                person: "John Doe"
              };
              firebase
                .database()
                .ref(`images`)
                .push(data);
            });
        }
      );
    }
  };

  render() {
    if (this.state.showUploadError) {
      return (
        <div className="Alert">
          <Alert
            variant="danger"
            onClose={() => this.setState({ showUploadError: false })}
            dismissible
          >
            <div className="alertText">
              {" "}
              <b>NO IMAGE:</b> Select an image first to upload.
            </div>
          </Alert>
        </div>
      );
    } else if (this.state.showUploadSuccess) {
      return (
        <div className="Alert">
          <Alert
            variant="success"
            onClose={() => this.setState({ showUploadSuccess: false })}
            dismissible
          >
            {" "}
            <b>SUCCESSFUL UPLOAD: </b> Scroll to see your picture in the slide
            show :-)
          </Alert>
        </div>
      );
    } else {
      return (
        <div className="ButtonContainer">
          <div
            style={{
              paddingTop: "7vh",
              paddingBottom: "2vh",
              left: "30%",
              width: "40%",
              fontSize: "min(2.75vw,1.8vh)",
              position: "relative"
            }}
          >
            <Form onChange={event => this.handleChange(event)}>
              <Form.File label={this.state.fileText} lang="en" custom />
            </Form>
          </div>
          <div style={{ position: "relative" }}>
            <Button variant="secondary" onClick={this.handleUpload}>
              <span style={{ fontSize: "min(2.75vw,1.8vh)" }}>
                {" "}
                Click Here To Upload{" "}
              </span>
            </Button>
          </div>
        </div>
      );
    }
  }
}

export default ImageUpload;
