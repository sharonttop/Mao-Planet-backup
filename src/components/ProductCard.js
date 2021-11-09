import '../Styles/ProductCard.scss'
import { useStateValue } from '../StateProvider'
// import { Link } from 'react-router-dom'

function ProductCard({ ID, ProductImg, ProductTitle, ProductPrice }) {
  const [{ basket }, dispatch] = useStateValue()

  console.log('here is the basket >>>', basket)

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
    <div className="AG-product-card-container">
      <div className="AG-card-pic-area">
        <img className="AG-card-pic" src={ProductImg} alt=""></img>
        <div className="AG-overlay"></div>
        <div className="AG-hoverBtn">
          <a href="#" onClick={addToBasket}>
            加入購物車
          </a>
        </div>
      </div>
      <div className="AG-title">{ProductTitle}</div>
      <div className="AG-price">NT$ {ProductPrice}</div>
    </div>
  )
}

export default ProductCard
