import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import './LuCartConfirmPageII.scss'
import { useStateValue } from '../../StateProvider'
import { getBasketTotal } from '../../reducer'
import CartCheckItem from '../../components/CartCheckItem'

import { Link } from 'react-router-dom'

function ConfirmPage(props) {
  const [{ basket }, dispatch] = useStateValue()

  return (
    <>
      {/* banner區 */}
      <div className="container main-contant py-5">
        <div className="form-row processrow">
          <div className="col-md-4">
            <div className="row alert justify-content-center" role="alert">
              <div className="Lprocesstag2">
                <div className="Lprogressnum1">1</div>
              </div>
              <div>
                <div className="Lprogresstitle">購物車</div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row alert justify-content-center" role="alert">
              <div className="Lprocesstag3">
                <div className="Lprogressnum1">2</div>
              </div>
              <div>
                <div className="Lprogresstitle2">填寫資料</div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row alert justify-content-center" role="alert">
              <div className="Lprocesstag">
                <div className="Lprogressnum3">3</div>
              </div>
              <div>
                <div className="Lprogresstitle3">資料確認</div>
              </div>
            </div>
          </div>
        </div>
        {/* 商品確認區 */}
        <div className="card text-center">
          <div className="card-header CustomerHeader">資料確認</div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header text-center CustomerHeader">
                訂單資訊
              </div>
              <div className="card-body">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th scope="row" className="col-md-4">配送方式</th>
                      <td>宅配</td>
                    </tr>
                    <tr>
                      <th scope="row">付款方式</th>
                      <td>現金付款</td>
                    </tr>
                    <tr>
                      <th scope="row">消費金額</th>
                      <td>$540</td>
                    </tr>
                    <tr>
                      <th scope="row">訂單備註</th>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header text-center CustomerHeader">
                收貨人資訊
              </div>
              <div className="card-body">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th scope="row" className="col-md-4">
                        收貨人姓名
                      </th>
                      <td>盧小宇</td>
                    </tr>
                    <tr>
                      <th scope="row">配送地址</th>
                      <td>台北市大安區貓貓街777號</td>
                    </tr>
                    <tr>
                      <th scope="row">取件超商</th>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row">連絡電話</th>
                      <td>0927000111</td>
                    </tr>
                    <tr>
                      <th scope="row">電子郵件</th>
                      <td>mao777@gmail.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <div className="col-mb-12">
            <div className="card">
              <div className="card-header text-center CustomerHeader">
                商品資訊
              </div>
              <div className="card-body">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col" className="col-md-6">
                        商品名稱
                      </th>
                      <th scope="col" className="col-md-2">
                        單價NT$
                      </th>
                      <th scope="col" className="col-md-2">
                        個數
                      </th>
                      <th scope="col" className="col-md-2">
                        總金額
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">LINSLINS | 仙人掌咬繩玩具</th>
                      <td>$190</td>
                      <td>1</td>
                      <td>$190</td>
                    </tr>
                    <tr>
                      <th scope="row">Bite Me | 金可頌 (可藏食)</th>
                      <td>$350</td>
                      <td>1</td>
                      <td>$350</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="text-center mt-3 mb-3">
                <Link to="/shopping/donepage">
                  <div className="col-md-12">
                    <button type="button" className="btn LOrderbtn">
                      訂單確認
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(ConfirmPage)
