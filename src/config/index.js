export const debug = true
// 測試開發/營運網址
export const devUrl = 'http://localhost:3000'
export const prodUrl = 'http://www.mao-planet.com'

export const pathnameList = [
  '/home',
  '/adoptlist',
  '/productlist',
  '/productlist/dog',
  '/productlist/cat',
  '/hotellist',
  '/bloglist',
  '/member',
]

export const pathnameTextList = [
  '/首頁',
  '/毛孩找家',
  '/毛孩雜貨',
  '/毛孩雜貨/狗狗館',
  '/毛孩雜貨/貓貓館',
  '/毛孩假期',
  '/鏟屎官大補帖',
  '/會員中心',
]

export const Logo = debug ? devUrl : prodUrl
