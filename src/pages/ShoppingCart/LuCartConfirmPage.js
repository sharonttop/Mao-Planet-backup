import React from 'react'
import { withRouter } from 'react-router-dom'
import './LuCartConfirmPage.scss'
import { useStateValue } from '../../StateProvider'
import CartCheckItem from '../../components/CartCheckItem'

function ConfirmPage(props) {
  const [{ basket }, dispatch] = useStateValue()
  return (
    <>
      {/* banner區 */}
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
        {/* 商品確認區 */}
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
                      {basket.map((item) => (
                        <CartCheckItem
                          id={item.id}
                          title={item.title}
                          image={item.image}
                          price={item.price}
                        />
                      ))}
                    </tr>
                    <tr>
                      <td colspan="4" className="text-right">
                        運費
                      </td>
                      <td className="align-middle text-right">
                        <strong>$60</strong>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="4" className="text-right">
                        合計
                      </td>
                      <td className="align-middle text-right">
                        <strong>0</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* 資料輸入區 */}
        <div class="row LDataInputArea mx-0">
          <div class="card col-md-6 px-0">
            <div class="card-header LDataInputheader">顧客資料</div>
            <div class="card-body">
              <form class="needs-validation mt-3" novalidate>
                <div class="form">
                  <div class="form-group">
                    <label for="name">顧客姓名</label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="顧客姓名"
                      required
                    />
                    <div class="invalid-feedback">請輸入姓名</div>
                  </div>
                  <div class="form-group">
                    <label for="inputEmail">電子郵件</label>
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail"
                      placeholder="Email"
                      required
                    />
                    <div class="invalid-feedback">請輸入信箱</div>
                  </div>
                  <div class="form-group">
                    <label for="inputEmail">電話號碼</label>
                    <input
                      type="phone"
                      class="form-control"
                      id="inputPhone"
                      placeholder="phone"
                      required
                    />
                    <div class="invalid-feedback">請輸入電話號碼</div>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                    <label class="form-check-label" for="inlineCheckbox1">
                      使用已存會員資料
                    </label>
                  </div>
                  <div class="mb-3 mt-3">
                    <label for="Textarea">訂單備註</label>
                    <textarea
                      class="form-control"
                      id="Textarea"
                      placeholder="最多50字"
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="card col-md-5 px-0">
            <div class="card-header LDataInputheader">
              <div class="">送貨資訊</div>
            </div>
            <div class="card-body">
              <form class="needs-validation mt-3" novalidate>
                <div class="form">
                  <div>
                    <div>已選擇的送貨方式: 宅配</div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        value="option1"
                      />
                      <label class="form-check-label" for="inlineCheckbox1">
                        使用已存會員資料
                      </label>
                    </div>
                  </div>
                  <div class="form-group col-md-10 mt-3">
                    <label for="name">收件人姓名</label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="姓名"
                      required
                    />
                    <div class="invalid-feedback">請輸入姓名</div>
                  </div>
                  <div class="form-group col-md-10">
                    <label for="inputEmail">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail"
                      placeholder="Email"
                      required
                    />
                    <div class="invalid-feedback">請輸入信箱</div>
                  </div>
                </div>
                <div class="form">
                  <div class="form-group col-md-10">
                    <label for="inputCity">地址</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputCity"
                      required
                    />
                    <div class="invalid-feedback">請輸入寄送地址</div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* 信用卡區 */}
        {/* <div class="card mt-3">
          <div class="card-header LDataInputheader">
            <div class="">
              <h5 class="card-title text-center">信用卡資料</h5>
            </div>
          </div>
          <div class="mt-3">
            <form class="CreditCardForm">
              <div class="form-row justify-content-center">
                <div class="col-md-4">
                  <h6>持卡人姓名</h6>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="持卡人姓名"
                  />
                </div>
                <div class="col-md-4">
                  <h6>卡號</h6>
                  <input type="text" class="form-control" placeholder="卡號" />
                </div>
              </div>
              <div class="form-row mt-3 input-group justify-content-center">
                <div class="col-md-4">
                  <h6>有效日期</h6>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="有效日期"
                  />
                </div>
                <div class="col-md-4">
                  <h6>安全碼</h6>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="安全碼"
                  />
                </div>
              </div>
              <div class="mt-3">
                本網站採用XX科技TapPay
                SSL交易傳輸系統，該系統通過PCI-DSS國際信用卡組織VISA、MasterCard等產業資料安全Level
                1等級，完善保護您的付款傳輸資料。
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  value="option1"
                />
                <label class="form-check-label" for="inlineCheckbox1">
                  我同意網站服務條款及隱私政策
                </label>
              </div>
              <div class="text-center mt-3">
                <a href="/" class="btn btn-outline-warning">
                  送出訂單
                </a>
              </div>

              <h6 class="mt-3">
                【注意事項，下單前請務必詳閱】
                <br />
                ※ 發票注意事項
                統編發票皆為電子發票，皆會寄至您當初留的email，信件中會有一附帶的PDF檔，可自行印出即可。
                <br />
                ※ 由於商品大小尺寸一同販售，
                請在下單前先務必確認您訂購的機型尺寸顏色正確再完成結帳付款的動作。
                <br />
                ※ 如需取消訂單
                請於訂單通知已確認前提出，包裹寄出後如有多次未取紀錄我方將保留相關出貨決定權且不另行通知。
                請愛護自身權益。
                <br />
                ※ 訂單相關進度及售後等問題 可加入 FB:
                MaoPlanet，客服人員將於服務時間內盡快依序回覆，客服人員將於服務時間內盡快依序回覆。在線回覆時間：週一至週五
                (10:30~18:00)，例假日暫停出貨及客服
                <br />※ 如商品有缺貨或停產等訂單無法出貨之情況，
                我們將使用Email進行通知，請務必留意相關訊息，謝謝您，祝您購物愉快！
              </h6>
            </form>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default withRouter(ConfirmPage)
