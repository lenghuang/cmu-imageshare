import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
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
      inputCaption: "",
      inputPerson: "",
      showUploadError: false,
      showUploadSuccess: false,
      showInputError: false,
      showServerError: false
    };
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleCapChange = this.handleCapChange.bind(this);
    this.handlePplChange = this.handlePplChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleCapChange(e) {
    this.setState({ inputCaption: e.target.value });
  }
  handlePplChange(e) {
    this.setState({ inputPerson: e.target.value });
  }

  handleFileChange(e) {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
      this.setState({ fileText: image.name });
    }
  }
  handleUpload = () => {
    const { image } = this.state;
    if (image === null) {
      this.setState({ showUploadError: true });
    }
    if (this.state.inputCaption === "" && this.state.inputPerson === "") {
      this.setState({ showInputError: true });
    } else {
      this.setState({ showUploadSuccess: true });
      const uploadTask = firebase
        .storage()
        .ref()
        .child(
          `images/${this.state.inputPerson.replace(/[^a-zA-Z ]/g, "") +
            `_` +
            this.state.inputCaption.replace(/[^a-zA-Z ]/g, "")}`
        )
        .put(image);
      uploadTask.on(
        "state_changed",
        snapshot => {
          console.log(snapshot);
        },
        error => {
          // error function ....
          console.log(error);
          this.setState({ showServerError: true });
        },
        () => {
          // generate URL
          firebase
            .storage()
            .ref()
            .child(
              `images/${this.state.inputPerson.replace(/[^a-zA-Z ]/g, "") +
                `_` +
                this.state.inputCaption.replace(/[^a-zA-Z ]/g, "")}`
            )
            .getDownloadURL()
            .then(url => {
              console.log(url);
              console.log(this.state.inputCaption);
              // Store in database
              var data = {
                imageURL: url,
                caption: this.state.inputCaption,
                person: this.state.inputPerson
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
    if (this.state.showUploadError && this.state.showInputError) {
      return (
        <div className="Alert">
          <Alert
            variant="warning"
            onClose={() =>
              this.setState({ showUploadError: false, showInputError: false })
            }
            dismissible
          >
            <div className="alertText">
              {" "}
              <b>NO INPUTS:</b> Please use these forms to input an image
              caption, your name, and an image!
            </div>
          </Alert>
        </div>
      );
    } else if (this.state.showUploadError) {
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
    } else if (this.state.showServerError) {
      return (
        <div className="Alert">
          <Alert
            variant="warning"
            onClose={() => this.setState({ showServerError: false })}
            dismissible
          >
            <div className="alertText">
              {" "}
              <b>DID NOT UPLOAD:</b> Something went wrong with uploading the
              image to the server. This will be fixed soon!
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
    } else if (this.state.showInputError) {
      return (
        <div className="Alert">
          <Alert
            variant="danger"
            onClose={() => this.setState({ showInputError: false })}
            dismissible
          >
            <div className="alertText">
              {" "}
              <b>NO TEXT:</b> Please input a description/caption for your image,
              as well as your name/nickname.
            </div>
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
            <Form>
              <Row>
                <Col>
                  <Form.Group
                    onChange={e => this.handleCapChange(e)}
                    controlId="formCaption"
                  >
                    <Form.Control placeholder="Enter Caption" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group
                    onChange={this.handlePplChange}
                    controlId="formPerson"
                  >
                    <Form.Control placeholder="Enter Your Name / Alias" />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
            <Row>
              <Col>
                <Form onChange={event => this.handleFileChange(event)}>
                  <Form.File label={this.state.fileText} lang="en" custom />
                </Form>
              </Col>
              <Col>
                <Button variant="secondary" onClick={this.handleUpload} block>
                  <span style={{ fontSize: "min(2.75vw,1.8vh)" }}>
                    {" "}
                    Click Here To Upload{" "}
                  </span>
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      );
    }
  }
}

export default ImageUpload;
