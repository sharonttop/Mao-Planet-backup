import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AdoptCard1 from '../images/Home/AdoptCard1_300x300.jpg'
import AdoptCard2 from '../images/Home/AdoptCard2_300x300.jpg'
import AdoptCard3 from '../images/Home/AdoptCard3_300x300.jpg'
import '../Styles/HomeAdoptCard.scss'

function PCHomeAdoptCard() {
  return (
    <>
      <div className="col-12 mt-5 d-md-block d-none">
        <div className="d-flex justify-content-center mx-auto">
          <div>
            <Card className="ACadoptCard p-1 mx-3">
              <Link to="/adoptlist/adoptpage/36" className="ACadoptCardContent">
                <Card.Img
                  src={AdoptCard1}
                  className="ACadoptAvatar mt-3 mx-auto pt-3 d-flex justify-content-center"
                />
                <Card.Body>
                  <Card.Title className="ACadoptcardTitle pt-3">
                    小呆
                  </Card.Title>
                  <Card.Text className="ACadoptcardText">
                    小呆是隻2歲左右的公貓，看起來呆呆的他，實際上是很聰明、愛玩而且貪吃的貓咪喔！等待有緣人來帶他回家！
                  </Card.Text>
                </Card.Body>
              </Link>
            </Card>
            <div className="ACadoptBtnSection d-flex justify-content-center pt-4 p-0">
              <Link to="/adoptlist/adoptpage/36" className="ACknowmoreBtn">
                <Button className="ACYellowOutlineBtn d-md-block d-none">
                  了解更多
                </Button>
              </Link>
            </div>
          </div>
          <div>
            <Card className="ACadoptCard p-1 mx-3">
              <Link to="/adoptlist/adoptpage/38" className="ACadoptCardContent">
                <Card.Img
                  src={AdoptCard2}
                  className="ACadoptAvatar mt-3 mx-auto pt-3 d-flex justify-content-center"
                />
                <Card.Body>
                  <Card.Title className="ACadoptcardTitle pt-3">
                    牛奶、花生姐妹花
                  </Card.Title>
                  <Card.Text className="ACadoptcardText">
                    牛奶和花生是姊妹，出生沒多久媽媽就不見了，獨留她們在炙熱的陽台上，幸好愛媽即時發現才讓他們活了下來！
                  </Card.Text>
                </Card.Body>
              </Link>
            </Card>
            <div className="ACadoptBtnSection d-flex justify-content-center pt-4 p-0">
              <Link to="/adoptlist/adoptpage/38" className="ACknowmoreBtn">
                <Button className="ACYellowOutlineBtn d-md-block d-none">
                  了解更多
                </Button>
              </Link>
            </div>
          </div>
          <div>
            <Card className="ACadoptCard p-1 mx-3">
              <Link to="/adoptlist/adoptpage/39" className="ACadoptCardContent">
                <Card.Img
                  src={AdoptCard3}
                  className="ACadoptAvatar mt-3 mx-auto pt-3 d-flex justify-content-center"
                />
                <Card.Body>
                  <Card.Title className="ACadoptcardTitle pt-3">
                    毛毛
                  </Card.Title>
                  <Card.Text className="ACadoptcardText">
                    被發現時躲在下著大雨的大橋下發抖，幸好在愛媽的幫助下逐漸恢復健康，毛色變得光滑柔亮，現在等待有緣人給他一個家!
                  </Card.Text>
                </Card.Body>
              </Link>
            </Card>
            <div className="ACadoptBtnSection d-flex justify-content-center pt-4 p-0">
              <Link to="/adoptlist/adoptpage/39" className="ACknowmoreBtn">
                <Button className="ACYellowOutlineBtn d-md-block d-none">
                  了解更多
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PCHomeAdoptCard
