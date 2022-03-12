import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import config, { UPLOAD_PETID, PETID_COUPON } from '../../../../../config'
import { Button, Modal } from 'react-bootstrap'
import PetIdCard from './PetIdCard'

import petIdCoupon from '../../../../../images/PetID/petIdCoupon.svg'
import petIdCouponAD from '../../../../../images/PetID/petIdCouponAD.svg'
import { FaPaw } from 'react-icons/fa'
import axios from 'axios'

function PetIdTest(prop) {
  const [isFirstTime, setIsFirstTime] = useState(true)
  //彈出視窗
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // console.log(config)
  //下拉選單:汪喵
  const member_id = JSON.parse(localStorage.getItem('member')).id

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

  const [delArray, setDelArray] = useState([])

  console.log('petInputList', petInputList)
  // console.log('...petInputList.id', petInputList[0].id)

  // 若已存取過寵物資料，進入頁面直接顯示
  /*
  useEffect(() => {
    ;(async () => {
      const r = await fetch(UPLOAD_PETID)
      const obj = await r.json()
      console.log('getPetData', obj)

      // setEditFields(obj)
    })()
  }, [])
  */

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
        setIsFirstTime(false)
      }
      // console.log('已存的petId', { ...getPetIdData })
      // console.log(petInputList)
      // const getPetDataObj = { ...getPetIdData }
      // console.log('getPetDataObj', getPetDataObj)

      // console.log('petData', petData)
      // setPetInputList({
      //   id: '',
      //   petImgSrc: getPetIdData[0].pet_avatar,
      //   petName: getPetIdData[0].pet_name,
      //   breed: getPetIdData[0].pet_breed,
      //   petBirthday: getPetIdData[0].pet_birthday,
      // })
    })()
  }, [])

  useEffect(() => {
    console.log('delArray', delArray)
  }, [delArray])

  const handleSubmit = async (e) => {
    // 阻擋form的預設送出行為
    e.preventDefault()

    const formData = new FormData(e.target)
    console.log(formData.get('pet_avatar[]'))
    console.log(formData.get('pet_name[]'))
    console.log(formData.get('pet_breed[]'))
    console.log(formData.get('pet_birthday[]'))

    const fd = new FormData(document.petId_form)
    fd.append('user_id', member_id)
    fd.append('delArray', JSON.stringify(delArray))

    //新增petCoupon到後端資料表
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

    const r = await fetch(UPLOAD_PETID, {
      method: 'POST',
      body: fd,
    })
    const data = await r.json()

    console.log('data', data)

    // alert('已更新儲存')
    /*
  下面這個為何不行？？
    const usp = new URLSearchParams(new FormData(document.petId_form))

    const r = await fetch(UPLOAD_PETID, {
      method: 'POST',
      body: usp.toString(),
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/x-www-form-urlencoded',
      }, //設定檔頭，確認Authorization是否有送出Bearer格式的token，'Bearer '一定後面要空一格
    })
    const data = await r.json()
    console.log(data)
    alert('已更新儲存')
    */

    // console.log(r.data)
  }

  return (
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
              key={v.pet_map_key} //下面這個為何不行？key不能傳到子層
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
          建立毛孩ID
        </Button>
      </form>
      {/* Coupon彈出視窗 */}
      {/* <Button
        variant="primary"
        className="btn petIdBtn"
        onClick={() => {
          //新增petCoupon到後端資料表
          fetch(PETID_COUPON, {
            method: 'PUT',
            // body: usp.toString(),
            headers: {
              Authorization: 'Bearer ' + token,
              'Content-Type': 'application/x-www-form-urlencoded',
            }, //設定檔頭，確認Authorization是否有送出Bearer格式的token，'Bearer '一定後面要空一格
          })
          handleShow() //彈出視窗
        }}
        style={{
          fontFamily: 'Noto Sans TC',
          marginLeft: 'auto',
        }}
      >
        建立毛孩ID
      </Button> */}
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
      {/* 轉成JSON測試有無收到值 */}
      {/* <pre>{JSON.stringify(inputList, null, 2)}</pre> */}
    </>
  )
}

export default withRouter(PetIdTest)
