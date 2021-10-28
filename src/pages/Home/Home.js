import React from 'react'
import { Container, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaPaw } from 'react-icons/fa'
import MyCarousel from '../../components/MyCarousel'
import BlogSection from '../../components/BlogSection'
import DogProductBN from '../../images/DogProductBN_720x600.jpg'
import CatProductBN from '../../images/CatProductBN_720x600.jpg'
import './Home.scss'

function Home(props) {
  // const { auth } = props
  return (
    <>
      <MyCarousel />
      {/* <h2>{auth ? '會員已登入' : '未登入'}</h2> */}
      <Container fluid className="d-none d-md-block p-0 mb-5">
        <Row>
          <div className="DogProductBN col-md-6 col-12 pr-2">
            <img src={DogProductBN} alt="" />
            <div>
              <Link to="/productlist/dog">
                <Button
                  variant="outline-primary"
                  className="GrayOutlineBtn DogBtn"
                >
                  <div>
                    <FaPaw />
                    &nbsp;&nbsp;&nbsp;逛狗狗雜貨館
                  </div>
                </Button>
              </Link>
            </div>
          </div>
          <div className="CatProductBN col-md-6 col-12 pl-2">
            <img src={CatProductBN} alt="" />
            <div>
              <Link to="/productlist/cat">
                <Button
                  variant="outline-primary"
                  className="YellowOutlineBtn CatBtn"
                >
                  <div>
                    <FaPaw />
                    &nbsp;&nbsp;&nbsp;逛貓貓雜貨館
                  </div>
                </Button>
              </Link>
            </div>
          </div>
        </Row>
      </Container>

      <BlogSection />
    </>
  )
}

export default Home
