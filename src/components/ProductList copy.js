import ProductListTag from './ProductListTag'
import ProductListSubHero from './ProductListSubHero'
import ProductListTitle from './ProductListTitle'
import ProductCard from './ProductCard'
import '../Styles/ProductList.scss'
import ProductDetails from './ProductDetails'

import CAT_PRODUCT from '../product-local-json/cat-product.json'
import { NavItem } from 'react-bootstrap'

const ProductListCat = (tag)=>{
    const menuItems = [];
    const catFood = CAT_PRODUCT["Cat-Food"];
    console.log(catFood)

    return(
    <>
    <div className="AG-productList-container">
        <div className="AG-productTags">
            <ProductListTag >貓貓美食</ProductListTag>
            <ProductListTag >貓貓玩具</ProductListTag>
            <ProductListTag >貓貓廁所</ProductListTag>
            <ProductListTag >貓貓保健</ProductListTag>
            <ProductListTag >貓貓出遊</ProductListTag>
        </div>
            <ProductListSubHero />
            <ProductListTitle />
        <div className='AG-productCards'>
        {catFood.map((item) => {
            return (
                <>
                <ProductCard ProductImg={item.URL} ProductTitle={item.title} ProductPrice={item.price} />
                </>
        )})}
        </div>
    </div>
    </>
    )
}

        
        

export default ProductListCat;