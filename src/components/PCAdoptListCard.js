import React from 'react'
import { Container, Row, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AdoptCard1 from '../images/AdoptCard1_300x300.jpg'
import AdoptCard2 from '../images/AdoptCard2_300x300.jpg'
import AdoptCard3 from '../images/AdoptCard3_300x300.jpg'
import '../Styles/AdoptListCard.scss'

function PCAdoptListCard() {
  return (
    <>
      <Container className="py-5 d-md-block d-none">
        <Row className="d-flex justify-content-center">
          <div className="col-10 col-md-3">
            <Card className="card1 p-1">
              <Link to="/adoptlist" className="adoptCardContent">
                <Card.Img
                  src={AdoptCard1}
                  className="avatar mt-3 mx-auto d-flex justify-content-center"
                />
                <Card.Body>
                  <Card.Title className="cardTitle">小呆</Card.Title>
                  <Card.Text className="cardText">
                    小呆是隻2歲左右的公貓，看起來呆呆的他，實際上是很聰明、愛玩而且貪吃的貓咪喔！
                  </Card.Text>
                </Card.Body>
              </Link>
            </Card>
            <div className="btnSection d-flex justify-content-center pt-4 p-0">
              <Link to="/adoptlist" className="knowmoreBtn">
                <Button className="YellowOutlineBtn d-md-block d-none">
                  了解更多
                </Button>
              </Link>
            </div>
          </div>
          <div className="col-10 col-md-3">
            <Card className="card1 p-1">
              <Link to="/adoptlist" className="adoptCardContent">
                <Card.Img
                  src={AdoptCard2}
                  className="avatar mt-3 mx-auto d-flex justify-content-center"
                />
                <Card.Body>
                  <Card.Title className="cardTitle">
                    小虎、小斑姐妹花
                  </Card.Title>
                  <Card.Text className="cardText">
                    小虎和小斑是姊妹，出生沒多久媽媽就不見了，獨留她們在炙熱的陽台上，幸好愛媽即時發現...
                  </Card.Text>
                </Card.Body>
              </Link>
            </Card>
            <div className="btnSection d-flex justify-content-center pt-4 p-0">
              <Link to="/adoptlist" className="knowmoreBtn">
                <Button className="YellowOutlineBtn d-md-block d-none">
                  了解更多
                </Button>
              </Link>
            </div>
          </div>
          <div className="col-10 col-md-3">
            <Card className="card1 p-1">
              <Link to="/adoptlist" className="adoptCardContent">
                <Card.Img
                  src={AdoptCard3}
                  className="avatar mt-3 mx-auto d-flex justify-content-center"
                />
                <Card.Body>
                  <Card.Title className="cardTitle">毛毛</Card.Title>
                  <Card.Text className="cardText">
                    被發現時躲在大橋下發抖，幸好在愛媽的幫助下逐漸恢復健康，現在等待有緣人給他一個家！
                  </Card.Text>
                </Card.Body>
              </Link>
            </Card>
            <div className="btnSection d-flex justify-content-center pt-4 p-0">
              <Link to="/adoptlist" className="knowmoreBtn">
                <Button className="YellowOutlineBtn d-md-block d-none">
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

export default PCAdoptListCard
