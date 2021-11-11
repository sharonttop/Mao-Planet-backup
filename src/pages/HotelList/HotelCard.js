import React, { useEffect, useState } from 'react'
import { withRouter, Link } from 'react-router-dom'
import Axios from 'axios'
import Dash from 'lodash'
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from 'mdbreact'
const pageSize = 3

function HotelCard() {
  const [hotelList, setHotelList] = useState([])
  const [paginatedPosts, setPaginatedPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  useEffect(() => {
    Axios.get('http://localhost:3002/api/gethotellist').then((response) => {
      setHotelList(response.data)
      setPaginatedPosts(Dash(response.data).slice(0).take(pageSize).value())
    })
  }, [])
  console.log(paginatedPosts)

  const pageCount = hotelList ? Math.ceil(hotelList.length / pageSize) : 0
  // if ([pageCount === 1]) return null
  const pages = Dash.range(1, pageCount + 1)
  const pagination = (pageNo) => {
    setCurrentPage(pageNo)
    const startIndex = (pageNo - 1) * pageSize
    const paginatedPost = Dash(hotelList)
      .slice(startIndex)
      .take(pageSize)
      .value()
    setPaginatedPosts(paginatedPost)
  }
  return (
    <>
      <div>
        <div className="MKrow-list">
          {paginatedPosts.map((v, i) => {
            return (
              <li key={i} className="MKDisplayLi">
                <div className="MKcard">
                  <div className="MKcard-context">
                    <div className="MKavatar">
                      <img src={v.avatar} alt="" />
                    </div>
                    <div className="">
                      <p id="MKcard-title">{v.name}</p>
                      <p id="MKcard-text">
                        電話：{v.cell}
                        <br />
                        地址：{v.address}
                      </p>
                    </div>
                  </div>
                  <div className="" type="submit">
                    <div>
                      <Link to={'/hotellist/hotelpage/' + v.sid}>
                        <button className="MKbutton" id="">
                          了解更多
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </div>
      </div>
      {/* <MDBCarousel activeItem={1} length={2} slide={true}>
        <MDBCarouselInner>
          <MDBCarouselItem itemId={1}>
            <div className="MKrow-list">
              {paginatedPosts.map((v, i) => {
                return (
                  <li key={i} className="MKDisplayLi">
                    <div className="MKcard">
                      <div className="MKcard-context">
                        <div className="MKavatar">
                          <img src={v.avatar} alt="" />
                        </div>
                        <div className="">
                          <p id="MKcard-title">{v.name}</p>
                          <p id="MKcard-text">
                            電話：{v.cell}
                            <br />
                            地址：{v.address}
                          </p>
                        </div>
                      </div>
                      <div className="" type="submit">
                        <div>
                          <Link to={'/hotellist/hotelpage/' + v.sid}>
                            <button className="MKbutton" id="">
                              了解更多
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                )
              })}
            </div>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel> */}
      <div>
        {/*  pagination*/}
        <ul className="pagination MKpagination">
          {pages.map((page) => (
            <li
              className={
                page === currentPage ? ' page-item active ' : 'page-item'
              }
            >
              <p
                className="page-link MKpage-link"
                onClick={() => pagination(page)}
              >
                {page}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default withRouter(HotelCard)
