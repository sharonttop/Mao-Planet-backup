import React from 'react'
import { Container } from 'react-bootstrap'
import slider1 from '../images/slider1_1720x800.png'
import slider2 from '../images/slider2_1720x800.png'
import slider3 from '../images/slider3_1720x800.png'
import sliderBar from '../images/sliderBar_800x80.svg'
import '../Styles/MyCarousel.scss'

import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
} from 'mdbreact'

function MyCarousel() {
  return (
    <Container fluid className="carouselSection p-0 mb-5 d-md-block d-none">
      <div>
        <img
          className="sliderBarCSS d-block container-fluid"
          src={sliderBar}
          alt=" "
        />
      </div>

      <MDBContainer fluid className="pb-5 p-0">
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls={false}
          showIndicators={true}
          className="z-depth-1"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <img
                  className="sliderCSS d-block container-fluid"
                  src={slider1}
                  alt="First slide"
                />
                <MDBMask overlay="black-light" />
              </MDBView>
              <MDBCarouselCaption>
                <h1 className="h1-responsive mb-md-5">等待。家</h1>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <img
                  className="sliderCSS d-block container-fluid"
                  src={slider2}
                  alt="Second slide"
                />
                <MDBMask overlay="black-strong" />
              </MDBView>
              <MDBCarouselCaption>
                <h1 className="h1-responsive mb-md-5">你遠行，我度假</h1>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <img
                  className="sliderCSS d-block container-fluid"
                  src={slider3}
                  alt="Third slide"
                />
                <MDBMask overlay="black-slight" />
              </MDBView>
              <MDBCarouselCaption>
                <h1 className="h1-responsive mb-md-5">
                  錢錢，我需要那個酷東西！
                </h1>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    </Container>
  )
}

export default MyCarousel
