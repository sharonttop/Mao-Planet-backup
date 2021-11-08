import ProductListTag from './ProductListTag'
import ProductListSubHero from './ProductListSubHero'
import ProductListTitle from './ProductListTitle'
import ProductCard from './ProductCard'
import '../Styles/ProductList.scss'
import { Link } from 'react-router-dom'

import ProductDetails from './ProductDetails'

import CAT_PRODUCT from '../product-local-json/cat-product.json'
import { NavItem } from 'react-bootstrap'

const ProductListOutdoor = (tag) => {
  const catOutdoor = CAT_PRODUCT['Cat-Outdoor']
  console.log(catOutdoor)

  return (
    <>
      <div className="AG-productList-container">
        <div className="AG-productTags">
          <Link to="/productlist/cat/food">
            <ProductListTag>貓貓美食</ProductListTag>
          </Link>
          <Link to="/productlist/cat">
            <ProductListTag>貓貓玩具</ProductListTag>
          </Link>
          <Link to="/productlist/cat/toilet">
            <ProductListTag>貓貓廁所</ProductListTag>
          </Link>
          <Link to="/productlist/cat/health">
            <ProductListTag>貓貓保健</ProductListTag>
          </Link>
          <Link to="/productlist/cat/outdoor">
            <ProductListTag>貓貓出遊</ProductListTag>
          </Link>
        </div>
        <ProductListSubHero />
        <ProductListTitle />
        <div className="AG-productCards">
          {catOutdoor.map((item) => {
            return (
              <>
                <ProductCard
                  ProductImg={item.URL}
                  ProductTitle={item.title}
                  ProductPrice={item.price}
                />
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ProductListOutdoor