import React, { useEffect } from 'react'
import { JWT_GET_DATA } from '../config'
import { withRouter } from 'react-router-dom'

function AuthHeader(props) {
  const { setAuth } = props
  const token = localStorage.getItem('token')
  //必須藥包在useEffect裡面才會在變動時
  // useEffect(() => {
  if (token) {
    fetch(JWT_GET_DATA, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      }, //設定檔頭，確認Authorization是否有送出Bearer格式的token，'Bearer '一定後面要空一格
    })
      .then((r) => r.json())
      .then((obj) => {
        const r = JSON.stringify(obj, null, 4)
        console.log(r)
      })
    setAuth(true)
  } else {
    setAuth(false)
  }
  // }, [])
  return <>{}</>
}

export default withRouter(AuthHeader)
