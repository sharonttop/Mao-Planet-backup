import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../Styles/BlogListCard.scss'

function MobileBlogListCard({ ArticleImg, ArticleTitle, ArticleDescription }) {
  return (
    <>
      <Container
        id="m-ACblogListCard"
        className="col-12 d-md-none d-block my-3 p-0"
      >
        <Row className="d-flex justify-content-center">
          <Link
            to="/bloglist/blogarticle1"
            className="m-ACblogListIntro d-flex"
          >
            <div className="m-ACblogListPic px-0">
              <img src={ArticleImg} alt="" />
            </div>
            <div className="col pr-0">
              <h6 className="ACblogListCardTitle">{ArticleTitle}</h6>
              <p className="m-ACblogListText">{ArticleDescription}</p>
            </div>
          </Link>
        </Row>
      </Container>
    </>
  )
}

export default MobileBlogListCard
