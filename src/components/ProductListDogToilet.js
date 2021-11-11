import ProductListTag from './ProductListTag'
import ProductListSubHero from './ProductListSubHero'
import ProductListTitle from './ProductListTitle'
import ProductCard from './ProductCard'
import '../Styles/ProductList.scss'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'

import DOG_PRODUCT from '../product-local-json/dog-product.json'
import { NavItem } from 'react-bootstrap'
import subHero_dogToilet from '../images/ProductList-images/dog-toilet.jpeg'


const ProductListDogToilet = (tag)=>{
    const dogToilet = DOG_PRODUCT["Dog-Toilet"];
    console.log(dogToilet)

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
            <ProductListSubHero subHero={subHero_dogToilet}/>
            <ProductListTitle subTitle={"狗狗廁所"} engTitle={"Toilets"}/>
        <div className='AG-productCards'>
        {dogToilet.map((item) => {
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

        
        

export default ProductListDogToilet;

