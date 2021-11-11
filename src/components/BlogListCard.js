import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaPaw } from 'react-icons/fa'
import '../Styles/BlogListCard.scss'
import '../Styles/ACButtons.scss'

function BlogListCard({ ArticleImg, ArticleTitle, ArticleDescription }) {
  return (
    <>
      <div className="col-10 col-md-4 d-md-block d-none">
        <Card className="ACblogListCard1 p-1">
          <Link to="/bloglist/blogarticle1" className="ACblogListCardContent">
            <Card.Img
              src={ArticleImg}
              className="ACblogListCardPic mt-3 mx-auto d-flex justify-content-center"
            />
            <Card.Body>
              <Card.Title className="ACblogListCardTitle">
                {/* 養貓新手必備知識 */}
                {ArticleTitle}
              </Card.Title>
              <Card.Text className="ACblogListCardText">
                {ArticleDescription}
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
