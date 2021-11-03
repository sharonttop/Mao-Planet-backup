import '../Styles/HomeProductCard.scss'
import catImg from '../images/Home/cat_cardPic_250X250.png'

function HomeProductCard() {
  return (
    <div className="product-card-container">
      <div className="card-pic-area">
        <img className="card-pic" src={catImg} alt=""></img>
        <div className="overlay"></div>
        <div className="hoverBtn">
          <a href="#/">加入購物車</a>
        </div>
      </div>
      <div className="title">Vetreska 未卡 | 桃子貓抓盒</div>
      <div className="price">NT$ 450</div>
    </div>
  )
}

export default HomeProductCard
