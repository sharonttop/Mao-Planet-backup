import React, { useEffect, useState } from 'react'
import './AdoptPage.scss'
import { FaPaw } from 'react-icons/fa'
import { AiFillMail } from 'react-icons/ai'
import Axios from 'axios'
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
} from 'mdbreact'
// img src
// import Carousel from './Carousel'

import { withRouter } from 'react-router-dom'

// import AdoptPage1 from './adoptpage-01-02_300x300.jpeg'
// import AdoptPage2 from './adoptpage-01-02_300x300.jpeg'
// import ComAvatar2 from './adoptlist-02_300x300.jpg'
//comments
import Comments from './Comments'
function AdoptPage(props) {
  console.log(props)
  const [petList, setPetList] = useState([])
  useEffect(() => {
    Axios.get('http://localhost:3002/api/getpetlist').then((response) => {
      setPetList(response.data)
    })
  }, [])

  const [adoptPage, setAdoptPage] = useState({
    sid: '',
    avatar: '',
    avatar01: '',
    avatar02: '',
    avatar03: '',
    name: '',
    type: '',
    location: '',
    gender: '',
    status: '',
    size: '',
    cell: '',
    info: '',
  })

  useEffect(() => {
    if (petList.length > 0) {
      const id = props.match.params.id
      // 如果id存在的話
      // ex.用id向伺服器(資料庫)要資料
      if (id) {
        const foundPet = petList.find((v, i) => {
          return String(v.sid) === String(id)
        })
        setAdoptPage(foundPet)
      }
    }
  }, [petList, props.match.params.id])

  return (
    <>
      {/* header */}
      <>
        <div className="MKheader-title">
          <p>
            貓咪認養資訊:
            <span className="MKtitle-text"> {adoptPage.name}</span>
          </p>
        </div>
      </>
      {/* Carousel */}
      <div className="MKAPCarousel">
        <MDBCarousel
          activeItem={1}
          length={3}
          // showControls={true}
          // showIndicators={true}
          // className="z-depth-1"
        >
          <MDBCarouselInner className="MKAPCarousel">
            <MDBCarouselItem itemId="1">
              <MDBView className="MKAPCarouselBox">
                <img
                  className="MKAPCarouselimg"
                  src={adoptPage.avatar}
                  alt="First slide"
                />
                {/* <MDBMask overlay="black-light" /> */}
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView className="MKAPCarouselBox">
                <img
                  className="MKAPCarouselimg"
                  src={adoptPage.avatar01}
                  alt="Second slide"
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView className="MKAPCarouselBox">
                <img
                  className="MKAPCarouselimg"
                  src={adoptPage.avatar02}
                  alt="Third slide"
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="4">
              <MDBView className="MKAPCarouselBox">
                <img
                  className="MKAPCarouselimg"
                  src={adoptPage.avatar03}
                  alt="Third slide"
                />
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </div>
      {/* <div className="MKrowAvatar">
            <div className="MKadoptPageAvatar ">
              <img src={adoptPage.avatar} alt="" />
            </div>

            <div className="MKsmall-avatar">
              <div className="MKsm-avatar">
                <img src={adoptPage.avatar01} alt="" />
              </div>
              <div className="MKsm-avatar">
                <img src={adoptPage.avatar02} alt="" />
              </div>
              <div className="MKsm-avatar">
                <img src={adoptPage.avatar03} alt="" />
              </div>
            </div>
          </div>
        </div> 
        {/* Detail Box */}
      <>
        <div className="MKrowDetail">
          <div className="MKdetail">
            <ul className="MKdetail-ul">
              <li className="MKdetail-icon">
                <FaPaw />
              </li>
              <li className="MKdetail-title">
                <p>姓名</p>
              </li>
              <li className="MKdetail-text">
                <p>{adoptPage.name}</p>
              </li>
            </ul>
            <ul className="MKdetail-ul">
              <li className="MKdetail-icon">
                <FaPaw />
              </li>
              <li className="MKdetail-title">
                <p>狀態</p>
              </li>
              <li className="MKdetail-text">
                <p>{adoptPage.status}</p>
              </li>
            </ul>
            <ul className="MKdetail-ul">
              <li className="MKdetail-icon">
                <FaPaw />
              </li>
              <li className="MKdetail-title">
                <p>種類</p>
              </li>
              <li className="MKdetail-text">
                <p>{adoptPage.type}</p>
              </li>
            </ul>
            <ul className="MKdetail-ul">
              <li className="MKdetail-icon">
                <FaPaw />
              </li>
              <li className="MKdetail-title">
                <p>體型</p>
              </li>
              <li className="MKdetail-text">
                <p>{adoptPage.size}</p>
              </li>
            </ul>
            <ul className="MKdetail-ul">
              <li className="MKdetail-icon">
                <FaPaw />
              </li>
              <li className="MKdetail-title">
                <p>地區</p>
              </li>
              <li className="MKdetail-text">
                <p>{adoptPage.location}</p>
              </li>
            </ul>
            <ul className="MKdetail-ul">
              <li className="MKdetail-icon">
                <FaPaw />
              </li>
              <li className="MKdetail-title">
                <p>電話</p>
              </li>
              <li className="MKdetail-text">
                <p>{adoptPage.cell}</p>
              </li>
            </ul>
            <ul className="MKdetail-ul">
              <li className="MKdetail-icon">
                <FaPaw />
              </li>
              <li className="MKdetail-title">
                <p>性別</p>
              </li>
              <li className="MKdetail-text">
                <p>{adoptPage.gender}</p>
              </li>
            </ul>
            <ul className="MKdetail-ul">
              <li className="MKdetail-icon">
                <FaPaw />
              </li>
              <li className="MKdetail-title">
                <p>個性</p>
              </li>
              <li className="MKdetail-text">
                <p>{adoptPage.info}</p>
              </li>
            </ul>
          </div>
          <div className="MKdetail-btn">
            <div className="" type="submit">
              <div>
                <button className="button-G">
                  <span className="MailBtn">
                    <AiFillMail />
                  </span>
                  私信飼主
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
      {/* Comments */}
      {/* <Row>
          <div className="MKrowComment">
            <div className="MKcomm">
              <div className="MKcom-header">
                <h6 className="MKcom-header-title">留言板</h6>
              </div>
              <div className="MKcomment">
                <div className="MKcom-box">
                  <div className="MKcom-avatar">
                    <div className="MKcom-avatar">
                      <img src={ComAvatar2} alt="" />
                    </div>
                  </div>
                  <div className="MKcom-user">
                    <div className="MKcom-name">
                      <p>我是貓奴</p>
                    </div>
                    <div className="MKcom-msn">
                      <h6>Hi,想和你約時間看小呆</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="MKcomment">
                <div className="MKcom-box">
                  <div className="MKcom-avatar">
                    <div className="MKcom-avatar">
                      <img src={AdoptPage1} alt="" />
                    </div>
                  </div>
                  <div className="MKcom-user">
                    <div className="MKcom-name">
                      <p>小呆僕人</p>
                    </div>
                    <div className="MKcom-msn">
                      <h6>好呀，這週六可以嗎？</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="MKcomment">
                <div className="MKcom-box">
                  <div className="MKcom-avatar">
                    <div className="MKcom-avatar">
                      <img src={ComAvatar2} alt="" />
                    </div>
                  </div>
                  <div className="MKcom-user">
                    <div className="MKcom-name">
                      <p>我是貓奴</p>
                    </div>
                    <div className="MKcom-msn">
                      <h6>okay</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="MKcommBtn">
              <div className="MKcomButton" type="submit">
                <div>
                  <button id="MKcard-btn">我要回覆</button>
                </div>
              </div>
            </div>
          </div>
        </Row> */}
      <Comments />
    </>
  )
}

export default withRouter(AdoptPage)
