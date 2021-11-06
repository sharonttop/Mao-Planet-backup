import { withRouter, Link } from 'react-router-dom'

function BreadCrumb(props) {
  console.log(props)
  const { location } = props

  const pathnameList = [
    '/adoptlist',
    // '/productlist',
    '/hotellist',
    '/bloglist',
    '/member',
  ]
  const pathnameTextList = [
    '毛孩找家',
    // '毛孩雜貨',
    '毛孩假期',
    '鏟屎官大補帖',
    '會員中心',
  ]

  const convertPathnameToText = (pathname) => {
    const index = pathnameList.findIndex((v) => v === pathname)
    if (index > -1)
      return (
        <li className="breadcrumb-item active" aria-current="page">
          {pathnameTextList[index]}
        </li>
      )
    return ''
  }

  return (
    <>
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb container">
            <li className="breadcrumb-item">
              <Link to="/home">首頁</Link>
            </li>
            {convertPathnameToText(location.pathname)}
          </ol>
        </nav>
      </div>
    </>
  )
}

export default withRouter(BreadCrumb)