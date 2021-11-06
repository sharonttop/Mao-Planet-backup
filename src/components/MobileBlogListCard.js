import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import BlogPic1 from '../images/Home/BlogPic1_150x150.jpg'
import '../Styles/BlogListCard.scss'

function MobileBlogListCard(props) {
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
              <img src={BlogPic1} alt="" />
            </div>
            <div className="col pr-0">
              <h6 className="ACblogListCardTitle">養貓新手必備知識</h6>
              <p className="m-ACblogListText">
                這篇文章是寫給家中有一歲以內的幼貓、或是準備新養貓的新手家長們看的...
              </p>
            </div>
          </Link>
        </Row>
      </Container>
    </>
  )
}

export default MobileBlogListCard
