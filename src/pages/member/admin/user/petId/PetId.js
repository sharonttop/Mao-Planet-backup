import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Button, Modal } from 'react-bootstrap'
import conf, {
  IMG_PATH,
  UPLOAD_AVATAR,
  PETID_COUPON,
  // JWT_GET_DATA,
} from '../../../../../config'

import axios from 'axios'

//引入圖片
import petIdRemoveMark from '../../../../../images/PetID/petIdRemoveMark80x80.svg'
import petIdAddMark from '../../../../../images/PetID/petIdAddMark80x80.svg'
import petIdCoupon from '../../../../../images/PetID/petIdCoupon.svg'
import petIdCouponAD from '../../../../../images/PetID/petIdCouponAD.svg'
import { FaPaw } from 'react-icons/fa'

import './PetId.scss'

function PetId(props) {
  console.log({ conf })
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

  const [inputList, setInputList] = useState([
    { id: '', petImgSrc: '', petName: '', breed: '', petBirthday: '' },
  ])
  //上傳照片
  const [petImgSrc, setPetImgSrc] = useState('')

  //下拉選單:汪喵
  const [selectedOption, setSelectedOption] = useState('')

  //彈出視窗
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleChange = (e, index) => {
    const { name, value } = e.target
    const list = [...inputList]
    list[index][name] = value
    setInputList(list)
  }

  const handleAddInput = () => {
    setInputList([
      ...inputList,
      { id: '', petImgSrc: '', petName: '', breed: '', petBirthday: '' },
    ])
  }

  const handleRemoveInput = (index) => {
    const list = [...inputList]
    list.splice(index, 1)
    setInputList(list)
  }

  const doUpload = async (e) => {
    //Using Fetch
    var formData = new FormData()
    var fileField = e.target
    // var fileField = document.querySelector("input[type='file']");無法確認選到哪個
    formData.append('avatar', fileField.files[0])
    console.log(fileField.files[0])

    // const fd = new FormData()
    const r = await axios.post(UPLOAD_AVATAR, formData)

    console.log(r.data)
    // console.log(r.data.filename)
    setPetImgSrc(r.data.filename)
    // handleChange(e, i)
  }

  // ****** 更新折價券(後端測試) ******
  const token = localStorage.getItem('token')

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
      {inputList.map((item, i) => {
        return (
          <div className="card petIdCard">
            <div className="petIdBanner">
              <h2>毛孩ID</h2>
            </div>
            <div key={i} className="wrap">
              {/* <input
              type="hidden"
              className="form-control"
              name="avatar"
              value={petImgSrc}
            /> */}
              <form name="form1" style={{ display: 'none' }}>
                <input
                  className="form-control"
                  type="file"
                  id="avatar"
                  name="avatar"
                  accept="image/*"
                  onChange={doUpload}
                  data_key={i}
                />
              </form>
              <form className="petIdForm" name="petId_form">
                <div
                  className="petIdAvatar"
                  onClick={(e) => document.querySelector('#avatar').click()}
                >
                  <img
                    src={
                      petImgSrc
                        ? IMG_PATH + '/' + petImgSrc
                        : IMG_PATH + '/default-avatar.svg'
                    }
                    alt=""
                    id="img01"
                  />
                </div>
                <div>
                  <input
                    type="hidden"
                    className="form-control"
                    name="avatar"
                    value={petImgSrc}
                  />
                </div>

                <div className="petIdForm-group">
                  <label>毛孩名</label>
                  <input
                    style={{ fontSize: 0.9 }}
                    className="form-control"
                    type="text"
                    name="petName"
                    placeholder="Pet Name"
                    value={item.petName}
                    onChange={(e) => handleChange(e, i)}
                  />
                </div>
                <div className="petIdForm-group">
                  <label>汪喵</label>
                  <select
                    style={{ fontSize: 0.9 }}
                    className="form-control"
                    name="breed"
                    value={selectedOption}
                    onChange={(e) => {
                      setSelectedOption(e.target.value)
                      handleChange(e, i)
                    }}
                  >
                    {/* 第一個值會用state的初始值 */}
                    <option value="">Cat/Dog</option>
                    <option value="貓">貓</option>
                    <option value="狗">狗</option>
                  </select>
                </div>
                <div className="petIdForm-group">
                  <label>毛孩生日</label>
                  <input
                    style={{ fontSize: '1rem' }}
                    className="form-control"
                    type="date"
                    name="petBirthday"
                    placeholder="Pet Birthday"
                    value={item.petBirthday}
                    onChange={(e) => handleChange(e, i)}
                  />
                </div>
                {inputList.length !== 1 && (
                  <img
                    className="petIdRemoveMark"
                    src={petIdRemoveMark}
                    alt=""
                    onClick={() => handleRemoveInput(i)}
                  />
                )}
                {inputList.length - 1 === i && (
                  <img
                    className="petIdAddMark"
                    src={petIdAddMark}
                    alt=""
                    onClick={handleAddInput}
                  />
                )}
              </form>
            </div>
          </div>
        )
      })}
      {/* Coupon彈出視窗 */}
      <Button
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
      </Button>
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

  return <>{isLoading ? loading : display}</>
}

export default withRouter(PetId)
