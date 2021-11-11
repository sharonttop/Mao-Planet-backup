import ProductListTag from "./ProductListTag";
import { useParams } from "react-router";
import '../Styles/ProductDetails.scss'
import '../Styles/ProductList.scss'
import '../Styles/ProductListTag.scss'
import{FaRegHeart} from 'react-icons/fa'
import ProductCard from "./ProductCard";
import ProductListTitle from "./ProductListTitle";
import CAT_PRODUCT from '../product-local-json/cat-product.json'
import '../Styles/ProductCard.scss'
import { Link } from 'react-router-dom'
import { useStateValue } from '../StateProvider'



const ProductDetailsCP18 = ({ ID, ProductImg, ProductTitle, ProductPrice }) => {
    const [{ basket }, dispatch] = useStateValue()
    const cp18Data = CAT_PRODUCT["Cat-Play-2"][1]
    console.log(cp18Data)

    const addToBasket = () => {
        dispatch({
          type: 'ADD_TO_BASKET',
          item: {
            id: ID,
            image: ProductImg,
            title: ProductTitle,
            price: ProductPrice,
          },
        })
      }

return (
    <>
    <div className="AG-productList-container">
    <div className="AG-productTags">
        <ProductListTag >貓貓美食</ProductListTag>
        <ProductListTag >貓貓玩具</ProductListTag>
        <ProductListTag >貓貓廁所</ProductListTag>
        <ProductListTag >貓貓保健</ProductListTag>
        <ProductListTag >貓貓出遊</ProductListTag>
    </div>
    <div className="AG-addToCartContainer">
      <div className="AG-fourPics">
          <img id="AG-pic1" src={`${cp18Data.pics[0]}`}></img>
          <img id="AG-pic2" src={`${cp18Data.pics[1]}`}></img>
          <img id="AG-pic3" src={`${cp18Data.pics[2]}`}></img>
          <img id="AG-pic4" src={`${cp18Data.pics[3]}`}></img>
      </div>
      <div className="AG-bigPic"><img src={`${cp18Data.pics[0]}`}></img></div>
      <div className="AG-textAndBtnArea">
          <div className="AG-productTitle">{cp18Data.title}</div>
          <div className="AG-promo">
            <p>至09/10 00:00截止 全店，奴你99！全館滿額現折
全店，訂單滿NT$ 999免運費</p>
          </div>
          <div className="AG-productTitle">NT$ {cp18Data.price}</div>
          <label>數量</label>
          <div className="AG-numberSelect">
              <a>-</a>
              <a className="AG-selectedNumber">1</a>
              <a>+</a>
          </div>
          <a className="AG-toCart" onClick={addToBasket}>加入購物車</a>
          <a className="AG-toList"><FaRegHeart/> 加入追蹤清單</a>
      </div>
    </div>
    <div className="AG-toggleTitleContainer">
        <a className="AG-toggleTitle">商品描述</a>
        <a className="AG-toggleTitle">送貨及付款方式</a>
    </div>
    <div className="AG-detailsTextContainer">
        <div className="AG-descriptionWrap">
            <div>
            <div className="AG-des-pay-bigTitle">{cp18Data.details[0]}</div>
            <div className="AG-des-pay-bigText">
            {cp18Data.details[1]}
            </div> 
            </div>
            <div>
            <div className="AG-des-pay-title">尺寸</div>
            <div className="AG-des-pay-text">{cp18Data.details[2]}</div>
            <div className="AG-des-pay-title">重量</div>
            <div className="AG-des-pay-text">{cp18Data.details[3]}</div>
            <div className="AG-des-pay-title">材質</div>
            <div className="AG-des-pay-text">{cp18Data.details[4]}</div>
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
        
            <div >
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
        <div id="AG-bigPic1" className="AG-bigPic"><img src={`${cp18Data.bigPics[0]}`}/></div>
        <div id="AG-bigPic2" className="AG-bigPic"><img src={`${cp18Data.bigPics[1]}`}/></div>
        <div id="AG-bigPic3" className="AG-bigPic"><img src={`${cp18Data.bigPics[2]}`}/></div>
        <div id="AG-bigPic4" className="AG-bigPic"><img src={`${cp18Data.bigPics[3]}`}/></div>
        <div id="AG-bigPic5" className="AG-bigPic"><img src={`${cp18Data.bigPics[4]}`}/></div>

    </div>
    </div>
    </>
    )
}

export default ProductDetailsCP18;