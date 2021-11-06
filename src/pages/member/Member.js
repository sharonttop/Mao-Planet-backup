import React from 'react'
import { Link, withRouter } from 'react-router-dom'

// 子頁面區域元件
import UserOrder from './admin/user/UserOrder'
import InfoEdit from './admin/user/InfoEdit/InfoEdit'
import AddressEdit from './admin/user/AddressEdit'
import PasswordChange from './admin/user/PasswordChange/PasswordChange'
import PetId from './admin/user/petId/PetId'
import './Member.scss'
import MemberBackground from '../../images/Member/memberBackground3.svg'
import MemberCard from './MemberCard'
import { FaPaw } from 'react-icons/fa'

function Member(props) {
  // 預設出現的文字元件
  const Default = () => (
    <>
      <div className="MemberBackground">
        <p>
          <FaPaw />
          為您推薦Recommend
        </p>
        <img src={MemberBackground} alt="" />
      </div>
      <MemberCard />

      <button
        type="button"
        onClick={() => {
          logout()
          props.history.push('/home')
          window.location.reload() //強制刷新頁面
        }}
        className="btn btn-primary"
      >
        登出
      </button>
    </>
  )
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
    order: UserOrder,
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
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="card memberCard">
              <div className="memberBanner">
                <p>會員訊息</p>
              </div>
              <div className="memberCardwrap">
                <ul>
                  <li>
                    <Link to="/admin/user/infoedit">個人資料</Link>
                  </li>
                  <li>
                    <Link to="/admin/user/petid">毛孩ID</Link>
                  </li>
                  <li>
                    <Link to="/admin/user/order">我的訂單</Link>
                  </li>
                  <li>
                    <Link to="/admin/user/#/">追蹤清單</Link>
                  </li>
                  <li>
                    <Link to="/admin/user/addressedit">收貨地址</Link>
                  </li>
                  <li>
                    <Link to="/admin/user/passwordchange">密碼修改</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-8">
            {/* <h1>會員管理區</h1> */}
            <Component />
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(Member)
