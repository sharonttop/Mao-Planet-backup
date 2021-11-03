import React from 'react'
import { Container } from 'react-bootstrap'

import { FaPaw } from 'react-icons/fa'
import BlogCatCard4 from '../images/BlogList/BlogCatCard4_650x650.jpg'
import BlogDogCard1 from '../images/BlogList/BlogDogCard1_300x300.jpg'
import '../Styles/BlogListCardSection.scss'

import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from 'mdbreact'

const MobileBlogHotTopic = () => {
  return (
    <>
      <Container>
        <div className="m-ACblogHotTag d-flex justify-content-center align-items-center d-md-none d-block p-0">
          <span>HOT TOPIC!</span>
        </div>
      </Container>

      <MDBContainer className="d-md-none d-block col-10 mb-5 p-0">
        <MDBCarousel
          activeItem={1}
          length={2}
          slide={true}
          showControls={false}
          showIndicators={false}
          multiItem
        >
          <MDBCarouselInner>
            <MDBRow>
              <MDBCarouselItem itemId="1">
                <MDBCol md="4">
                  <MDBCard className="mb-2">
                    <MDBCardImage
                      className="m-ACHotTopicPic m-4"
                      src={BlogCatCard4}
                    />
                    <MDBCardBody>
                      <MDBCardTitle>
                        別讓貓咪不開心～為什麼貓咪常亂尿尿？
                      </MDBCardTitle>
                      <MDBCardText className="m-ACHotTopicText mb-4">
                        貓咪常在家裡到處亂尿，每天回家打開門、只能聞到刺鼻的尿騷味；常常擔心放在床上、椅子上的衣服會不會淪陷於貓尿…以上也是你的生活寫照嗎？
                      </MDBCardText>
                      <MDBBtn
                        href="/adoptlist"
                        className="m-ACGrayOutlineBtn d-flex justify-content-center mx-auto"
                      >
                        <div>
                          <FaPaw />
                          &nbsp;&nbsp;&nbsp;我要繼續閱讀
                        </div>
                      </MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <MDBCol md="4">
                  <MDBCard className="mb-2">
                    <MDBCardImage
                      className="m-ACHotTopicPic m-4"
                      src={BlogDogCard1}
                    />
                    <MDBCardBody>
                      <MDBCardTitle>如何幫狗狗選擇美容店？</MDBCardTitle>
                      <MDBCardText className="m-ACHotTopicText mb-4">
                        寵物美容院比比皆是，目前寵物美容業並沒有公定的標準規定，多是靠自主經營或寵物美容老師傳授，毛爸毛媽該如何選擇，才能保障自己和毛孩的權益呢？
                      </MDBCardText>
                      <MDBBtn
                        href="/adoptlist"
                        className="m-ACGrayOutlineBtn d-flex justify-content-center mx-auto"
                      >
                        <div>
                          <FaPaw />
                          &nbsp;&nbsp;&nbsp;我要繼續閱讀
                        </div>
                      </MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBCarouselItem>
            </MDBRow>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    </>
  )
}

export default MobileBlogHotTopic
