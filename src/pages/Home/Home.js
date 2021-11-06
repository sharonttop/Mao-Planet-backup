import React from 'react'
import { Container, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaPaw } from 'react-icons/fa'
import HomeCarousel from '../../components/HomeCarousel'
import PCHomeAdoptCard from '../../components/PCHomeAdoptCard'
import MobileHomeAdoptCard from '../../components/MobileHomeAdoptCard'
import HomeProductCardSection from '../../components/HomeProductCardSection'
import HomeBlogSection from '../../components/HomeBlogSection'
// import MyFooter from '../../components/MyFooter'

import DogProductBN from '../../images/Home/DogProductBN_720x600.jpg'
import CatProductBN from '../../images/Home/CatProductBN_720x600.jpg'
import NewArrCard1 from '../../images/Home/NewArrCard1_350x500.jpg'
import NewArrCard2 from '../../images/Home/NewArrCard2_350x500.jpg'
import NewArrCard3 from '../../images/Home/NewArrCard3_350x500.jpg'
import AdoptBN from '../../images/Home/AdoptBN_450x600.png'
import HotelBN1 from '../../images/Home/HotelBN1_450x600.png'
import HotelBN2 from '../../images/Home/HotelBN2_450x600.png'
import './Home.scss'

function Home(props) {
  // const { auth } = props
  return (
    <>
      <HomeCarousel />
      {/* <h2>{auth ? '會員已登入' : '未登入'}</h2> */}

      {/* 毛孩找家 */}
      <Container fluid id="adoptSection" className="p-0">
        <Row>
          <div className="ACadoptTitle d-md-block d-none">
            <span>
              Need <br />A Home.
            </span>
          </div>

          <div className="ACadoptBN col-md-5 col-12 d-flex justify-content-center align-items-center mx-auto p-0">
            <img src={AdoptBN} alt="" />
          </div>

          {/* PC */}
          <div className="ACadoptText col-md-2 pr-4 d-md-block d-none">
            <h2>毛孩找家</h2>
            <p>
              你的一眼瞬間，就讓我有了被愛的機會，你願意帶我走，給我們一個家嗎？
            </p>
          </div>
          <div>
            <Link to="/adoptlist">
              <Button className="ACGrayOutlineBtn ACadoptBtn  my-3 d-md-block d-none">
                <div>
                  <FaPaw />
                  &nbsp;&nbsp;&nbsp;帶我一起回家
                </div>
              </Button>
            </Link>
          </div>

          {/* mobile */}
          <div className="m-ACadoptText mx-auto col-9 d-block d-md-none p-0">
            <h2>毛孩找家</h2>
            <p>
              你的一眼瞬間，就讓我有了被愛的機會，你願意帶我走，給我們一個家嗎？
            </p>
          </div>
        </Row>
      </Container>

      {/* 毛孩找家3張卡片 */}
      <Container fluid id="ACadoptSection3Card" className="d-flex p-0 pt-5">
        <PCHomeAdoptCard />
        <MobileHomeAdoptCard />
      </Container>

      {/* 毛孩雜貨 */}
      <Container fluid id="ACproductSection" className="d-flex p-0">
        <Row>
          <div className="ACdogProductBN col-md-6 d-md-block d-none">
            <img src={DogProductBN} alt="" />
          </div>
          {/* PC */}
          <div>
            <Link to="/productlist/dog">
              <Button className="ACGrayOutlineBtn ACdogBtn d-md-block d-none">
                <div>
                  <FaPaw />
                  &nbsp;&nbsp;&nbsp;逛狗狗雜貨館
                </div>
              </Button>
            </Link>
          </div>
          {/* mobile */}
          <div className="m-ACdogProductBN col-12 d-md-none d-block">
            <img src={DogProductBN} alt="" />
          </div>
          <div>
            <Link to="/productlist/dog">
              <Button className="m-ACGrayOutlineBtn m-ACdogBtn  d-md-none d-block">
                <div>
                  <FaPaw />
                  &nbsp;&nbsp;&nbsp;逛狗狗雜貨館
                </div>
              </Button>
            </Link>
          </div>

          {/* PC */}
          <div className="ACcatProductBN col-md-6 d-md-block d-none">
            <img src={CatProductBN} alt="" />
          </div>
          <div>
            <Link to="/productlist/cat">
              <Button
                variant="outline-primary"
                className="ACYellowOutlineBtn ACcatBtn d-md-block d-none"
              >
                <div>
                  <FaPaw />
                  &nbsp;&nbsp;&nbsp;逛貓貓雜貨館
                </div>
              </Button>
            </Link>
          </div>
          {/* mobile */}
          <div className="m-ACcatProductBN col-12 d-md-none d-block">
            <img src={CatProductBN} alt="" />
          </div>
          <div>
            <Link to="/productlist/cat">
              <Button
                variant="outline-primary"
                className="m-ACYellowOutlineBtn m-ACcatBtn d-md-none d-block"
              >
                <div>
                  <FaPaw />
                  &nbsp;&nbsp;&nbsp;逛貓貓雜貨館
                </div>
              </Button>
            </Link>
          </div>
        </Row>
      </Container>

      <Container id="ACproductSection3Card" className="p-0 d-md-block d-none">
        <Row>
          <div className="ACnewArrCard col-md-4 col-12 mt-5 mx-auto">
            <Link to="/productlist/cat">
              <img src={NewArrCard1} alt="" />
              <div className="ACtag">
                <span>NEW!</span>
              </div>
              <div className="ACnewArrCardText">
                <span>New Arrival</span>
                <p>貓貓新品到貨</p>
              </div>
            </Link>
          </div>
          <div className="ACnewArrCard col-md-4 col-12 mt-5 mx-auto">
            <Link to="/productlist/cat">
              <img src={NewArrCard2} alt="" />
              <div className="ACtag">
                <span>HOT!</span>
              </div>
              <div className="ACnewArrCardText">
                <span>HOT SALES</span>
                <p>貓貓熱銷補貨</p>
              </div>
            </Link>
          </div>
          <div className="ACnewArrCard col-md-4 col-12 mt-5 mx-auto">
            <Link to="/productlist/dog">
              <img src={NewArrCard3} alt="" />
              <div className="ACtag">
                <span>NEW!</span>
              </div>
              <div className="ACnewArrCardText">
                <span>New Arrival</span>
                <p>狗狗新品到貨</p>
              </div>
            </Link>
          </div>
        </Row>
      </Container>

      {/* 毛孩雜貨商品卡片 */}
      <HomeProductCardSection />

      {/* 毛孩旅宿 */}
      {/* PC */}
      <Container fluid id="AChotelSection" className="p-0">
        <Row>
          <div className="AChotelBN col-md-5 d-md-block d-none">
            <img src={HotelBN1} alt="" />
          </div>
          <div className="ACYellowDeco col-md-5 d-md-block d-none"></div>
          <div className="AChotelTitle">
            <span className="d-md-block d-none">
              Start <br />
              My Holiday!
            </span>
          </div>

          <div className="AChotelText col-md-3 d-md-block d-none">
            <h2>毛孩旅宿</h2>
            <p>
              你即將遠行，也別讓我獨自在家苦苦等待，我可以在這裡也享受毛孩專屬的度假天堂。
            </p>
          </div>

          {/* mobile */}
          <div className="m-ACHotelBN col-12 d-block d-md-none p-0 d-flex justify-content-center">
            <img src={HotelBN1} alt="" />
          </div>
          <div className="m-AChotelText mx-auto mt-5 col-9 d-block d-md-none p-0">
            <h2>毛孩旅宿</h2>
            <p>
              你即將遠行，也別讓我獨自在家苦苦等待，我可以在這裡也享受毛孩專屬的度假天堂。
            </p>
          </div>
        </Row>
      </Container>
      <Container fluid id="ACsalonSection" className="p-0">
        {/* PC */}
        <Row>
          <div className="ACsalonBN col-md-5 d-md-block d-none">
            <img src={HotelBN2} alt="" />
          </div>
          <div className="ACsalonTitle">
            <span className="d-md-block d-none">Am I Pretty?</span>
          </div>

          <div className="ACsalonText col-md-3 d-md-block d-none">
            <h2>毛孩愛美</h2>
            <p>
              我雖然天生可愛，但也需要後天保養，每個月定期帶我理毛、洗澡、剪指甲吧！
            </p>
          </div>

          <div className="GrayDeco GrayDeco1 col-md-5 d-md-block d-none"></div>
          <div className="GrayDeco GrayDeco2 col-md-5 d-md-block d-none"></div>

          {/* mobile */}
          <div className="m-ACsalonBN col-12 d-block d-md-none p-0 d-flex justify-content-center">
            <img src={HotelBN2} alt="" />
          </div>
          <div className="m-ACsalonText mx-auto mt-5 col-9 d-block d-md-none p-0">
            <h2>毛孩愛美</h2>
            <p>
              我雖然天生可愛，但也需要後天保養，每個月定期帶我理毛、洗澡、剪指甲吧！
            </p>
          </div>
        </Row>
      </Container>
      <div className="AChotelBtn d-flex justify-content-center p-0">
        <Link to="/hotellist">
          <Button className="ACYellowOutlineBtn">
            <div>
              <FaPaw />
              &nbsp;&nbsp;&nbsp;安排毛孩假期
            </div>
          </Button>
        </Link>
      </div>

      <HomeBlogSection />
      {/* <MyFooter /> */}
    </>
  )
}

export default Home
