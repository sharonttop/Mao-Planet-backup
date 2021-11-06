import '../Styles/ProductCard.scss'
import catImg from '../images/productList-images/cat_cardPic_250X250.png'

function ProductCard(){
    return(
    <div className="AG-product-card-container">
        <div className="AG-card-pic-area">
            <img className="AG-card-pic" src={catImg} alt=""></img>
            <div className="AG-overlay"></div>
            <div className="AG-hoverBtn"><a  href="#">加入購物車</a></div>
        </div>
        <div className="AG-title">Vetreska 未卡 | 桃子貓抓盒</div>
        <div className="AG-price">NT$ 450</div>
    </div>
)
}

export default ProductCard;