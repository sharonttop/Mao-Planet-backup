import React, { useState, useEffect, useRef } from 'react'

import { AUTH_TOKEN } from '../config'
import { withRouter } from 'react-router-dom'
import setPetIdCouponMark from '../images/Member/setPetIdCouponMark.svg'

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
function PetIdCouponMark(props) {
  const [showCoupon, setShowCoupon] = useState(false)

  const prevPathName = usePrevious(props.location.pathname)
  const token = localStorage.getItem('token')

  const couponReload = () => {
    ;(async () => {
      const r = await fetch(AUTH_TOKEN, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token,
        }, //設定檔頭，確認Authorization是否有送出Bearer格式的token，'Bearer '一定後面要空一格
      })
      const obj = await r.json()
      setShowCoupon(obj.coupon_petid == null)
    })()
  }

  useEffect(() => {
    if (prevPathName !== props.location.pathname) couponReload()
    //prevPathName用usePrevious儲存前一location.pathname變數，當比對和現在的location.pathname不同時，就會執行couponReload()重新fetch後端資訊
  }, [props.location.pathname])
  //[props.location.pathname]紀錄改變時才觸發條件

  return (
    <>
      {' '}
      <img
        id="couponMark"
        src={setPetIdCouponMark}
        style={{
          visibility: showCoupon ? 'visible' : 'hidden',
        }}
        alt=""
      />
    </>
  )
}

export default withRouter(PetIdCouponMark)
