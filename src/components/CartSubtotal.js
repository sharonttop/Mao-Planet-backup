import React from 'react'
import { useStateValue } from '../StateProvider'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../reducer'
import { Link } from 'react-router-dom'

function CartSubtotal() {
  const [{ basket }, dispatch] = useStateValue()
  return (
    <CurrencyFormat
      renderText={(value) => (
        <>
          <div class="card col-md-5 px-0">
            <div class="card-header LDataInputheader">
              <div class="">訂單資訊</div>
            </div>
            <div class="card-body">
              <div className="SummaryItem">
                <div className="subTotal">小計</div>
                <div className="deliveryPayment">
                  <strong>{value}</strong>
                </div>
              </div>
              <div className="DeliveryItem">
                <div className="">運費</div>
                <div className="">
                  <strong>$0</strong>
                </div>
              </div>
              <div className="DeliveryItem">
                <div className="">總計</div>
                <div className="">
                  <strong>{value}</strong>
                </div>
              </div>
              <form className="CouponItem mt-3 d-flex">
                <div className="form-group col-md-8">
                  <label for="inputPassword2" className="sr-only">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword2"
                    placeholder="優惠券號碼"
                  />
                </div>
                <div className="">
                  <button type="submit" className="btn mb-2 LCouponbtn">
                    套用
                  </button>
                </div>
              </form>
              <Link to="/shopping/secondstep">
                <div className="col-md-12">
                  <button type="button" className="btn LOrderbtn">
                    訂單確認
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </>
      )}
      decimalScale={2}
      value={getBasketTotal(basket)}
      displayType={'text'}
      thousandSeparator={true}
      prefix={'NT'}
    />
  )
}

export default CartSubtotal
