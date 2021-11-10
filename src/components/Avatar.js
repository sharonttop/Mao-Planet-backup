import React, { useState, useEffect, useRef } from 'react'
import { AUTH_TOKEN, IMG_PATH } from '../config'
import { withRouter } from 'react-router-dom'

function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
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
    // await delay()//delay發動
    const r = await fetch(AUTH_TOKEN, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      }, //設定檔頭，確認Authorization是否有送出Bearer格式的token，'Bearer '一定後面要空一格
    })
    const obj = await r.json()
    setAvatar(obj.avatar)
  }

  //-------抓客人資料(測試後端)
  useEffect(() => {
    if (prevPathName !== props.location.pathname) avatarReload()
  }, [props.location.pathname])

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
