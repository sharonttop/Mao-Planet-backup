import React from 'react'
import AdoptCard1 from '../images/Home/AdoptCard1_300x300.jpg'
import AdoptCard2 from '../images/Home/AdoptCard2_300x300.jpg'
import AdoptCard3 from '../images/Home/AdoptCard3_300x300.jpg'
import '../Styles/HomeAdoptCard.scss'

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

const MobileHomeAdoptCard = () => {
  return (
    <MDBContainer className="d-md-none d-block col-10">
      <MDBCarousel
        activeItem={1}
        length={3}
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
                    className="m-ACadoptAvatar m-4"
                    src={AdoptCard1}
                  />
                  <MDBCardBody>
                    <MDBCardTitle>小呆</MDBCardTitle>
                    <MDBCardText className="m-ACadoptcardText mb-4">
                      小呆是隻2歲左右的公貓，看起來呆呆的他，實際上是很聰明、愛玩而且貪吃的貓咪喔！
                    </MDBCardText>
                    <MDBBtn
                      href="/adoptlist"
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
                <MDBCard className="mb-2">
                  <MDBCardImage
                    className="m-ACadoptAvatar m-4"
                    src={AdoptCard2}
                  />
                  <MDBCardBody>
                    <MDBCardTitle>小虎、小斑姐妹花</MDBCardTitle>
                    <MDBCardText className="m-ACadoptcardText mb-4">
                      小虎和小斑是姊妹，出生沒多久媽媽就不見了，獨留她們在炙熱的陽台上，幸好愛媽即時發現...
                    </MDBCardText>
                    <MDBBtn
                      href="/adoptlist"
                      className="m-ACYellowOutlineBtn d-flex justify-content-center mx-auto"
                    >
                      了解更多
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage
                    className="m-ACadoptAvatar m-4"
                    src={AdoptCard3}
                  />
                  <MDBCardBody>
                    <MDBCardTitle>毛毛</MDBCardTitle>
                    <MDBCardText className="m-ACadoptcardText mb-4">
                      被發現時躲在大橋下發抖，幸好在愛媽的幫助下逐漸恢復健康，現在等待有緣人給他一個家！
                    </MDBCardText>
                    <MDBBtn
                      href="/adoptlist"
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

export default MobileHomeAdoptCard
