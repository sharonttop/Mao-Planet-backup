import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { UPLOAD_PETID, PETID_COUPON } from '../../../../../config'
import { Button, Modal } from 'react-bootstrap'
import PetIdCard from './PetIdCard'

import petIdCoupon from '../../../../../images/PetID/petIdCoupon.svg'
import petIdCouponAD from '../../../../../images/PetID/petIdCouponAD.svg'
import { FaPaw } from 'react-icons/fa'

function PetIdTest(prop) {
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
  const [petInputList, setPetInputList] = useState([
    {
      pet_map_key: 1,
      pet_avatar: '',
      pet_name: '',
      pet_breed: '',
      pet_birthday: '',
      isFileUpload: false,
    },
  ])
  // console.log('petInputList', petInputList)

  //是否為第一次新增petId，要跳出發送折價券標的彈出視窗
  const [isFirstTime, setIsFirstTime] = useState(true)
  //折價券彈出視窗
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // 紀錄點選要刪除的input存成Array
  const [delArray, setDelArray] = useState([])
  // 追蹤儲存點選刪除的input的console.log('delArray', delArray)
  // useEffect(() => {
  //   console.log('delArray', delArray)
  // }, [delArray])

  // 若已存取過寵物資料，進入頁面直接顯示
  const token = localStorage.getItem('token')

  useEffect(() => {
    ;(async () => {
      const r = await fetch(UPLOAD_PETID, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token,
        }, //設定檔頭，確認Authorization是否有送出Bearer格式的token，'Bearer '一定後面要空一格
      })
      const getPetIdData = await r.json()
      if (getPetIdData && getPetIdData.length > 0) {
        setPetInputList(getPetIdData)
        setIsFirstTime(false) //過去有建立過就不用發折價券，有fetch到資料就設定fales
      }
    })()
  }, [])

  //抓客人id
  const member_id = JSON.parse(localStorage.getItem('member')).id

  const handleSubmit = async (e) => {
    e.preventDefault() // 阻擋form的預設送出行為
    /*確認有無取到表單的值
    const formData = new FormData(e.target)
    console.log(formData.get('pet_avatar[]'))
    console.log(formData.get('pet_name[]'))
    console.log(formData.get('pet_breed[]'))
    console.log(formData.get('pet_birthday[]'))
    */

    const fd = new FormData(document.petId_form)
    fd.append('user_id', member_id) //從token抓取客戶id存到表單送到後端
    fd.append('delArray', JSON.stringify(delArray)) //將陣列變成JSON格式傳到後端

    //若為第一次建立id，新增petCoupon到後端資料表coupon_petid欄位
    if (isFirstTime) {
      fetch(PETID_COUPON, {
        method: 'PUT',
        // body: usp.toString(),
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/x-www-form-urlencoded',
        }, //設定檔頭，確認Authorization是否有送出Bearer格式的token，'Bearer '一定後面要空一格
      })
      handleShow() //彈出視窗
    }

    //上傳更新,寵物Id資料
    const r = await fetch(UPLOAD_PETID, {
      method: 'POST',
      body: fd,
    })
    const data = await r.json()
    console.log('data', data)
    if (!isFirstTime) alert('已更新儲存')
  }

  const display = (
    <>
      <div className="petIdCouponAD">
        <img
          src={petIdCouponAD}
          alt=""
          style={{
            width: '70%',
            marginLeft: '12%',
            marginRight: 'auto',
            marginBottom: '2%',
          }}
        />
      </div>
      <form name="petId_form" className="" onSubmit={handleSubmit}>
        {petInputList &&
          petInputList.map((v, i) => (
            <PetIdCard
              key={v.pet_map_key ? v.pet_map_key : petInputList[i].pet_id}
              //後端fetch來的資料沒有含pet_map_key，若沒有pet_map_key就用sql自動生成的pet_id來代替
              inputIndex={i}
              petInputList={petInputList}
              setPetInputList={setPetInputList}
              delArray={delArray}
              setDelArray={setDelArray}
            />
          ))}
        <Button
          type="submit"
          variant="primary"
          className="btn petIdBtn"
          style={{
            fontFamily: 'Noto Sans TC',
            marginLeft: 'auto',
          }}
        >
          更新毛孩ID
        </Button>
      </form>
      {/* Coupon彈出視窗 */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          style={{
            backgroundColor: '#F5DF4D',
            borderRadius: '1.2rem 1.2rem 0 0',
          }}
        >
          <Modal.Title
            style={{
              marginLeft: '35%',
              fontFamily: 'Noto Sans TC',
              color: 'white',
            }}
          >
            ID建立成功
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2
            style={{
              color: '#646464',
              fontFamily: 'Noto Sans TC',
              fontSize: '1.3rem',
              marginLeft: '30%',
              marginBottom: '4%',
              marginTop: '3%',
            }}
          >
            您已獲得折價券
          </h2>
          <img
            src={petIdCoupon}
            alt=""
            style={{ marginLeft: '20%', width: '60%' }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Link to="/productlist/cat">
            {' '}
            <FaPaw />
            &nbsp;前往購物
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  )
  return <>{isLoading ? loading : display}</>
}

export default withRouter(PetIdTest)
