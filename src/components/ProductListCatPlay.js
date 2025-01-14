import ProductListTag from './ProductListTag'
import ProductListSubHero from './ProductListSubHero'
import ProductListTitle from './ProductListTitle'
import ProductCard from './ProductCard'
import '../Styles/ProductList.scss'
import PaginationPage2 from './PaginationPage2'
import HomeBlogSection from './HomeBlogSection'
import CAT_PRODUCT from '../product-local-json/cat-product.json'
import { NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import subHero_catPlay from '../images/ProductList-images/cat-play-kitty.jpeg'


const ProductListCatPlay = (tag)=>{
    const catPlay = CAT_PRODUCT["Cat-Play"];
    // console.log(catPlay)
const catPlayPage2= "/productlist/cat/play/2"
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
            <ProductListSubHero subHero={subHero_catPlay} title={"貓貓玩具"} article={"讓毛孩在家當個玩具富翁吧，一起終結毛孩憂鬱！"}/>
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
        <PaginationPage2 href={catPlayPage2}/>
      </div>
    </div>
        <HomeBlogSection/>

    </>
    )
}

        
        

export default ProductListCatPlay;

