import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { PETID_IMG_PATH } from '../../../../../config'

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

  const handlePetIdChange = (e) => {
    const name = e.target.name.slice(0, -2) //切掉[]的部分
    const value = e.target.value

    // 預設值為輸入值
    let newValue = value

    // 1. 從原本的狀態物件拷貝新物件 / 2. 在拷貝的新物件上處理
    let newPetInput = { [name]: newValue }

    const updatedFields = { ...petInputList[inputIndex], ...newPetInput }
    //展開變更的物件petInputList陣列位置，物件key相同後蓋前
    const newPetInputList = [...petInputList]
    //展開全部newPetInputList
    newPetInputList[inputIndex] = updatedFields
    // 將更改過的物件放回新的newPetInputList

    // console.log('inputIndex', inputIndex)
    console.log('petInputList', petInputList)
    // console.log('petInputList[inputIndex]', petInputList[inputIndex])
    // console.log('newPetInput', newPetInput)
    // console.log('newPetInputList', newPetInputList)
    // console.log('newPetInputList[inputIndex]', newPetInputList[inputIndex])

    // 3. 設定回原狀態物件
    setPetInputList(newPetInputList)
  }
  // 用id+Index辨識click對應的卡片hidden file
  const handleSelFile = () => {
    const sel_file = document.querySelector(`#sel_file${inputIndex}`)
    sel_file.click()
  }

  //處理圖片顯示
  function handleImgChange(event) {
    console.log(event.target.file)

    const [file] = event.target.files

    if (file) {
      let petImgSrcObj = {
        petImgSrc: URL.createObjectURL(file),
        isFileUpload: true,
        //如果需要upLoad的新圖片isFileUpload會轉成true經由URL.createObjectURL顯示在頁面上，fales的狀態是已經上傳過的資料從後端取圖片
      }

      const updatedFields = { ...petInputList[inputIndex], ...petImgSrcObj }
      const newPetInputList = [...petInputList]
      newPetInputList[inputIndex] = updatedFields

      setPetInputList(newPetInputList)
    }
  }
  // console.log('lastItem', petInputList[petInputList.length - 1].pet_map_key)

  // 新增空的inputList
  let idCard = petInputList[petInputList.length - 1].pet_id
    ? petInputList[petInputList.length - 1].pet_id
    : petInputList[petInputList.length - 1].pet_map_key

  // console.log(
  //   'idCardpet_map_key',
  //   petInputList[petInputList.length - 1].pet_map_key
  // )

  const handleAddInput = () => {
    console.log('idCard', idCard++)
    //從後端拿來的資料就沒有pet_map_key，新增的input才會給pet_map_key預備上傳
    let nullInputList = {
      pet_map_key: idCard++,
    }

    let addInputList = [...petInputList, nullInputList]
    setPetInputList(addInputList)
  }

  //刪除inputlist
  const handleRemoveInput = () => {
    const petInputListAll = [...petInputList]

    const newDelArray = [...delArray, petInputListAll[inputIndex]]
    setDelArray(newDelArray) //將刪除的inputList表單物件，塞進newDelArray的陣列儲存，要確認完整資料可以去PetId的50行解開註解

    petInputListAll.splice(inputIndex, 1) //刪除點選的整列input
    setPetInputList(petInputListAll) //刪除後再放回petInputList
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
            name="pet_id[]" //name使用含陣列的格式pet_id[]命名，字尾加[]為表單預設代表push，同名字會形成陣列格式儲存，傳送到後端可以直接得到資料的陣列
            value={petInputList[inputIndex].pet_id}
            readOnly //設定表單內沒設定onChange控制的input要設定readOnly才不會跳錯誤
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
          <div className="d-flex">
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
      </div>
    </>
  )
}

export default withRouter(PetIdCard)
