import '../Styles/HomeProductCard.scss'

function HomeProductCard({ ProductImg, ProductTitle, ProductPrice }) {
  return (
    <div className="AG-product-card-container">
      <div className="AG-card-pic-area">
        <img className="AG-card-pic" src={ProductImg} alt=""></img>
        <div className="AG-overlay"></div>
        <div className="AG-hoverBtn">
          <a href="#/">加入購物車</a>
        </div>
      </div>
      <div className="AG-title">{ProductTitle}</div>
      <div className="AG-price">NT$ {ProductPrice}</div>
    </div>
  )
}

export default HomeProductCard
