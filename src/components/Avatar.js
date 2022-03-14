import React, { useState, useEffect, useRef } from 'react'
import { AUTH_TOKEN, IMG_PATH } from '../config'
import { withRouter } from 'react-router-dom'

// 自定義React Hooks紀錄先前狀態
function usePrevious(value) {
  //創建一個接受值的Hook，使用useRef Hook創建一個ref，最後使用useEffect記住最新值
  const ref = useRef()
  useEffect(() => {
    ref.current = value
    //紀錄先前的紀錄
  })
  return ref.current
}

function Avatar(props) {
  const [avatar, setAvatar] = useState('')
  /*
  (從login引入useState作法)
  const { auth, myAvatar, setMyAvatar } = props
  console.log(myAvatar)可直接取得圖片名稱
  */
  const prevPathName = usePrevious(props.location.pathname)
  const token = localStorage.getItem('token')

  //delay發動
  // const delay = (ms = 5000) => new Promise((r) => setTimeout(r, ms))
  const avatarReload = async () => {
    const r = await fetch(AUTH_TOKEN, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      }, //設定檔頭，確認Authorization是否有送出Bearer格式的token，'Bearer '一定後面要空一格
    })
    const obj = await r.json()
    setAvatar(obj.avatar)
  }

  useEffect(() => {
    if (prevPathName !== props.location.pathname) avatarReload()
    //prevPathName用usePrevious儲存前一location.pathname變數，當比對和現在的location.pathname不同時，就會執行couponReload()重新fetch後端資訊
  }, [props.location.pathname])
  //[props.location.pathname]紀錄改變時才觸發條件

  const avatarStyle = {
    width: '35px',
    height: '35px',
  }

  const avatarImg = avatar
    ? IMG_PATH + '/' + avatar
    : IMG_PATH + '/default-avatar.svg'
  return (
    <>
      <div className="ACadoptAvatar" style={avatarStyle}>
        <img src={avatarImg} alt="" id="img01" />
      </div>
    </>
  )
}

export default withRouter(Avatar)
