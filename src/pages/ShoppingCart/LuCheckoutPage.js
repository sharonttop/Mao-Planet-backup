import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import CartCheckItem from '../../components/CartCheckItem'
import CartSubtotal from '../../components/CartSubtotal'
import ProductCard from '../../components/ProductCard'
import CartCard from '../../components/CartCard'
import { useStateValue } from '../../StateProvider'
// import { getBasketTotal } from '../../reducer'
import CAT_PRODUCT from '../../product-local-json/cat-product.json'

import './LuCheckoutPage.scss'
import LuCartEmptyCart from './LuCartEmptyCart'

function LuCheckoutPage(props) {
  const catFood = CAT_PRODUCT['Cat-Food']
  const [{ basket }, dispatch] = useStateValue()
  const isEmpty = basket.length === 0
  return (
    <>
      {isEmpty ? (
        <LuCartEmptyCart />
      ) : (
        <div className="container main-contant py-5">
          <div className="form-row text-center">
            <div className="col-md-4">
              <div className="row alert justify-content-center" role="alert">
                <div className="Lprocesstag">
                  <div className="Lprogressnum1">1</div>
                </div>
                <div>
                  <div className="Lprogresstitle">購物車</div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row alert justify-content-center" role="alert">
                <div className="Lprocesstag2">
                  <div className="Lprogressnum2">2</div>
                </div>
                <div>
                  <div className="Lprogresstitle2">填寫資料</div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row alert justify-content-center" role="alert">
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
                  <button className="btn">購物車共{basket.length}種商品</button>
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
                            details={item.details}
                            quantity={item.quantity}
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
                  <CartCard
                    src=""
                    ProductTitle="Loveabowl | 無穀天然糧-全齡貓雞肉配方"
                    ProductPrice="550"
                  />
                  <CartCard
                    src=""
                    ProductTitle="陪心寵糧 | 頂級初牧系列"
                    ProductPrice="520"
                  />
                  <CartCard
                    src=""
                    ProductTitle="AIXIA | 福岡土雞蒸煮包1號"
                    ProductPrice="250"
                  />
                  <CartCard
                    src=""
                    ProductTitle="汪喵星球 | 亮毛護膚鱉蛋粉"
                    ProductPrice="380"
                  />
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
              </div>
              {/* ---------choice payment part----------- */}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default withRouter(LuCheckoutPage)
