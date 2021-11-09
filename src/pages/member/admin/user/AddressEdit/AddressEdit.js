import React, { useState, useEffect } from 'react'
import {
  // Link,
  withRouter,
  // Redirect,
} from 'react-router-dom'
import conf, {
  UPLOAD_AVATAR,
  // SIGN_UP,
  AUTH_TOKEN,
  // JWT_GET_DATA,
} from '../../../../../config'

import axios from 'axios'
// import './InfoEdit.scss'


function AddressEdit(props) {
  //同會員資料單一核取方塊
  const [agree, setAgree] = useState(false)

  //編輯功能--------------------------------------
  const [editFields, setEditFields] = useState({
    name: '',
    mobile: '',
    address: '',
  })
  // 2.存入錯誤訊息用
  const [editFieldsErrors, setEditFieldsErrors] = useState({
    name: '',
    mobile: '',
    address: '',
  })

  console.log({ conf })

  const [isLoading, setIsLoading] = useState(true)
  // 自動1秒後關閉指示的spinner
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => setIsLoading(false), 1000)
    }
  }, [isLoading])

  const token = localStorage.getItem('token')
  //-------抓客人資料(測試後端)
  useEffect(() => {
    setIsLoading(true)
    ;(async () => {
      const r = await fetch(AUTH_TOKEN, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token,
        }, //設定檔頭，確認Authorization是否有送出Bearer格式的token，'Bearer '一定後面要空一格
      })
      const obj = await r.json()

      setEditFields(obj)
    })()
  }, [])

  // 專門用來處理每個欄位的輸入用

  const handleFieldChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    // const type = e.target.type

    // 預設值為輸入值
    let newValue = value

    // 1. 從原本的狀態物件拷貝新物件 / 2. 在拷貝的新物件上處理
    const updatedFields = {
      ...editFields,
      [name]: newValue,
    }

    // 3. 設定回原狀態物件
    setEditFields(updatedFields)
  }

  // 當整個表單有變動時觸發
  // 認定使用者正在輸入有錯誤的欄位
  // 清除某個欄位錯誤訊息
  const handleFormChange = (e) => {
    // 設定錯誤訊息狀態
    const updatedFieldErrors = {
      ...editFieldsErrors,
      [e.target.name]: '',
    }

    // 3. 設定回原錯誤訊息狀態物件
    setEditFieldsErrors(updatedFieldErrors)
  }

  // 當表單有檢查有不合法出現時觸發
  const handleFormInvalid = (e) => {
    // 阻擋form的預設行為(泡泡訊息)
    e.preventDefault()

    // 設定錯誤訊息狀態
    const updatedFieldErrors = {
      ...editFieldsErrors,
      [e.target.name]: e.target.validationMessage,
    }

    // 3. 設定回原錯誤訊息狀態物件
    setEditFieldsErrors(updatedFieldErrors)
  }

  // 在 表單完成驗証 之後，才會觸發==========================
  const handleSubmit = async (e) => {
    // 阻擋form的預設送出行為
    e.preventDefault()

    // 利用FormData Api 得到各欄位的值 or 利用狀態值
    // FormData 利用的是表單元素的 name
    const formData = new FormData(e.target)
    console.log(formData.get('name'))
    console.log(formData.get('mobile'))
    console.log(formData.get('address'))

    const usp = new URLSearchParams(new FormData(document.edit_form))
    const r = await fetch(AUTH_TOKEN, {
      method: 'PUT',
      body: usp.toString(),
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/x-www-form-urlencoded',
      }, //設定檔頭，確認Authorization是否有送出Bearer格式的token，'Bearer '一定後面要空一格
    })
    const data = await r.json()
    console.log(data)
    alert('已更新儲存')
    props.history.push('/admin')

    //---
  }

  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

  const display = (
    <>
      <div className="card infoEditCard">
        <div className="infoEditBanner">
          <h2>收貨地址</h2>
        </div>
        <div className="infoEditWrap">
          <form
            className="infoEditForm"
            name="edit_form"
            onSubmit={handleSubmit}
            onChange={handleFormChange}
            onInvalid={handleFormInvalid}
          >
            <div className="infoEditInfo">
              <div className="infoEditForm-group">
                <label>姓名</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  value={editFields.name}
                  onChange={handleFieldChange}
                  placeholder="name"
                  required
                />
                {editFieldsErrors.name !== '' && (
                  <div
                    className="error"
                    style={{ fontSize: 0.9, color: 'red' }}
                  >
                    {editFieldsErrors.name}
                  </div>
                )}
              </div>

              <div className="infoEditForm-group">
                <label>手機</label>
                <input
                  className="form-control"
                  type="mobile"
                  name="mobile"
                  value={editFields.mobile}
                  onChange={handleFieldChange}
                  placeholder="mobile"
                />
              </div>
              <div className="infoEditForm-group">
                <label>地址</label>
                <input
                  className="form-control"
                  name="address"
                  value={editFields.address}
                  onChange={handleFieldChange}
                  placeholder="address"
                />
              </div>
            </div>
            <div className="infoEdit-group">
              <button type="submit" className="btn infoEditBtn">
                更新儲存
              </button>
              <button
                type="button"
                className="btn cancelSubmit"
                onClick={() => {
                  props.history.push('/admin')
                }}
              >
                放棄編輯
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )

  return <>{isLoading ? loading : display}</>
}

export default withRouter(AddressEdit)
