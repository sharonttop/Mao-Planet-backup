import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import './LuCartConfirmPage.scss'
import { useStateValue } from '../../StateProvider'
import { getBasketTotal } from '../../reducer'
import CartCheckItem from '../../components/CartCheckItem'
import axios from 'axios'
import { Link } from 'react-router-dom'

function ConfirmPage(props) {
  const [{ basket }, dispatch] = useStateValue()

  return (
    <>
      {/* banner區 */}
      <div className="container main-contant py-5">
        <div className="form-row processrow">
          <div className="col-md-4">
            <div className="row alert" role="alert">
              <div className="Lprocesstag2">
                <div className="Lprogressnum1">1</div>
              </div>
              <div>
                <div className="Lprogresstitle">購物車</div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row alert" role="alert">
              <div className="Lprocesstag3">
                <div className="Lprogressnum1">2</div>
              </div>
              <div>
                <div className="Lprogresstitle2">填寫資料</div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row alert" role="alert">
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
          <div className="card-header">資料確認</div>
        </div>
        <div className="row mt-4">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-header text-center">訂單資訊</div>
              <div className="card-body">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th scope="row">訂單編號</th>
                      <td>Mark</td>
                    </tr>
                    <tr>
                      <th scope="row">配送方式</th>
                      <td>Mark</td>
                    </tr>
                    <tr>
                      <th scope="row">付款方式</th>
                      <td>Mark</td>
                    </tr>
                    <tr>
                      <th scope="row">消費金額</th>
                      <td>Mark</td>
                    </tr>
                    <tr>
                      <th scope="row">訂單備註</th>
                      <td>Mark</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-header text-center">收貨人資訊</div>
              <div className="card-body">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <th scope="row">收貨人姓名</th>
                      <td>Mark</td>
                    </tr>
                    <tr>
                      <th scope="row">配送地址</th>
                      <td>Mark</td>
                    </tr>
                    <tr>
                      <th scope="row">取件超商</th>
                      <td>Mark</td>
                    </tr>
                    <tr>
                      <th scope="row">連絡電話</th>
                      <td>Mark</td>
                    </tr>
                    <tr>
                      <th scope="row">電子郵件</th>
                      <td>Mark</td>
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
              <div className="card-header text-center">商品資訊</div>
              <div className="card-body">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">商品名稱</th>
                      <th scope="col">單價NT$</th>
                      <th scope="col">個數</th>
                      <th scope="col">總金額</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
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
