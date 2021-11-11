import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'

// 子頁面區域元件
// import UserOrder from './admin/user/UserOrder'
import InfoEdit from './admin/user/InfoEdit/InfoEdit'
import AddressEdit from './admin/user/AddressEdit/AddressEdit'
import PasswordChange from './admin/user/PasswordChange/PasswordChange'
import PetId from './admin/user/petId/PetId'
import './Member.scss'
// 引入圖片和元件
import MemberBackground from '../../images/Member/memberBackground3.svg'
import MemberDogBtn from '../../images/Member/MemberDogBtn.png'
import MemberCatBtn from '../../images/Member/MemberCatBtn.png'

import PetIdCouponMark from '../../components/PetIdCouponMark'
import MemberCard from './MemberCard'
import { FaPaw } from 'react-icons/fa'

function Member(props) {
  const [isLoading, setIsLoading] = useState(true)
  // 自動1秒後關閉指示的spinner
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => setIsLoading(false), 1000)
    }
  }, [isLoading])

  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

  const display = (
    <>
      <div className="MemberBackground">
        <p>
          <FaPaw />
          &nbsp;為您推薦Recommend
        </p>
        <img src={MemberBackground} alt="" />
      </div>
      <MemberCard />
      {/*  */}
      <div className="col-sm-8">
        <div className="card memberNewsCard">
          <div className="memberNews">
            <p>最新公告</p>
          </div>
          <div className="memberNewsWrap">
            <ul>
              <li>
                <Link to="/bloglist">
                  <FaPaw />
                  &nbsp;鏟屎官大補帖更新11/19
                </Link>
              </li>
              <hr className="MemberNewLineStyle" />
              <li>
                <Link to="/productlist/cat">
                  <FaPaw />
                  &nbsp;11月份最新商品資訊
                </Link>
              </li>
              <hr className="MemberNewLineStyle" />
              <li>
                <Link to="/admin/user/petid">
                  <FaPaw />
                  &nbsp;登入毛孩ID即享折價優惠
                </Link>
              </li>
              <hr className="MemberNewLineStyle" />
              <li>
                <Link to="/home">
                  <FaPaw />
                  &nbsp;系統維修公告
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*  */}
    </>
  )
  // 預設出現的文字元件
  const Default = () => <>{isLoading ? loading : display}</>
  console.log(props)

  // 網址參數對應頁面區塊元件
  // 屬性 = 網址上的task參數 props.match.params.task

  //會員登出
  const logout = () => {
    // clean if has line token in localstorage
    localStorage.removeItem('member')
    localStorage.removeItem('token')
    // setAuth(false)

    // UserDataService.logout().then((res) => {
    //   console.log(res.data)
    //   if (res.data.message === 'success') {
    //     setAuth(false)
    //   }
    // })
  }

  const tasks = {
    // order: UserOrder,
    infoedit: InfoEdit,
    addressedit: AddressEdit,
    passwordchange: PasswordChange,
    petid: PetId,
  }

  // 動態元件jsx標記的語法
  // 自訂元件需要大寫
  const Component = props.match.params.task
    ? tasks[props.match.params.task]
    : Default

  return (
    <>
      <div className="container MemberContainer">
        <div className="row">
          <div className="col-sm-4 memberMessage">
            <div className="card memberCard">
              <div className="memberBanner">
                <p>會員訊息</p>
              </div>
              <div className="memberCardwrap">
                <ul>
                  <li>
                    <Link to="/admin/user/infoedit">個人資料</Link>
                  </li>
                  <hr className="MemberLineStyle" />
                  <li>
                    <Link to="/admin/user/petid">毛孩ID</Link>
                    &nbsp;&nbsp;&nbsp;
                    <PetIdCouponMark />
                  </li>
                  <hr className="MemberLineStyle" />
                  <li>
                    <Link to="/admin/user/">我的訂單</Link>
                  </li>
                  <hr className="MemberLineStyle" />
                  <li>
                    <Link to="/admin/user/">追蹤清單</Link>
                  </li>
                  <hr className="MemberLineStyle" />
                  <li>
                    <Link to="/admin/user/addressedit">收貨地址</Link>
                  </li>
                  <hr className="MemberLineStyle" />
                  <li>
                    <Link to="/admin/user/passwordchange">密碼修改</Link>
                  </li>
                  <hr className="MemberLineStyle" />
                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        logout()
                        window.location.href = '/home'

                        //props.history.push('/home')
                        //window.location.reload() //強制刷新頁面
                      }}
                      className="btn btn-primary logoutMemberBtn"
                    >
                      登出
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            {/* 寵物廣告板 */}
            <div className="MemberDogBtn">
              <Link to="/productlist/dog">
                <img src={MemberDogBtn} alt="" />
              </Link>
            </div>
            <div className="MemberCatBtn">
              <Link to="/productlist/cat">
                <img src={MemberCatBtn} alt="" />
              </Link>
            </div>
          </div>
          <div className="col-sm-8 MemberDefault">
            {/* <h1>會員管理區</h1> */}
            <Component />
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(Member)
