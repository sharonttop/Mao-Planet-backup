import React from 'react'
import { Container, Row, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AdoptCard1 from '../images/Home/AdoptCard1_300x300.jpg'
import '../Styles/BlogListCard.scss'

function BlogListCard() {
  return (
    <>
      <Container className="py-5 d-md-block d-none">
        <Row className="d-flex justify-content-center">
          <div className="col-10 col-md-3">
            <Card className="ACcard1 p-1">
              <Link to="/adoptlist" className="ACadoptCardContent">
                <Card.Img
                  src={AdoptCard1}
                  className="ACadoptAvatar mt-3 mx-auto d-flex justify-content-center"
                />
                <Card.Body>
                  <Card.Title className="ACadoptcardTitle">小呆</Card.Title>
                  <Card.Text className="ACadoptcardText">
                    小呆是隻2歲左右的公貓，看起來呆呆的他，實際上是很聰明、愛玩而且貪吃的貓咪喔！
                  </Card.Text>
                </Card.Body>
              </Link>
            </Card>
            <div className="ACadoptBtnSection d-flex justify-content-center pt-4 p-0">
              <Link to="/adoptlist" className="ACknowmoreBtn">
                <Button className="ACYellowOutlineBtn d-md-block d-none">
                  了解更多
                </Button>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </>
  )
}

export default BlogListCard
