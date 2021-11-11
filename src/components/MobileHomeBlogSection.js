import React from 'react'
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

import BlogPic1 from '../images/Home/BlogPic1_250x250.jpg'
import BlogPic2 from '../images/Home/BlogPic2_250x250.jpg'
import '../Styles/ACButtons.scss'
import '../Styles/HomeBlogSection.scss'

const MobileHomeBlogSection = () => {
  return (
    <MDBContainer className="d-md-none d-block col-10">
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
                <MDBCard className="mt-4 mb-2">
                  <MDBCardImage
                    className="m-ACblogIntroPic m-4"
                    src={BlogPic1}
                  />
                  <MDBCardBody>
                    <MDBCardTitle>養貓新手必備知識</MDBCardTitle>
                    <MDBCardText className="m-ACblogIntroText mb-4">
                      這篇文章是寫給家中有一歲以內的幼貓、或是準備新養貓的新手家長們看的，希望能解除大家心中的疑惑，充實醫療保健相關的知識，讓新手貓奴們升級成更稱職的毛孩爸媽！
                    </MDBCardText>
                    <MDBBtn
                      href="/bloglist/blogarticle1"
                      className="m-ACYellowOutlineBtn d-flex justify-content-center mx-auto"
                    >
                      了解更多
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBCol md="4">
                <MDBCard className="mt-4 mb-2">
                  <MDBCardImage
                    className="m-ACblogIntroPic m-4"
                    src={BlogPic2}
                  />
                  <MDBCardBody>
                    <MDBCardTitle>如何幫狗狗選擇美容店？</MDBCardTitle>
                    <MDBCardText className="m-ACblogIntroText mb-4">
                      寵物美容院比比皆是，目前寵物美容業並沒有公定的標準規定，多是靠自主經營或寵物美容老師傳授，毛爸毛媽該如何選擇，才能保障自己和毛孩的權益呢？
                    </MDBCardText>
                    <MDBBtn
                      href="/bloglist"
                      className="m-ACYellowOutlineBtn d-flex justify-content-center mx-auto"
                    >
                      了解更多
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBCarouselItem>
          </MDBRow>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  )
}

export default MobileHomeBlogSection
