import React from 'react'
// 高階元件樣式(HOC)，增強元件用的
import { withRouter, Link } from 'react-router-dom'
// 中文路徑對照陣列，移出到config/index.js中設定
import { pathnameList, pathnameTextList } from '../config'

function MultiLevelBreadCrumb(props) {
  const { location } = props

  // find index，目前匹配的pathname，它的中文是什麼
  const findPathnameIndex = (pathname) => {
    // 找到剛好的，從前面開始找起
    const foundIndex = pathnameList.findIndex((v, i) => v === pathname)

    // 沒找到剛好的路徑時用的(動態id params會遇到)
    // 例如：product/detail/123
    // 會用patchnameList的最後一個開始找起
    // 找到最長的比對的那個為路徑
    // ex. `product/detail/112` 會找到 `product/detail`
    if (foundIndex === -1) {
      for (let i = pathnameList.length - 1; i >= 0; i--) {
        if (pathname.includes(pathnameList[i])) {
          return i
        }
      }
    }

    return foundIndex
  }

  // 有一個項目和二個項目的情況
  const formatText = (index) => {
    if (index === -1) return ''

    // '/毛孩雜貨/貓貓館/貓的玩具' -> ['','毛孩雜貨','貓貓館', '貓的玩具']
    const textArray = pathnameTextList[index].split('/')

    // '/productlist/cat/toys' -> ['','product','cat', 'toys']
    const pathArray = pathnameList[index].split('/')

    console.log(textArray, pathArray)

    const listArray = textArray.map((v, i, array) => {
      if (i === 0) return ''

      if (i === array.length - 1) {
        return (
          <li key={i} className="breadcrumb-item active" aria-current="page">
            {v}
          </li>
        )
      }

      return (
        <li key={i} className="breadcrumb-item">
          <Link to={pathArray.slice(0, i + 1).join('/')}>{v}</Link>
          {/* <p>{v}</p> */}
        </li>
      )
    })

    return listArray
  }

  // 首頁不出現breadcrumb
  if (location.pathname === '/home') return <></>

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb bg-white container-fluid px-md-5 py-md-1 mb-md-0">
          <li className="breadcrumb-item">
            <Link to="/home">首頁</Link>
            {/* <p>首頁</p> */}
          </li>
          {formatText(findPathnameIndex(location.pathname))}
        </ol>
      </nav>
    </>
  )
}

export default withRouter(MultiLevelBreadCrumb)
