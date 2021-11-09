import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import CartCheckItem from '../../components/CartCheckItem'
import CartSubtotal from '../../components/CartSubtotal'
import ProductCard from '../../components/ProductCard'
import { useStateValue } from '../../StateProvider'
// import { getBasketTotal } from '../../reducer'
import { BiX } from 'react-icons/bi'
import catImg from '../../images/ProductList-images/cat_cardPic_250X250.png'
import './LuCheckoutPage.scss'

function LuCheckoutPage(props) {
  const [{ basket }, dispatch] = useStateValue()
  return (
    <>
      <div className="container main-contant py-5">
        <div className="form-row text-center">
          <div className="col-md-4">
            <div className="row alert" role="alert">
              <div className="Lprocesstag">
                <div className="Lprogressnum1">1</div>
              </div>
              <div>
                <div className="Lprogresstitle">購物車</div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row alert" role="alert">
              <div className="Lprocesstag2">
                <div className="Lprogressnum2">2</div>
              </div>
              <div>
                <div className="Lprogresstitle2">填寫資料</div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row alert" role="alert">
              <div className="Lprocesstag3">
                <div className="Lprogressnum3">3</div>
              </div>
              <div>
                <div className="Lprogresstitle3">資料確認</div>
              </div>
            </div>
          </div>
        </div>
        {/* ---------step part----------- */}
        <div className="row py-5">
          <div className="col-md-12">
            <div className="card">
              <div
                className="card-header text-center LProductConfirmArea"
                id="headingOne"
              >
                <button className="btn">
                  顯示購物車細節
                  <br />
                  合計:
                  <br />
                  購物車共{basket.length}種商品
                </button>
              </div>
              <div>
                <table className="table table-sm text-center">
                  <thead>
                    <th className="text-left col-md-5">商品名稱</th>
                    <th className="text-center col-md-2">優惠</th>
                    <th className="col-md-1">單件價格</th>
                    <th className="text-center col-md-1">數量</th>
                    <th className="text-center col-md-1">小計</th>
                    <th className="col-md-1"></th>
                  </thead>
                  <tbody>
                    <tr>
                      {/* <td>
                        <td className="left LProductItemDetail">
                          <img
                            src="../images/BlogPic2_150x150.jpg"
                            alt=""
                            width="80px"
                            height="80px"
                          />
                          <h5></h5>
                        </td>
                      </td> */}
                      {basket.map((item) => (
                        <CartCheckItem
                          id={item.id}
                          title={item.title}
                          image={item.image}
                          price={item.price}
                        />
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* ---------extra add part----------- */}
            <div className="card">
              <h5 className="card-header text-center LAddtoCartHeader">
                商品加購區
              </h5>
              <div className="addtocartGroup row mx-auto">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
            </div>
            {/* ---------extra add part----------- */}
            <div class="row LDataInputArea mx-0 mt-3">
              <div class="card col-md-6 px-0">
                <div class="card-header LDataInputheader">
                  選擇配送及付款方式
                </div>
                <div class="card-body">
                  <h6 className="align-self-end">
                    請注意：若為外離島宅配到府則不提供貨到付款的服務！
                  </h6>
                  <form class="needs-validation mt-3" novalidate>
                    <div class="form">
                      <div className="form-group">
                        <label for="delivery">配送方式</label>
                        <select className="form-control">
                          <option>超商取貨</option>
                          <option>宅配</option>
                        </select>
                        <label for="payment">付款方式</label>
                        <select className="form-control">
                          <option>現金</option>
                          <option>信用卡</option>
                        </select>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <CartSubtotal />
              {/* <div class="card col-md-5 px-0">
                <div class="card-header LDataInputheader">
                  <div class="">訂單資訊</div>
                </div>
                <div class="card-body">
                  <div className="SummaryItem">
                    <div className="subTotal">小計</div>
                    <div className="deliveryPayment">
                      <strong>$1160</strong>
                    </div>
                  </div>
                  <div className="DeliveryItem">
                    <div className="">運費</div>
                    <div className="">
                      <strong>$60</strong>
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
                  <div className="col-md-12">
                    <button type="button" className="btn LOrderbtn">
                      送出訂單
                    </button>
                  </div>
                </div>
              </div> */}
            </div>
            {/* ---------choice payment part----------- */}
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(LuCheckoutPage)
