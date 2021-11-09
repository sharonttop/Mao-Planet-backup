import HomeProductCard from './HomeProductCard'
import CAT_PRODUCT1 from '../home-catproduct-local-json/home-new-arrival.json'
import CAT_PRODUCT2 from '../home-catproduct-local-json/home-hot-sales.json'
import '../Styles/HomeProductCardSection.scss'

const HomeProductCardSection = (tag) => {
  const catPlay1 = CAT_PRODUCT1['Cat-Play']
  const catPlay2 = CAT_PRODUCT2['Cat-Play']
  // console.log(catPlay)
  return (
    <>
      <div className="ACproductList-container">
        <div className="ACtitle-container mb-5">
          <span>_________________</span>
          <span className="ACproductListTitle">
            新品到貨&nbsp;&nbsp;&nbsp;&nbsp;New Arrival
          </span>
          <span>_________________</span>
        </div>

        <div className="ACHomeProductCards">
          {catPlay1.map((item) => {
            return (
              <>
                <HomeProductCard
                  ProductImg={item.URL}
                  ProductTitle={item.title}
                  ProductPrice={item.price}
                />
              </>
            )
          })}
        </div>
      </div>

      <div className="ACproductList-container">
        <div className="ACtitle-container my-5">
          <span>_________________</span>
          <span className="ACproductListTitle">
            熱銷補貨&nbsp;&nbsp;&nbsp;&nbsp;Hot Sales
          </span>
          <span>_________________</span>
        </div>

        <div className="ACHomeProductCards">
          {catPlay2.map((item) => {
            return (
              <>
                <HomeProductCard
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

export default HomeProductCardSection
