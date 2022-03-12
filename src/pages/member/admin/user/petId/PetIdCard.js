import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import conf, { PETID_IMG_PATH } from '../../../../../config'

//引入圖片
import petDefaultAvatar from '../../../../../images/PetID/default-avatar.svg'
import petIdAddMark from '../../../../../images/PetID/petIdAddMark80x80.svg'
import petIdRemoveMark from '../../../../../images/PetID/petIdRemoveMark80x80.svg'

import './PetId.scss'

function PetIdCard(props) {
  const {
    inputIndex,
    selecteInputId,
    petInputList,
    setPetInputList,
    delArray,
    setDelArray,
  } = props

  /*
      const [petInputList, setPetInputList] = useState([
        { id: '', petImgSrc: '', petName: '', breed: '', petBirthday: '' },
      ])
      */

  const handlePetIdChange = (e) => {
    const name = e.target.name.slice(0, -2)
    const value = e.target.value

    // 預設值為輸入值
    let newValue = value
    // console.log(petInputList)

    // 1. 從原本的狀態物件拷貝新物件 / 2. 在拷貝的新物件上處理
    let newPetInput = { [name]: newValue }

    // 想用取id的方式抓取陣列中符合id的方法但是不行

    console.log('inputIndex', inputIndex)
    console.log('petInputList', petInputList)
    console.log('petInputList[inputIndex]', petInputList[inputIndex])
    console.log('newPetInputList', newPetInput)

    const updatedFields = { ...petInputList[inputIndex], ...newPetInput }
    const newPetInputList = [...petInputList]
    newPetInputList[inputIndex] = updatedFields

    // 3. 設定回原狀態物件
    setPetInputList(newPetInputList)
  }
  //  --------------------
  const handleSelFile = () => {
    const sel_file = document.querySelector(`#sel_file${inputIndex}`)
    sel_file.click()
  }

  //處理圖片顯示
  function handleImgChange(event) {
    console.log(event.target.file)

    const [file] = event.target.files

    if (file) {
      console.log('inputIndex', inputIndex)
      console.log('petInputList', petInputList)
      console.log('petInputList[inputIndex]', petInputList[inputIndex])
      // console.log('newPetInputList', newPetInput)
      let petImgSrcObj = {
        petImgSrc: URL.createObjectURL(file),
        isFileUpload: true,
      }

      const updatedFields = { ...petInputList[inputIndex], ...petImgSrcObj }
      const newPetInputList = [...petInputList]
      newPetInputList[inputIndex] = updatedFields

      // let addImgToState = [{ ...petInputList[selecteInputId], petImgSrc }]
      // console.log(addImgToState)
      setPetInputList(newPetInputList)
    }
  }
  // console.log('lastItem', petInputList[petInputList.length - 1].id)
  let idCard = petInputList[petInputList.length - 1].pet_id
    ? petInputList[petInputList.length - 1].pet_id
    : 1
  // 萬一刪到最後ㄧ個會有問題
  const handleAddInput = () => {
    console.log('idCard', idCard++)

    let nullInputList = {
      pet_map_key: idCard++,
    }
    // console.log('nullInputList', nullInputList)

    let addInputList = [...petInputList, nullInputList]
    // console.log('addInputList', addInputList)
    setPetInputList(addInputList)
  }
  const handleRemoveInput = () => {
    const petInputListAll = [...petInputList]

    const newDelArray = [...delArray, petInputListAll[inputIndex]]
    setDelArray(newDelArray)

    petInputListAll.splice(inputIndex, 1)
    setPetInputList(petInputListAll)
  }

  return (
    <>
      <div className="card petIdCard ml-2 mr-2">
        <div className="petIdBanner">
          <h2>毛孩ID</h2>
        </div>
        <div className="petIdFormInput">
          <input
            type="text"
            name="pet_id[]"
            value={petInputList[inputIndex].pet_id}
            readOnly
            hidden
          />
          <input
            type="text"
            name="isFileUpload[]"
            value={
              petInputList[inputIndex].isFileUpload
                ? petInputList[inputIndex].isFileUpload
                : ''
            }
            readOnly
            hidden
          />
          <input
            id={`sel_file${inputIndex}`}
            type="file"
            data-id={selecteInputId}
            name="pet_avatar[]"
            multiple
            accept="image/*"
            data-target="petImg"
            onChange={handleImgChange}
            hidden
          />
          <div className="petIdAvatar" onClick={handleSelFile}>
            {/* {petInputList.petImgSrc && ( */}
            <img
              id="petImg"
              // src={  PETID_IMG_PATH + petInputList[inputIndex].pet_avatar}
              src={
                petInputList[inputIndex].petImgSrc
                  ? petInputList[inputIndex].petImgSrc
                  : petInputList[inputIndex].pet_avatar
                  ? PETID_IMG_PATH + petInputList[inputIndex].pet_avatar
                  : petDefaultAvatar
              }
              alt=""
            />
            {/* )} */}
          </div>
          <div className="petIdForm-group">
            <label>毛孩名</label>
            <input
              style={{ fontSize: 0.9 }}
              data-id={selecteInputId}
              className="form-control"
              type="text"
              name="pet_name[]"
              placeholder="Pet Name"
              value={
                petInputList[inputIndex].pet_name
                  ? petInputList[inputIndex].pet_name
                  : ''
              }
              // onChange={(e) => handleChange(e, i)}
              onChange={handlePetIdChange}
            />
          </div>
          <div className="petIdForm-group">
            <label>汪喵</label>
            <select
              data-id={selecteInputId}
              style={{ fontSize: 0.9 }}
              className="form-control"
              name="pet_breed[]"
              onChange={(e) => {
                handlePetIdChange(e)
              }}
              value={petInputList[inputIndex].pet_breed}
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
              data-id={selecteInputId}
              style={{ fontSize: '1rem' }}
              className="form-control"
              type="date"
              name="pet_birthday[]"
              placeholder="Pet Birthday"
              value={`${new Date(
                petInputList[inputIndex].pet_birthday
              ).getFullYear()}-${String(
                new Date(petInputList[inputIndex].pet_birthday).getMonth() + 1
              ).padStart(2, '0')}-${String(
                new Date(petInputList[inputIndex].pet_birthday).getDate()
              ).padStart(2, '0')}`}
              // value={petInputList[inputIndex].pet_birthday.split('T')[0]}
              // onChange={(e) => handleChange(e, i)}
              onChange={handlePetIdChange}
            />
          </div>
          {petInputList.length !== 1 && (
            <div className="petIdRemoveMark" onClick={handleRemoveInput}>
              <img alt="" src={petIdRemoveMark} />
            </div>
          )}
          {petInputList.length - 1 === inputIndex && (
            <div className="petIdAddMark" onClick={handleAddInput}>
              <img alt="" src={petIdAddMark} />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default withRouter(PetIdCard)
