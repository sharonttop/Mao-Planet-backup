import ProductListTag from './ProductListTag'
import ProductListSubHero from './ProductListSubHero'
import ProductListTitle from './ProductListTitle'
import ProductCard from './ProductCard'

import '../Styles/ProductList.scss'
import ProductDetails from './ProductDetails'

const ProductList = (tag) => {
  return (
    <>
      <div className="AG-productList-container">
        {/* <div className="AG-breadCrumb">
            <a href="#">Mao Planet</a>
                <span>{` > `}</span>
            <a href="#">毛孩雜貨</a>
                <span>{` > `}</span>
            <a href="#">貓貓館</a>
                <span>{` > `}</span>
            <a href="#">貓貓玩具</a>
        </div> */}
        <div className="AG-productTags">
          <ProductListTag>貓貓美食</ProductListTag>
          <ProductListTag>貓貓玩具</ProductListTag>
          <ProductListTag>貓貓廁所</ProductListTag>
          <ProductListTag>貓貓保健</ProductListTag>
          <ProductListTag>貓貓出遊</ProductListTag>
        </div>
        <ProductListSubHero />
        <ProductListTitle />
        <div className="AG-productCards">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <div>
        <ProductDetails />
      </div>
    </>
  )
}

export default ProductList
