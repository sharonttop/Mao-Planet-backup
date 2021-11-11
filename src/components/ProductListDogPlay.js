import ProductListTag from './ProductListTag'
import ProductListSubHero from './ProductListSubHero'
import ProductListTitle from './ProductListTitle'
import ProductCard from './ProductCard'
import '../Styles/ProductList.scss'

import DOG_PRODUCT from '../product-local-json/dog-product.json'
import { NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import subHero_dogPlay from '../images/ProductList-images/dog-play.jpeg'
import Pagination from './Pagination'


const ProductListDogPlay = (tag)=>{
    const dogPlay = DOG_PRODUCT["Dog-Play"];
    // console.log(dogPlay)

    return(
    <>
    <div className="AG-productList-container">
        <div className="AG-productTags">
        <Link to="/productlist/dog/food"><ProductListTag >狗狗美食</ProductListTag></Link>
        <Link to="/productlist/dog"><ProductListTag >狗狗玩具</ProductListTag></Link>
        <Link to="/productlist/dog/toilet"><ProductListTag >狗狗廁所</ProductListTag></Link>
        <Link to="/productlist/dog/health"><ProductListTag >狗狗保健</ProductListTag></Link>
        <Link to="/productlist/dog/outdoor"><ProductListTag >狗狗出遊</ProductListTag></Link>
        </div>
            <ProductListSubHero subHero={subHero_dogPlay}/>
            <ProductListTitle subTitle={"狗狗玩具"} engTitle={"Toys"}/>
        <div className='AG-productCards'>
        {dogPlay.map((item) => {
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

        
        

export default ProductListDogPlay;

