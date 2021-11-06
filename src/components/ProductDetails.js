import ProductListTag from './ProductListTag'
import '../Styles/ProductDetails.scss'
import '../Styles/ProductList.scss'
import '../Styles/ProductListTag.scss'
import { FaRegHeart } from 'react-icons/fa'
import ProductCard from './ProductCard'
import ProductListTitle from './ProductListTitle'

const ProductDetails = () => {
  return (
    <>
      <div className="AG-productList-container">
        <div className="AG-productTags">
          <ProductListTag>貓貓美食</ProductListTag>
          <ProductListTag>貓貓玩具</ProductListTag>
          <ProductListTag>貓貓廁所</ProductListTag>
          <ProductListTag>貓貓保健</ProductListTag>
          <ProductListTag>貓貓出遊</ProductListTag>
        </div>
        <div className="AG-addToCartContainer">
          <div className="AG-fourPics">
            <div id="AG-pic1"></div>
            <div id="AG-pic2"></div>
            <div id="AG-pic3"></div>
            <div id="AG-pic4"></div>
          </div>
          <div className="AG-bigPic"></div>
          <div className="AG-textAndBtnArea">
            <div className="AG-productTitle">Vetreska 未卡 ｜起司貓抓板</div>
            <div className="AG-promo">
              <p>
                至09/10 00:00截止 全店，奴你99！全館滿額現折 全店，訂單滿NT$
                999免運費
              </p>
            </div>
            <div className="AG-productTitle">NT$ 390</div>
            <button className="AG-productTag">起司貓抓板</button>
            <label>數量</label>
            <div className="AG-numberSelect">
              <a>-</a>
              <a className="AG-selectedNumber">1</a>
              <a>+</a>
            </div>
            <a className="AG-toCart">加入購物車</a>
            <a className="AG-toList">
              <FaRegHeart /> 加入追蹤清單
            </a>
          </div>
        </div>
        <div className="AG-toggleTitleContainer">
          <a className="AG-toggleTitle">商品描述</a>
          <a className="AG-toggleTitle">送貨及付款方式</a>
        </div>
        <div className="AG-detailsTextContainer">
          <div className="AG-descriptionWrap">
            <div>
              <div className="AG-des-pay-bigTitle">芝士起司，就是力量！</div>
              <div className="AG-des-pay-bigText">
                ● 多孔造型 可玩可睡 可容納七公斤內貓咪<br></br>● 超可愛外觀
                裝點樸實無華的生活<br></br>● 自帶貓窩的優質貓抓板<br></br>●
                優質選材 耐抓耐磨<br></br>
              </div>
            </div>
            <div>
              <div className="AG-des-pay-title">尺寸</div>
              <div className="AG-des-pay-text">53x40x29.5cm</div>
              <div className="AG-des-pay-title">重量</div>
              <div className="AG-des-pay-text">0.65kg</div>
              <div className="AG-des-pay-title">材質</div>
              <div className="AG-des-pay-text">瓦愣紙、玉米澱粉膠</div>
            </div>
          </div>
          <div className="AG-payAndShipWrap">
            <div>
              <div className="AG-des-pay-bigTitle">送貨方式</div>
              <div className="AG-des-pay-bigText">
                宅配<br></br>
                門市取貨 ( 取貨點 : 台中水湳店)<br></br>
                即時付款 ( 僅提供現場客人使用)
              </div>
            </div>

            <div>
              <div className="AG-des-pay-bigTitle">付款方式</div>
              <div className="AG-des-pay-bigText">
                信用卡<br></br>
                LINE Pay<br></br>
                ATM<br></br>
                即時付款
              </div>
            </div>
          </div>
        </div>

        <div className="AG-productBigPics">
          <div id="AG-bigPic1" className="AG-bigPic"></div>
          <div id="AG-bigPic2" className="AG-bigPic"></div>
          <div id="AG-bigPic3" className="AG-bigPic"></div>
          <div id="AG-bigPic4" className="AG-bigPic"></div>
          <div id="AG-bigPic5" className="AG-bigPic"></div>
        </div>
      </div>
    </>
  )
}

export default ProductDetails
