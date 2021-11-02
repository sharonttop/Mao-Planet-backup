import HomeProductCard from './HomeProductCard'
import '../Styles/HomeProductCardSection.scss'

const HomeProductCardSection = (tag) => {
  return (
    <>
      <div className="productList-container">
        <div className="title-container">
          <span>_________________</span>
          <span className="productListTitle">
            新品到貨&nbsp;&nbsp;&nbsp;&nbsp;New Arrival
          </span>
          <span>_________________</span>
        </div>
        <div className="HomeProductCards">
          <HomeProductCard />
          <HomeProductCard />
          <HomeProductCard />
          <HomeProductCard />
        </div>
      </div>
      <div className="productList-container mt-0 mb-5">
        <div className="title-container">
          <span>_________________</span>
          <span className="productListTitle">
            熱銷補貨&nbsp;&nbsp;&nbsp;&nbsp;Hot Sales
          </span>
          <span>_________________</span>
        </div>
        <div className="HomeProductCards">
          <HomeProductCard />
          <HomeProductCard />
          <HomeProductCard />
          <HomeProductCard />
        </div>
      </div>
    </>
  )
}

export default HomeProductCardSection
