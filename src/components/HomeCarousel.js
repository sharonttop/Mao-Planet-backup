import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { BiHeart, BiHomeAlt, BiGift, BiCartAlt } from 'react-icons/bi'
import { FaPaw } from 'react-icons/fa'
import { Button } from 'react-bootstrap'

import slider1 from '../images/Home/slider1_1720x800.png'
import slider2 from '../images/Home/slider2_1720x800.png'
import slider3 from '../images/Home/slider3_1720x800.png'
import sliderBar from '../images/Home/sliderBar_800x80.svg'
import mobileslider1 from '../images/Home/mobileslider1_375x500.png'
import '../Styles/HomeCarousel.scss'

import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
} from 'mdbreact'

function HomeCarousel() {
  return (
    <>
      {/* PC */}
      <Container fluid className="ACcarouselSection p-0 d-md-block d-none">
        <MDBContainer fluid className="pb-5 p-0">
          <MDBCarousel
            activeItem={1}
            length={3}
            showControls={false}
            showIndicators={false}
            className="z-depth-1"
          >
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <MDBView>
                  <img
                    className="ACsliderCSS d-block container-fluid"
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
                    className="ACsliderCSS d-block container-fluid"
                    src={slider2}
                    alt="Second slide"
                  />
                  <MDBMask overlay="black-strong" />
                </MDBView>
                <MDBCarouselCaption>
                  <h1 className="h1-responsive mb-md-5">
                    你遠行，我度假。幫毛孩找個好去處
                  </h1>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <MDBView>
                  <img
                    className="ACsliderCSS d-block container-fluid"
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

        <div className="container ACsliderBar">
          <img src={sliderBar} alt=" " />
          <div className="row">
            <div id="ACmember-adopt">
              <div className="ACmembericon">
                <BiHeart />
              </div>
              <div className="ACmembertext">
                <p>加入會員領養毛孩</p>
              </div>
            </div>
            <div id="ACmember-hotel">
              <div className="ACmembericon">
                <BiHomeAlt />
              </div>
              <div className="ACmembertext">
                <p>毛孩旅宿享5%回饋</p>
              </div>
            </div>
            <div id="ACmember-ID">
              <div className="ACmembericon">
                <BiGift />
              </div>
              <div className="ACmembertext">
                <p>專屬毛孩ID領生日禮</p>
              </div>
            </div>
            <div id="ACmember-999">
              <div className="ACmembericon">
                <BiCartAlt />
              </div>
              <div className="ACmembertext">
                <p>全館滿NT$999免運</p>
              </div>
            </div>
            <div className="ACjoinMemberBtn">
              <Link to="/member">
                <Button
                  variant="outline-primary"
                  className="ACYellowOutlineBtn"
                >
                  <div>
                    <FaPaw />
                    &nbsp;&nbsp;&nbsp;立即加入會員
                  </div>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>

      {/* mobile */}
      <Container fluid className="m-ACcarouselSection p-0 d-md-none d-block">
        <div className="m-ACsliderCSS conatiner-fluid p-0 col-12">
          <h1 className="m-ACsliderTitle">等待。家</h1>
          <img src={mobileslider1} alt="" className="m-slider1" />
        </div>
      </Container>

      <Container
        fluid
        className="m-ACsliderbar p-0 mt-3 mb-5 d-md-none d-block"
      >
        <Row className="col-6 mx-auto justify-content-center align-items-center">
          <div id="m-ACmember-adopt">
            <div className="ACmembericon">
              <BiHeart />
            </div>
            <div className="ACmembertext">
              <p>加入會員領養毛孩</p>
            </div>
          </div>
          <div id="m-ACmember-hotel">
            <div className="ACmembericon">
              <BiHomeAlt />
            </div>
            <div className="ACmembertext">
              <p>毛孩旅宿享5%回饋</p>
            </div>
          </div>
          <div id="m-ACmember-ID">
            <div className="ACmembericon">
              <BiGift />
            </div>
            <div className="ACmembertext">
              <p>專屬毛孩ID領生日禮</p>
            </div>
          </div>
          <div id="m-ACmember-999">
            <div className="ACmembericon">
              <BiCartAlt />
            </div>
            <div className="ACmembertext">
              <p>全館滿NT$999免運</p>
            </div>
          </div>
          <div className="m-joinMemberBtn my-3">
            <Link to="/member">
              <Button
                variant="outline-primary"
                className="m-ACYellowOutlineBtn"
              >
                <div>
                  <FaPaw />
                  &nbsp;&nbsp;&nbsp;立即加入會員
                </div>
              </Button>
            </Link>
          </div>
        </Row>
      </Container>
    </>
  )
}

export default HomeCarousel
