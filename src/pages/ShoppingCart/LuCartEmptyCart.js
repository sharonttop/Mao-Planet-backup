import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import './LuCartEmptyCart.scss'

function EmptyCart(props) {
  return (
    <>
      <div className="container main-contant py-5">
        <div className="mt-3">
          <div className="col-mb-12">
            <div className="card">
              <div className="card-body">
                <ul className="text-center list-unstyled mt-3">
                  <li className="Empty_notice">您的購物車沒有任何商品......</li>
                </ul>
              </div>
              <div className="text-center mb-5">
                <Link to="/productlist/dog" className="btn mx-auto Dogshop">
                  逛逛狗狗雜貨店
                </Link>
                <Link to="/productlist/cat" className="btn mx-auto Catshop">
                  逛逛貓貓雜貨店
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(EmptyCart)
