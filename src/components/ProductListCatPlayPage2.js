import ProductListTag from './ProductListTag'
import ProductListSubHero from './ProductListSubHero'
import ProductListTitle from './ProductListTitle'
import ProductCard from './ProductCard'
import '../Styles/ProductList.scss'
import CAT_PRODUCT from '../product-local-json/cat-product.json'
import { NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'

import subHero_catPlay from '../images/ProductList-images/cat-play-kitty.jpeg'


const ProductListCatPlayPage2 = (tag)=>{
    const catPlay = CAT_PRODUCT["Cat-Play-2"];
    // console.log(catPlay)

    return(
    <>
    <div className="AG-productList-container">
        <div className="AG-productTags">
        <Link to="/productlist/cat/food"><ProductListTag >貓貓美食</ProductListTag></Link>
        <Link to="/productlist/cat"><ProductListTag >貓貓玩具</ProductListTag></Link>
        <Link to="/productlist/cat/toilet"><ProductListTag >貓貓廁所</ProductListTag></Link>
        <Link to="/productlist/cat/health"><ProductListTag >貓貓保健</ProductListTag></Link>
        <Link to="/productlist/cat/outdoor"><ProductListTag >貓貓出遊</ProductListTag></Link>
        </div>
            <ProductListSubHero subHero={subHero_catPlay}/>
            <ProductListTitle subTitle={"貓貓玩具"} engTitle={"Toys"}/>
        <div className='AG-productCards'>
        {catPlay.map((item) => {
            return (
                <>
                <ProductCard ID={item.ID} ProductImg={item.URL} ProductTitle={item.title} ProductPrice={item.price} />
                </>
        )})}
        </div>
        <div className="ACblogLastSec">
        <Pagination />
      </div>
    </div>
    </>
    )
}

        
        

export default ProductListCatPlayPage2;
