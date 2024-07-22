import React, { useState } from 'react'
import Login from '../components/login/Login'
import LoginMobile from '../components/login/LoginMobile'
import { useMobile } from '../globalComponent/context/MobileContext'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axiosInstance from '../utils/axiosInstance'
import { useUserContext } from '../globalComponent/context/UserContext'

const LoginPage = () => {
  const { isMobile } = useMobile()
  const { setUserId } = useUserContext()
  const navigate = useNavigate()

  const onSubmit = (data) => {
      const loginData = {
          email: data.email,
          password: data.password,
          login_type: "consumer"
      }
      axiosInstance
          .post("/login", loginData)
          .then(res => {
              const response = res.data.data
              console.log(res.data.data)
              localStorage.setItem("access", res.data.data.access)
              localStorage.setItem("refresh", res.data.data.refresh)
              setUserId(response.user.id)
              navigate("/setup")
          })
          .catch(err => {
              console.log(err)
          })
  };

  const goToSignUp = () => {
      navigate("/signup")
  }
  return (
    <>
    {isMobile? 
      <LoginMobile 
        goToSignUp={goToSignUp}
        onSubmit={onSubmit}
        setUserId={setUserId}
      /> : 
      <Login 
        goToSignUp={goToSignUp}
        onSubmit={onSubmit}
        setUserId={setUserId}
      />}
    </>
  )
}

export default LoginPage