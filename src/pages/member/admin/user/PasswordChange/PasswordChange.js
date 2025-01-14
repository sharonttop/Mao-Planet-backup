import React, { useState, useEffect } from 'react'
import {
  // Link,
  withRouter,
  // Redirect,
} from 'react-router-dom'
import conf, { PASSWORD_CHANGE } from '../../../../../config'
import './PasswordChange.scss'
//背景引入
import CatHand1 from '../../../../../images/Login/cat hand1.svg'
import CatHand2 from '../../../../../images/Login/cat hand2.svg'

function PasswordChange(props) {
  //編輯功能--------------------------------------
  const [editFields, setEditFields] = useState({
    oldpassword: '',
    password: '',
  })
  // 2.存入錯誤訊息用
  const [editFieldsErrors, setEditFieldsErrors] = useState({
    oldpassword: '',
    password: '',
  })
  //上相片呈現資料資料----------

  console.log({ conf })

  const [isLoading, setIsLoading] = useState(true)
  // 自動1秒後關閉指示的spinner
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => setIsLoading(false), 1000)
    }
  }, [isLoading])

  const token = localStorage.getItem('token')

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

    // 檢查確認密碼&密碼欄位
    if (formData.get('password') !== formData.get('confirmPassword')) {
      // 設定錯誤訊息狀態
      const updatedFieldErrors = {
        ...editFieldsErrors,
        password: '密碼與確認密碼欄位輸入值不相同',
        confirmPassword: '密碼與確認密碼欄位輸入值不相同',
      }

      // 3. 設定回原錯誤訊息狀態物件
      setEditFieldsErrors(updatedFieldErrors)

      // 不送出資料到伺服器
      return
    }

    const usp = new URLSearchParams(new FormData(document.passwordChange_form))

    // ****** 修改(後端測試) ******
    const r = await fetch(PASSWORD_CHANGE, {
      method: 'PUT',
      body: usp.toString(),
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/x-www-form-urlencoded',
      }, //設定檔頭，確認Authorization是否有送出Bearer格式的token，'Bearer '一定後面要空一格
    })
    const data = await r.json()
    console.log(data)
    if (data.success) {
      alert('密碼變更成功，請重新登入')
      localStorage.removeItem('member')
      localStorage.removeItem('token')
      props.history.push('/login')
      window.location.reload() //強制刷新頁面
    } else {
      alert('密碼變更失敗:\n' + (data.error || ''))
    }

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
      <div className="PasswordChangeCatHand1">
        <img src={CatHand1} style={{ width: '110px' }} alt="" />
      </div>
      <div className="PasswordChangeCatHand2">
        <img src={CatHand2} style={{ width: '120px' }} alt="" />
      </div>
      <div className="card passwordChangeCard">
        <div className="passwordChangeBanner">
          <h2>變更密碼</h2>
        </div>
        <div className="passwordChangeWrap">
          <form
            className="passwordChangeForm"
            name="passwordChange_form"
            onSubmit={handleSubmit}
            onChange={handleFormChange}
            onInvalid={handleFormInvalid}
          >
            <div className="passwordChangeInfo">
              <div className="passwordChangeForm-group">
                <label>輸入舊密碼</label>
                <input
                  className="form-control"
                  type="password"
                  name="oldpassword"
                  value={editFields.oldpassword}
                  onChange={handleFieldChange}
                  required
                  minLength="5"
                  placeholder="oldPassword"
                />
                {editFieldsErrors.oldpassword !== '' && (
                  <div
                    className="error"
                    style={{ fontSize: 0.9, color: 'red' }}
                  >
                    {editFieldsErrors.oldpassword}
                  </div>
                )}
              </div>
              <div className="passwordChangeForm-group">
                <label>輸入新密碼</label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  value={editFields.password}
                  onChange={handleFieldChange}
                  required
                  minLength="5"
                  placeholder="newPassword"
                />
                {editFieldsErrors.password !== '' && (
                  <div
                    className="error"
                    style={{ fontSize: 0.9, color: 'red' }}
                  >
                    {editFieldsErrors.password}
                  </div>
                )}
              </div>
              <div className="passwordChangeForm-group">
                <label>再次輸入新密碼</label>
                <input
                  className="form-control"
                  type="password"
                  name="confirmPassword"
                  value={editFields.confirmPassword}
                  onChange={handleFieldChange}
                  required
                  minLength="5"
                  placeholder="confirmPassword"
                />
                {editFieldsErrors.confirmPassword !== '' && (
                  <div
                    className="error"
                    style={{ fontSize: 0.9, color: 'red' }}
                  >
                    {editFieldsErrors.confirmPassword}
                  </div>
                )}
              </div>
            </div>
            <button type="submit" className="btn passwordChangeBtn">
              更新儲存
            </button>
          </form>
        </div>
      </div>
    </>
  )

  return <>{isLoading ? loading : display}</>
}

export default withRouter(PasswordChange)
