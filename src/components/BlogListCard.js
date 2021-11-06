import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaPaw } from 'react-icons/fa'
import BlogPic1 from '../images/Home/BlogPic1_150x150.jpg'
import '../Styles/BlogListCard.scss'
import '../Styles/ACButtons.scss'

function BlogListCard() {
  return (
    <>
      <div className="col-10 col-md-4 d-md-block d-none">
        <Card className="ACblogListCard1 p-1">
          <Link to="/bloglist/blogarticle1" className="ACblogListCardContent">
            <Card.Img
              src={BlogPic1}
              className="ACblogListCardPic mt-3 mx-auto d-flex justify-content-center"
            />
            <Card.Body>
              <Card.Title className="ACblogListCardTitle">
                養貓新手必備知識
              </Card.Title>
              <Card.Text className="ACblogListCardText">
                這篇文章是寫給家中有一歲以內的幼貓、或是準備新養貓的新手家長們看的，希望能解除大家心中的疑惑，充實醫療保健相關的知識，讓新手貓奴們升級成更稱職的毛孩爸媽！
              </Card.Text>
            </Card.Body>
          </Link>
        </Card>

        <div className="ACblogListBtn d-flex justify-content-center p-0 pt-4">
          <Link to="/bloglist/blogarticle1" className="ACYellowBtn">
            <Button
              variant="outline-primary"
              className="ACYellowOutlineBtn d-md-block d-none"
            >
              <div>
                <FaPaw />
                &nbsp;&nbsp;&nbsp;我要繼續閱讀
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default BlogListCard
