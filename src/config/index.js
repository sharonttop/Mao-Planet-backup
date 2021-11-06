export const debug = true
// 測試開發/營運網址
export const devUrl = 'http://localhost:3000'
export const prodUrl = 'http://www.mao-planet.com'
//---Sharon串接後端---------
let config = {}

export const API_HOST = 'http://localhost:3004'

export const UPLOAD_AVATAR = API_HOST + '/try-upload2'
export const IMG_PATH = API_HOST + '/img'
export const REGISTER = API_HOST + '/register'
export const LOGIN_JWT = API_HOST + '/login-jwt'
export const JWT_GET_DATA = API_HOST + '/get-data-jwt'
export const AUTH_TOKEN = API_HOST + '/auth-token'
export const PASSWORD_CHANGE = API_HOST + '/password-change'

config = {
  API_HOST,
  UPLOAD_AVATAR,
  IMG_PATH,
  LOGIN_JWT,
  JWT_GET_DATA,
  AUTH_TOKEN,
  PASSWORD_CHANGE,
}
export default config

//-----Sharon-------
export const pathnameList = [
  '/home',
  '/login',
  '/signup',
  '/admin',
  '/admin/user/order',
  '/admin/user/infoedit',
  '/admin/user/passwordchange',
  '/admin/user/addressedit',
  '/admin/user/petid',
  '/adoptlist',
  '/adoptlist/adoptpage',
  '/productlist',
  '/productlist/dog',
  '/productlist/cat',
  '/hotellist',
  '/hotellist/hotelpage',
  '/bloglist',
]

export const pathnameTextList = [
  '/首頁',
  '/會員登入',
  '/會員註冊',
  '/會員專區',
  '/會員專區/訂單管理',
  '/會員專區/個人資料管理',
  '/會員專區/密碼修改',
  '/會員專區/收貨地址',
  '/會員專區/毛孩ID',
  '/毛孩找家',
  '/毛孩找家/毛孩簡介',
  '/毛孩雜貨',
  '/毛孩雜貨/狗狗館',
  '/毛孩雜貨/貓貓館',
  '/毛孩假期',
  '/毛孩假期/旅宿簡介',
  '/鏟屎官大補帖',
]

export const Logo = debug ? devUrl : prodUrl
