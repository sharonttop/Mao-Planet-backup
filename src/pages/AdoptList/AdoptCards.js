import React, { useEffect, useState } from 'react'
import { withRouter, Link } from 'react-router-dom'
import Axios from 'axios'
import Dash from 'lodash'

const pageSize = 9

const AdoptCards = () => {
  // const AdoptCards = ({ petList, loading }) => {
  //   if (loading) {
  //     return <h2>Loading....</h2>
  //   }
  const [petList, setPetList] = useState([])
  const [paginatedPosts, setPaginatedPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  useEffect(() => {
    Axios.get('http://localhost:3002/api/getpetlist').then((response) => {
      setPetList(response.data)
      setPaginatedPosts(Dash(response.data).slice(0).take(pageSize).value())
    })
  }, [])
  console.log(paginatedPosts)

  const pageCount = petList ? Math.ceil(petList.length / pageSize) : 0
  // if ([pageCount === 1]) return null
  const pages = Dash.range(1, pageCount + 1)
  const pagination = (pageNo) => {
    setCurrentPage(pageNo)
    const startIndex = (pageNo - 1) * pageSize
    const paginatedPost = Dash(petList).slice(startIndex).take(pageSize).value()
    setPaginatedPosts(paginatedPost)
  }
  return (
    <>
      <div className="MKALrow-list">
        <div className="MKALlist">
          {paginatedPosts.map((v, i) => {
            return (
              <p key={i} className="MKDisplayLi col-12 col-lg-4">
                <div className=" MKALcard ">
                  <div className="MKALcard-context">
                    <div className="MKALavatar">
                      <img src={v.avatar} alt="" />
                    </div>
                    <div className="">
                      <p id="MKALcard-title">{v.name}</p>
                      <p id="MKALcard-text"> {v.info}</p>
                    </div>
                  </div>
                  <div className="MKALbutton" type="submit">
                    <div>
                      <Link to={'/adoptlist/adoptpage/' + v.sid}>
                        <button id="MKALcard-btn">了解更多</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </p>
            )
          })}
        </div>
      </div>
      <div>
        <ul className="pagination d-flex justify-content-center ">
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

export default withRouter(AdoptCards)
