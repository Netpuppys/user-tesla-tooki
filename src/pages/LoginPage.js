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

  const [ loader, setLoader ] = useState(false)

  const onSubmit = (data) => {
    setLoader(true)
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
          .finally(() => {
            setLoader(false)
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
        loader={loader}
      /> : 
      <Login 
        goToSignUp={goToSignUp}
        onSubmit={onSubmit}
        setUserId={setUserId}
        loader={loader}
      />}
    </>
  )
}

export default LoginPage