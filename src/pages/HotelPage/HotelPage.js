import React, { useEffect, useState } from 'react'
import './HotelPage.scss'
import { AiFillStar } from 'react-icons/ai'
import ComAvatar1 from './adoptlist-01_300x300.jpg'
import ComAvatar2 from './adoptlist-02_300x300.jpg'
import { withRouter } from 'react-router-dom'
import GoogleMap from './GoogleMap'
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
function HotelPage(props) {
  // const coll = document.getElementsByclassNameName('collapsible')

  // for (i = 0; i < coll.length; i++) {
  //   coll[i].addEventListener('click', function () {
  //     this.classNameList.toggle('active')
  //     var content = this.nextElementSibling
  //     if (content.style.maxHeight) {
  //       content.style.maxHeight = null
  //     } else {
  //       content.style.maxHeight = content.scrollHeight + 'px'
  //     }
  //   })
  // }
  const [hotelList, setHotelList] = useState([])
  useEffect(() => {
    Axios.get('http://localhost:3002/api/gethotellist').then((response) => {
      setHotelList(response.data)
    })
  }, [])
  const [hotelPage, setHotelPage] = useState({
    sid: '',
    avatar: '',
    avatar01: '',
    avatar02: '',
    avatar03: '',
    name: '',
    location: '',
    cell: '',
    address: '',
  })
  useEffect(() => {
    if (hotelList.length > 0) {
      const id = props.match.params.id
      // 如果id存在的話
      // ex.用id向伺服器(資料庫)要資料
      if (id) {
        const foundPet = hotelList.find((v, i) => {
          return String(v.sid) === String(id)
        })
        setHotelPage(foundPet)
      }
    }
  }, [hotelList, props.match.params.id])
  return (
    <>
      <>
        {/* title */}
        <>
          <div className="MKHotelHeaderTitle">
            <p>
              旅宿明細:<span className="MKtitle-text"> {hotelPage.name}</span>
            </p>
          </div>
        </>
        {/* avatar */}
        <div>
          {/* <div className="MKrow MKHotelRowAvatar">
            <div className="MKHotelAvatar">
              <div className="MKbigHotelAvatar">
                <img src={hotelPage.avatar} alt="" />
              </div>
              <div className="MKsmallHotelAvatar">
                <div className="MKsmallHotelAvatar">
                  <img src={hotelPage.avatar01} alt="" />
                </div>
                <div className="MKsmallHotelAvatar">
                  <img src={hotelPage.avatar02} alt="" />
                </div>
                <div className="MKsmallHotelAvatar">
                  <img src={hotelPage.avatar03} alt="" />
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className="MKAPCarousel">
          <MDBCarousel
            activeItem={1}
            length={3}
            // showControls={true}
            // showIndicators={true}
            // className="z-depth-1"
          >
            <MDBCarouselInner className="MKHPCarousel">
              <MDBCarouselItem itemId="1">
                <MDBView className="MKHPCarouselBox">
                  <img
                    className="MKHPCarouselimg"
                    src={hotelPage.avatar}
                    alt="First slide"
                  />
                  {/* <MDBMask overlay="black-light" /> */}
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <MDBView className="MKAPCarouselBox">
                  <img
                    className="MKAPCarouselimg"
                    src={hotelPage.avatar01}
                    alt="Second slide"
                  />
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <MDBView className="MKAPCarouselBox">
                  <img
                    className="MKAPCarouselimg"
                    src={hotelPage.avatar02}
                    alt="Third slide"
                  />
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="4">
                <MDBView className="MKAPCarouselBox">
                  <img
                    className="MKAPCarouselimg"
                    src={hotelPage.avatar03}
                    alt="Third slide"
                  />
                </MDBView>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </div>

        {/* booking form */}
        {/* <Row>
          <div className="MKbooking">
            <div className="MKbookBanner">
              <h2>訂房資訊</h2>
            </div>
            <div className="MKwrap">
              <form>
                <div className="MKbookFormGroup">
                  <label for="MKbooking">入房時間</label>
                  <input type="date" className="MKform-control" />
                </div>
                <div className="MKbookFormGroup">
                  <label for="checkout">退房日期</label>
                  <input type="date" className="MKform-control" />
                </div>
                <div className="MKbookFormGroup">
                  <label for="count">狗</label>
                  <input
                    type="count"
                    className="MKform-control"
                    placeholder="數量"
                  />
                </div>
                <div className="MKbookFormGroup">
                  <label for="count">貓</label>
                  <input
                    type="count"
                    className="MKform-control"
                    placeholder="數量"
                  />
                </div>
                <div className="MKprice">
                  <div className="MKwrap">
                    <div className="MKdatePrice">
                      <p className="MKperCost">$1200 x 2 晚</p>
                      <p className="MKperCost">$2400</p>
                    </div>
                  </div>
                  <div className="MKwrap">
                    <div className="MKdatePrice">
                      <p>總價</p>
                      <p>$2400</p>
                    </div>
                  </div>
                </div>
                <button type="submit" className="MKbtn MKlogin">
                  馬上預約
                </button>
              </form>
            </div>
          </div>
        </Row> */}
        {/* roomService */}
        <>
          <div className="row MKrowService">
            <div className="MKroomService">
              <button type="button" className="MKcollapsible ">
                設備＆服務
              </button>
              {/* <div className="MKcontent">
                <div className="MKservice">
                  <ul className="MKservice">
                    <li>
                      <i className="fas fa-user-nurse detailIcon"></i>
                    </li>
                    <li>
                      <p>疫苗注射</p>
                    </li>
                  </ul>
                </div>
                <div className="MKservice">
                  <ul className="MKservice">
                    <li>
                      <i className="fas fa-coffee detailIcon"></i>
                    </li>
                    <li>
                      <p>下午茶餐點</p>
                    </li>
                  </ul>
                </div>
                <div className="MKservice">
                  <ul className="MKservice">
                    <li>
                      <i className="fas fa-headphones detailIcon"></i>
                    </li>
                    <li>
                      <p>紓緩音療癒</p>
                    </li>
                  </ul>
                </div>
                <div className="MKservice">
                  <ul className="MKservice">
                    <li>
                      <i className="fas fa-search detailIcon"></i>
                    </li>
                    <li>
                      <p>健檢</p>
                    </li>
                  </ul>
                </div>
                <div className="MKservice">
                  <ul className="MKservice">
                    <li>
                      <i className="fas fa-ruler detailIcon"></i>
                    </li>
                    <li>
                      <p>毛髮修容</p>
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>
            <div className="MKcreditCard col-12 col-sm-12 col-md-6 col-xl-6 ">
              <button type="button" className="MKcollapsible">
                付款方式
              </button>
              {/* <div className="MKcontent">
                <div className="MKservice">
                  <ul className="MKservice">
                    <li>
                      <i className="fab fa-cc-visa"></i>
                    </li>
                    <li>
                      <p>信用卡</p>
                    </li>
                  </ul>
                </div>
                <div className="MKservice">
                  <ul className="MKservice">
                    <li>
                      <i className="fab fa-line"></i>
                    </li>
                    <li>
                      <p>LINE Pay</p>
                    </li>
                  </ul>
                </div>
                <div className="MKservice">
                  <ul className="MKservice">
                    <li>
                      <i className="fas fa-cash-register"></i>
                    </li>
                    <li>
                      <p>ATM</p>
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </>
        {/* map */}
        <GoogleMap />
        {/* hotel comments */}
        <>
          <div className="MKHotelRowComment">
            <div className="MKHotelComm">
              <div className="MKcom-header">
                <h6 className="MKcom-header-title">旅宿評價</h6>
              </div>
              <div className="MKcomment">
                <div className="MKcom-box">
                  <div className="MKcom-avatar">
                    <img src={ComAvatar2} alt="" />
                  </div>
                  <div className="MKcom-user">
                    <div className="MKcomNameH">
                      <p>專業貓貓鏟屎官4我</p>
                    </div>
                    <div className="MKstart">
                      <div className="">
                        <AiFillStar />
                      </div>
                      <div className="">
                        <AiFillStar />
                      </div>
                      <div className="">
                        <AiFillStar />
                      </div>
                      <div className="">
                        <AiFillStar />
                      </div>
                      <div className="">
                        <AiFillStar />
                      </div>
                    </div>
                    <div className="MKcomMsn">
                      <h6>
                        成貓真的要結紮！發情期會叫到無法睡覺，結紮也讓貓貓身體不會有一些賀爾蒙相關的疾病，這間旅宿結合獸醫進駐，真的解決很多不方便之處！
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="MKcom-box">
                  <div className="MKcom-avatar">
                    <img src={ComAvatar1} alt="" />
                  </div>
                  <div className="MKcom-user">
                    <div className="MKcomNameH">
                      <p>我是貓奴</p>
                    </div>
                    <div className="MKstart">
                      <div className="">
                        <AiFillStar />
                      </div>
                      <div className="">
                        <AiFillStar />
                      </div>
                      <div className="">
                        <AiFillStar />
                      </div>
                      <div className="">
                        <AiFillStar />
                      </div>
                      <div className="">
                        <AiFillStar />
                      </div>
                    </div>
                    <div className="MKcomMsn">
                      <h6>
                        因為工作關係出差異地，臨時找不到人照顧毛小孩，無意見發現喵星球，除了環境優美員工訓練很客氣又專業，五星推薦！
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="MKHProwBtn">
                <div className="MKHPutton" type="submit">
                  <div>
                    {/* 點擊按鈕跳對照id分頁 */}
                    <button className="MKHPcard-btn">我要回覆</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </>
    </>
  )
}

export default withRouter(HotelPage)
