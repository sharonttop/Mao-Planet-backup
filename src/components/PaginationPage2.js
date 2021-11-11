import React from 'react'
import { Row } from 'react-bootstrap'
import '../Styles/Pagintaion.scss'
import { Link } from 'react-router-dom'

function PaginationPage2({href}) {
  return (
    <>
      <Row className="d-flex justify-content-center mt-3 mb-5">
        <div className="ACrow-pagination">
          <div aria-label="Page navigation example">
            <ul className="pagination">
              <li className="ACpage-link">
                <a className="page-link" href="/" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li className="ACpage-link">
                <a className="page-link" href="/bloglist">
                  1
                </a>
              </li>
              <li className="ACpage-link">
                <Link className="page-link" to={href}>
                  2
                </Link>
              </li>
              <li className="page-item">
                <a className="page-link" href="/" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Row>
    </>
  )
}
export default PaginationPage2
