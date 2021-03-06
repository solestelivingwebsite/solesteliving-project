import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import FeedbackForm from "./FeedbackForm.js";
import Fade from "react-reveal/Fade";

export default class Section1 extends Component {
  render() {
    return (
      <div className="app4-contact-s1">
        <MDBContainer>
          <MDBRow className="mt-5 pt-5">
            <MDBCol></MDBCol>
            <MDBCol>
              <Fade>
                <h1
                  className="mb-5 pb-5 text-center gith"
                  style={{ width: "450px" }}
                >
                  GET IN TOUCH
                </h1>
              </Fade>
              <FeedbackForm></FeedbackForm>
            </MDBCol>
            <MDBCol></MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBRow className="mt-5 pt-5"></MDBRow>
      </div>
    );
  }
}
