// 使用套件
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom'
import React, { useState } from 'react'
import './Styles/global.scss'

// 頁面用元件
import Home from './pages/Home/Home'
import AdoptList from './pages/AdoptList'
import ProductList from './pages/ProductList'
import ProductDog from './pages/ProductDog'
import ProductCat from './pages/ProductCat'
import HotelList from './pages/HotelList'
import BlogList from './pages/BlogList/BlogList'
import BlogArticle1 from './pages/BlogArticle/BlogArticle1'
import Member from './pages/Member'
import NotFoundPage from './pages/NotFoundPage'

// 組合用元件
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'
import ScrollToTop from './components/ScrollToTop'
//import BreadCrumb from './components/BreadCrumb'
import MultiLevelBreadCrumb from './components/MultiLevelBreadCrumb'

function App(props) {
  const [auth, setAuth] = useState(false)

  return (
    <Router>
      <>
        {/* LOGO+標題+導覽列+上方選單 */}
        <MyNavbar auth={auth} />
        {/* 主內容區 */}
        <MainContent>
          <MultiLevelBreadCrumb />
          {/* 匹配路由表(路徑單一匹配) */}
          {/* 切換顯示的元件畫面放在這下面 */}
          {/* ScrollToTop是為了讓連到另一頁內容時，頁面回到最上方 */}
          <ScrollToTop>
            <Switch>
              <Route path="/bloglist/blogarticle1">
                <BlogArticle1 />
              </Route>
              <Route path="/bloglist">
                <BlogList />
              </Route>
              <Route path="/productlist/dog">
                <ProductDog />
              </Route>
              <Route path="/productlist/cat">
                <ProductCat />
              </Route>
              <Route path="/productlist">
                <ProductList />
              </Route>
              <Route path="/hotellist">
                <HotelList auth={auth} />
              </Route>
              <Route path="/adoptlist">
                <AdoptList auth={auth} />
              </Route>
              <Route path="/home">
                <Home auth={auth} />
              </Route>
              <Route path="/member">
                <Member auth={auth} />
              </Route>
              <Route path="*">
                <NotFoundPage />
              </Route>

              {/* 這裡要定義網址參數的屬性名稱 */}
              {/* <Route path="/product/baby/:id?">
                <ProductBaby />
              </Route> */}
            </Switch>
            {/* end 匹配路由表 */}
          </ScrollToTop>
        </MainContent>
        {/* 頁尾+版權訊息 */}
        <MyFooter />
      </>
    </Router>
  )
}

export default App
