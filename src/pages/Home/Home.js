import React from 'react'
import { Container, Row, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaPaw } from 'react-icons/fa'
import MyCarousel from '../../components/MyCarousel'
import BlogSection from '../../components/BlogSection'
import PCAdoptListCard from '../../components/PCAdoptListCard'
import MobileAdoptListCard from '../../components/MobileAdoptListCard'
import DogProductBN from '../../images/DogProductBN_720x600.jpg'
import CatProductBN from '../../images/CatProductBN_720x600.jpg'
import NewArrCard1 from '../../images/NewArrCard1_350x500.jpg'
import NewArrCard2 from '../../images/NewArrCard2_350x500.jpg'
import NewArrCard3 from '../../images/NewArrCard3_350x500.jpg'
import AdoptBN from '../../images/AdoptBN_450x600.png'
import HotelBN1 from '../../images/HotelBN1_450x600.png'
import HotelBN2 from '../../images/HotelBN2_450x600.png'
import './Home.scss'

function Home(props) {
  // const { auth } = props
  return (
    <>
      <MyCarousel />
      {/* <h2>{auth ? '會員已登入' : '未登入'}</h2> */}

      {/* 毛孩找家 */}
      <Container fluid id="adoptSection" className="p-0">
        <Row>
          <div className="AdoptTitle d-md-block d-none">
            <span>
              Need <br />A Home.
            </span>
          </div>

          <div className="AdoptBN col-md-5 col-12 d-flex justify-content-center align-items-center mx-auto p-0">
            <img src={AdoptBN} alt="" />
          </div>

          {/* PC */}
          <div className="AdoptText col-md-2 pr-4 d-md-block d-none">
            <h2>毛孩找家</h2>
            <p>
              你的一眼瞬間，就讓我有了被愛的機會，你願意帶我走，給我們一個家嗎？
            </p>
          </div>
          <div>
            <Link to="/adoptlist">
              <Button className="GrayOutlineBtn AdoptBtn my-3 d-md-block d-none">
                <div>
                  <FaPaw />
                  &nbsp;&nbsp;&nbsp;帶我一起回家
                </div>
              </Button>
            </Link>
          </div>

          {/* mobile */}
          <div className="m-AdoptText mx-auto col-9 d-block d-md-none p-0">
            <h2>毛孩找家</h2>
            <p>
              你的一眼瞬間，就讓我有了被愛的機會，你願意帶我走，給我們一個家嗎？
            </p>
          </div>
        </Row>
      </Container>

      {/* 毛孩找家3張卡片 */}
      <Container fluid id="adoptSection3Card" className="d-flex p-0 pt-5">
        <PCAdoptListCard />
        <MobileAdoptListCard />
      </Container>

      {/* 毛孩雜貨 */}
      <Container fluid id="productSection" className="d-flex p-0">
        <Row>
          <div className="DogProductBN col-md-6 d-md-block d-none">
            <img src={DogProductBN} alt="" />
          </div>
          {/* PC */}
          <div>
            <Link to="/productlist/dog">
              <Button className="GrayOutlineBtn DogBtn d-md-block d-none">
                <div>
                  <FaPaw />
                  &nbsp;&nbsp;&nbsp;逛狗狗雜貨館
                </div>
              </Button>
            </Link>
          </div>
          {/* mobile */}
          <div className="m-DogProductBN col-12 d-md-none d-block">
            <img src={DogProductBN} alt="" />
          </div>
          <div>
            <Link to="/productlist/dog">
              <Button className="m-GrayOutlineBtn m-DogBtn d-md-none d-block">
                <div>
                  <FaPaw />
                  &nbsp;&nbsp;&nbsp;逛狗狗雜貨館
                </div>
              </Button>
            </Link>
          </div>

          {/* PC */}
          <div className="CatProductBN col-md-6 d-md-block d-none">
            <img src={CatProductBN} alt="" />
          </div>
          <div>
            <Link to="/productlist/cat">
              <Button
                variant="outline-primary"
                className="YellowOutlineBtn CatBtn d-md-block d-none"
              >
                <div>
                  <FaPaw />
                  &nbsp;&nbsp;&nbsp;逛貓貓雜貨館
                </div>
              </Button>
            </Link>
          </div>
          {/* mobile */}
          <div className="m-CatProductBN col-12 d-md-none d-block">
            <img src={CatProductBN} alt="" />
          </div>
          <div>
            <Link to="/productlist/cat">
              <Button
                variant="outline-primary"
                className="m-YellowOutlineBtn m-CatBtn d-md-none d-block"
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

      <Container id="productSection3Card" className="p-0 d-md-block d-none">
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

      {/* 毛孩旅宿 */}
      {/* PC */}
      <Container fluid id="hotelSection" className="p-0">
        <Row>
          <div className="HotelBN col-md-5 d-md-block d-none">
            <img src={HotelBN1} alt="" />
          </div>
          <div className="YellowDeco col-md-5 d-md-block d-none"></div>
          <div className="HotelTitle">
            <span className="d-md-block d-none">
              Start <br />
              My Holiday!
            </span>
          </div>

          <div className="HotelText col-md-3 d-md-block d-none">
            <h2>毛孩旅宿</h2>
            <p>
              你即將遠行，也別讓我獨自在家苦苦等待，我可以在這裡也享受毛孩專屬的度假天堂。
            </p>
          </div>

          {/* mobile */}
          <div className="m-HotelBN col-12 d-block d-md-none p-0 d-flex justify-content-center">
            <img src={HotelBN1} alt="" />
          </div>
          <div className="m-HotelText mx-auto mt-5 col-9 d-block d-md-none p-0">
            <h2>毛孩旅宿</h2>
            <p>
              你即將遠行，也別讓我獨自在家苦苦等待，我可以在這裡也享受毛孩專屬的度假天堂。
            </p>
          </div>
        </Row>
      </Container>
      <Container fluid id="salonSection" className="p-0">
        {/* PC */}
        <Row>
          <div className="SalonBN col-md-5 d-md-block d-none">
            <img src={HotelBN2} alt="" />
          </div>
          <div className="SalonTitle">
            <span className="d-md-block d-none">Am I Pretty?</span>
          </div>

          <div className="SalonText col-md-3 d-md-block d-none">
            <h2>毛孩愛美</h2>
            <p>
              我雖然天生可愛，但也需要後天保養，每個月定期帶我理毛、洗澡、剪指甲吧！
            </p>
          </div>

          <div className="GrayDeco GrayDeco1 col-md-5 d-md-block d-none"></div>
          <div className="GrayDeco GrayDeco2 col-md-5 d-md-block d-none"></div>

          {/* mobile */}
          <div className="m-SalonBN col-12 d-block d-md-none p-0 d-flex justify-content-center">
            <img src={HotelBN2} alt="" />
          </div>
          <div className="m-SalonText mx-auto mt-5 col-9 d-block d-md-none p-0">
            <h2>毛孩愛美</h2>
            <p>
              我雖然天生可愛，但也需要後天保養，每個月定期帶我理毛、洗澡、剪指甲吧！
            </p>
          </div>
        </Row>
      </Container>
      <div className="HotelBtn d-flex justify-content-center p-0">
        <Link to="/hotellist">
          <Button className="YellowOutlineBtn">
            <div>
              <FaPaw />
              &nbsp;&nbsp;&nbsp;安排毛孩假期
            </div>
          </Button>
        </Link>
      </div>

      <BlogSection />
      </>
  )
}

export default Home
