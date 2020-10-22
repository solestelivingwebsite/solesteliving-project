import React, { Component } from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
} from "mdbreact";

import sliderImages from '../../../images/Oct-2020-Bay-Village/sliderImages'

class CarouselPageBayVillage extends Component {
  render() {
    return (
      <div className="mt-5 pt-5 mb-5 pb-5 carauselPage">
        <MDBContainer>
          <MDBCarousel
            activeItem={0}
            length={60}
            showControls={true}
            showIndicators={false}
            className="z-depth-1"
            slide
          >
            <MDBCarouselInner>
              {/* <MDBCarouselItem itemId="1">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src={this.props.propertyComponentImage1}
                    alt="First slide"
                  />
                </MDBView>
              </MDBCarouselItem> */}
              {sliderImages.map((img, index) => (
                <MDBCarouselItem itemId={index} key={index}>
                  <MDBView>
                    <img className="d-block w-100" src={img} alt="slide" />
                  </MDBView>
                </MDBCarouselItem>
              ))}
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBContainer>
      </div>
    );
  }
}

export default CarouselPageBayVillage;
