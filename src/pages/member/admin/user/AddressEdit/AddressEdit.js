import React, { useState, useEffect } from 'react'
import {
  // Link,
  withRouter,
  // Redirect,
} from 'react-router-dom'
import conf, { AUTH_TOKEN } from '../../../../../config'
import CatHand1 from '../../../../../images/Login/cat hand1.svg'
import CatHand2 from '../../../../../images/Login/cat hand2.svg'

import './AddressEdit.scss'

function AddressEdit(props) {
  //同會員資料單一核取方塊
  const [agree, setAgree] = useState(false)

  //編輯功能--------------------------------------
  const [editFields, setEditFields] = useState({
    shipping_name: '',
    shipping_mobile: '',
    shipping_address: '',
  })
  // 2.存入錯誤訊息用
  const [editFieldsErrors, setEditFieldsErrors] = useState({
    shipping_name: '',
    shipping_mobile: '',
    shipping_address: '',
  })

  const [isLoading, setIsLoading] = useState(true)
  // 自動1秒後關閉指示的spinner
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => setIsLoading(false), 1000)
    }
  }, [isLoading])

  const token = localStorage.getItem('token')

  // 若已存取過寄送資料，進入頁面直接顯示
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
      console.log('obj.shipping_name !== null', obj.shipping_name !== null)
      console.log('obj.shipping_mobile !== null', obj.shipping_mobile !== null)
      console.log(
        'obj.shipping_address !== null',
        obj.shipping_address !== null
      )

      if (
        obj.shipping_name !== null ||
        obj.shipping_mobile !== null ||
        obj.shipping_address !== null
      ) {
        setEditFields(obj)
      }
    })()
  }, [])

  //打勾後，抓取之前登入的會員資料
  const getAddressData = () => {
    ;(async () => {
      const r = await fetch(AUTH_TOKEN, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token,
        }, //設定檔頭，確認Authorization是否有送出Bearer格式的token，'Bearer '一定後面要空一格
      })
      const obj = await r.json()
      setEditFields({
        shipping_name: obj.name,
        shipping_mobile: obj.mobile,
        shipping_address: obj.address,
      })
    })()
  }

  // 專門用來處理每個欄位的輸入用

  const handleFieldChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    // 預設值為輸入值
    let newValue = value

    // 1. 從原本的狀態物件拷貝新物件 / 2. 在拷貝的新物件上處理
    const updatedFields = {
      ...editFields,
      [name]: newValue,
    }
    console.log('updatedFields', updatedFields)

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

  // 編輯或新增，傳送寄送資料到後端存取
  const handleSubmit = async (e) => {
    // 阻擋form的預設送出行為
    e.preventDefault()

    const formData = new FormData(e.target)
    console.log(formData.get('shipping_name'))
    console.log(formData.get('shipping_mobile'))
    console.log(formData.get('shipping_address'))

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
      <div className="addressEditCatHand1">
        <img src={CatHand1} style={{ width: '110px' }} alt="" />
      </div>
      <div className="addressEditCatHand2">
        <img src={CatHand2} style={{ width: '120px' }} alt="" />
      </div>
      <div className="card addressEditCard">
        <div className="addressEditBanner">
          <h2>收貨地址</h2>
        </div>
        <div className="addressEditWrap">
          <section id="addressEditcheckbox">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => {
                setAgree(e.target.checked)
                getAddressData()
              }}
            />
            &nbsp;<label>收件人資料與顧客資料相同</label>
          </section>
          <form
            className="addressEditForm"
            name="edit_form"
            onSubmit={handleSubmit}
            onChange={handleFormChange}
            onInvalid={handleFormInvalid}
          >
            <div className="addressEditInfo">
              <div className="addressEditForm-group">
                <label>收件人姓名</label>
                <input
                  className="form-control"
                  type="text"
                  name="shipping_name"
                  value={editFields.shipping_name}
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
                <p className="addressEditCheck">
                  請輸入收件人真實姓名，以確保收件
                </p>
              </div>

              <div className="addressEditForm-group">
                <label>收件人電話號碼</label>
                <input
                  className="form-control"
                  type="mobile"
                  name="shipping_mobile"
                  value={editFields.shipping_mobile}
                  onChange={handleFieldChange}
                  placeholder="mobile"
                />
              </div>
              <div className="addressEditForm-group">
                <label>收件地址</label>
                <input
                  className="form-control"
                  name="shipping_address"
                  value={editFields.shipping_address}
                  onChange={handleFieldChange}
                  placeholder="address"
                />
              </div>
            </div>
            <div className="addressEdit-group">
              <button type="submit" className="btn addressEditBtn">
                儲存地址
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
