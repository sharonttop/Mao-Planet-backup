import ProductListTag from './ProductListTag'
import ProductListSubHero from './ProductListSubHero'
import ProductListTitle from './ProductListTitle'
import ProductCard from './ProductCard'
import '../Styles/ProductList.scss'
import { Link } from 'react-router-dom'
import HomeBlogSection from './HomeBlogSection'
import DOG_PRODUCT from '../product-local-json/dog-product.json'
import { NavItem } from 'react-bootstrap'
import subHero_dogOutdoor from '../images/ProductList-images/dog-outdoor.jpg'
import Pagination from './Pagination'


const ProductListDogOutdoor = (tag)=>{
    const dogOutdoor = DOG_PRODUCT["Dog-Outdoor"];
    // console.log(dogOutdoor)

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
            <ProductListSubHero subHero={subHero_dogOutdoor} title={"狗狗出遊"} article={"陪主人上山下海，可以可愛也可以帥帥，機能與美觀都兼顧！"}/>
            <ProductListTitle subTitle={"狗狗出遊"} engTitle={"Outdoor"}/>
        <div className='AG-productCards'>
        {dogOutdoor.map((item) => {
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
        <HomeBlogSection/>
    </>
    )
}

        
        

export default ProductListDogOutdoor;

