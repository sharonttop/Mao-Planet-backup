import React from 'react'
import { Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaPaw } from 'react-icons/fa'
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
} from 'mdbreact'

import BlogCatCard1 from '../images/BlogList/BlogCatCard1_300x300.jpg'
import BlogCatCard4 from '../images/BlogList/BlogCatCard4_650x650.jpg'
import '../Styles/BlogHotTopicCarousel.scss'
import '../Styles/ACButtons.scss'

const BlogHotTopicCarousel = (props) => {
  return (
    <MDBContainer id="ACHotCarousel" className="d-flex d-md-block d-none">
      <MDBCarousel
        activeItem={1}
        length={2}
        showControls={true}
        showIndicators={false}
        className="z-depth-1"
        slide
        onHoverStop={true}
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <Row>
                <div className="col pr-5">
                  <div className="ACblogHotTag my-3">
                    <span>&nbsp;&nbsp;HOT TOPIC!</span>
                  </div>
                  <h3 className="AChotTopicTitle">
                    別讓貓咪不開心～為什麼貓咪常亂尿尿？
                  </h3>
                  <br />
                  <p className="AChotTopicText">
                    貓咪常在家裡到處亂尿，每天回家打開門、只能聞到刺鼻的尿騷味；常常擔心放在床上、椅子上的衣服會不會淪陷於貓尿…以上也是你的生活寫照嗎？貓咪會亂尿，多是「疾病」、「環境」及「心理」三大原因造成。
                  </p>
                  <div>
                    <Link to="#/" className="ACGrayBtn">
                      <Button className="ACGrayOutlineBtn AChotTopicBtn mx-auto mt-5 d-md-block d-none">
                        <div>
                          <FaPaw />
                          &nbsp;&nbsp;&nbsp;我要繼續閱讀
                        </div>
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="AChotTopicPic col-md-6 my-3">
                  <img src={BlogCatCard4} alt="First slide" />
                </div>
              </Row>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <Row>
                <div className="col pr-5">
                  <div className="ACblogHotTag my-3">
                    <span>&nbsp;&nbsp;HOT TOPIC!</span>
                  </div>
                  <h3 className="AChotTopicTitle">
                    新手上路：養貓新手必備知識
                  </h3>
                  <br />
                  <p className="AChotTopicText">
                    這篇文章是寫給家中有一歲以內的幼貓、或是準備新養貓的新手家長們看的，希望能解除大家心中的疑惑、充實醫療保健相關的知識，讓新手貓奴們升級成更稱職的毛孩爸媽！
                  </p>
                  <div>
                    <Link to="/bloglist/blogarticle1" className="ACGrayBtn">
                      <Button
                        variant="outline-primary"
                        className="ACGrayOutlineBtn AChotTopicBtn mx-auto mt-5 d-md-block d-none"
                      >
                        <div>
                          <FaPaw />
                          &nbsp;&nbsp;&nbsp;我要繼續閱讀
                        </div>
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="AChotTopicPic col-md-6 my-3">
                  <img src={BlogCatCard1} alt="First slide" />
                </div>
              </Row>
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  )
}

export default BlogHotTopicCarousel
