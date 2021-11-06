import React, { useState, useEffect } from 'react'
import conf, {
  IMG_PATH,
  UPLOAD_AVATAR,
  // JWT_GET_DATA,
} from '../../../../../config'

import axios from 'axios'
import petIdRemoveMark from '../../../../../images/PetID/petIdRemoveMark80x80.svg'
import petIdAddMark from '../../../../../images/PetID/petIdAddMark80x80.svg'

import './PetId.scss'

function PetId(props) {
  console.log({ conf })
  const [inputList, setInputList] = useState([
    { id: '', petImgSrc: '', petName: '', breed: '', petBirthday: '' },
  ])
  //上傳照片
  // const [petImgSrc, setPetImgSrc] = useState('')

  //下拉選單:汪喵
  const [selectedOption, setSelectedOption] = useState('')

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

  const petImg = inputList.petImgSrc

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
    console.log(inputList.petImgSrc)
    // setInputList(petImgSrc)
    // handleChange(e, i)
  }
  return (
    <>
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
                // value={petImgSrc}
              /> */}
              <form className="petIdForm" name="petId_form">
                <div
                  className="petIdAvatar"
                  onClick={(e) => e.target.querySelector('.uploadFile').click()}
                >
                  <input
                    classNmae="uploadFile"
                    accept="image/*"
                    type="file"
                    name="avatar"
                    style={{ display: 'none' }}
                    onChange={doUpload}
                    data_key={i}
                  />
                  <img
                    src={
                      petImg
                        ? IMG_PATH + '/' + petImg
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
                    value={item.petImgSrc}
                    onChange={(e) => handleChange(e, i)}
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
                    <option value="">CAat/Dog</option>
                    <option value="貓">貓</option>
                    <option value="狗">狗</option>
                  </select>
                </div>
                <div className="petIdForm-group">
                  <label>毛孩生日</label>
                  <input
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
      {/* 轉成JSON測試有無收到值 */}
      <pre>{JSON.stringify(inputList, null, 2)}</pre>
    </>
  )
}

export default PetId
