import React, { useState, useEffect, useRef } from 'react'

import { AUTH_TOKEN } from '../config'
import { withRouter } from 'react-router-dom'
import setPetIdCouponMark from '../images/Member/setPetIdCouponMark.svg'

function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
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

  //-------抓客人資料(測試後端)
  useEffect(() => {
    if (prevPathName !== props.location.pathname) couponReload()
  }, [props.location.pathname])
  //[props.location.pathname]

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

//從前端localStorage抓，必須要登出在登入才有反應

// import React from 'react'
// // import { PETID_COUPON } from '../config'
// import setPetIdCouponMark from '../images/Member/setPetIdCouponMark.svg'
// // import { withRouter } from 'react-router-dom'

// function PetIdCouponMark(props) {
//   const ShowPetIdCouponMark = JSON.parse(
//     localStorage.getItem('member')
//   ).coupon_petid

//   //寫在前端必須要重新登入才會消失

// return (
//   <>
//     {' '}
//     <img
//       id="couponMark"
//       src={setPetIdCouponMark}
//       style={{
//         visibility: ShowPetIdCouponMark == null ? 'visible' : 'hidden',
//       }}
//       alt=""
//     />
//   </>
// )
// }

// export default PetIdCouponMark
