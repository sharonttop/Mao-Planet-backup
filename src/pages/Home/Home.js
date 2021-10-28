import React from 'react'
import { Container, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaPaw } from 'react-icons/fa'
import MyCarousel from '../../components/MyCarousel'
import BlogSection from '../../components/BlogSection'
import DogProductBN from '../../images/DogProductBN_720x600.jpg'
import CatProductBN from '../../images/CatProductBN_720x600.jpg'
import NewArrCard1 from '../../images/NewArrCard1_350x500.jpg'
import NewArrCard2 from '../../images/NewArrCard2_350x500.jpg'
import NewArrCard3 from '../../images/NewArrCard3_350x500.jpg'
import AdoptBN from '../../images/AdoptBN_450x600.png'
import './Home.scss'

function Home(props) {
  // const { auth } = props
  return (
    <>
      <MyCarousel />
      {/* <h2>{auth ? '會員已登入' : '未登入'}</h2> */}
      <Container fluid id="adoptSection" className="p-0">
        <Row>
          <div className="AdoptTitle">
            <span>
              Need <br />A Home.
            </span>
          </div>

          <div className="AdoptText col-md-2 pr-md-4">
            <h2>毛孩找家</h2>
            <p>
              你的一眼瞬間，就讓我有了被愛的機會，你願意帶我走，給我們一個家嗎？
            </p>
          </div>
          <div>
            <Link to="/adoptlist">
              <Button className="GrayOutlineBtn AdoptBtn">
                <div>
                  <FaPaw />
                  &nbsp;&nbsp;&nbsp;帶我一起回家
                </div>
              </Button>
            </Link>
          </div>

          <div className="AdoptBN col-12 d-flex justify-content-md-center align-items-md-center">
            <img src={AdoptBN} alt="" />
          </div>
        </Row>
      </Container>
      {/* PC:毛孩雜貨區塊 */}
      <Container fluid id="productSection" className="d-flex p-0">
        <Row>
          <div className="DogProductBN col-md-6 col-12 pr-2">
            <img src={DogProductBN} alt="" />
            <div>
              <Link to="/productlist/dog">
                <Button className="GrayOutlineBtn DogBtn">
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

      <Container id="productSection3Card" className="p-0">
        <Row>
          <div className="NewArrCard col-md-4 col-12 my-5 mx-auto">
            <Link to="/productlist/cat">
              <img src={NewArrCard1} alt="" />
              <div className="tag">
                <span>NEW!</span>
              </div>
              <div className="NewArrCardText">
                <span>New Arrival</span>
                <p>貓貓新品到貨</p>
              </div>
            </Link>
          </div>
          <div className="NewArrCard col-md-4 col-12 my-5 mx-auto">
            <Link to="/productlist/cat">
              <img src={NewArrCard2} alt="" />
              <div className="tag">
                <span>HOT!</span>
              </div>
              <div className="NewArrCardText">
                <span>HOT SALES</span>
                <p>貓貓熱銷補貨</p>
              </div>
            </Link>
          </div>
          <div className="NewArrCard col-md-4 col-12 my-5 mx-auto">
            <Link to="/productlist/dog">
              <img src={NewArrCard3} alt="" />
              <div className="tag">
                <span>NEW!</span>
              </div>
              <div className="NewArrCardText">
                <span>New Arrival</span>
                <p>狗狗新品到貨</p>
              </div>
            </Link>
          </div>
        </Row>
      </Container>

      <BlogSection />
    </>
  )
}

export default Home
