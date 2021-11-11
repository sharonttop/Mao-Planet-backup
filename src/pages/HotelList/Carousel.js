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

const MultiCarouselPage = () => {
  return (
    <MDBCarousel activeItem={1} length={2} slide={true}>
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBCol md="4">
            <MDBCard className="mb-2">
              <MDBCardImage
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
              />
              <MDBCardBody>
                <MDBCardTitle>MDBCard title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </MDBCardText>
                <MDBBtn color="primary">MDBBtn</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  )
}

export default MultiCarouselPage
