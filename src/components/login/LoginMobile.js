import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useForm } from 'react-hook-form';
import { IoIosMail, IoIosLock, IoMdEye, IoMdEyeOff } from "react-icons/io";
import image1 from "../../assets/login/image-1.png"
import "../../styles/component/login/Login.css"
import Navigator from '../../globalComponent/navigator/Navigator';

const LoginMobile = ({ goToSignUp, onSubmit }) => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [ showPassword, setShowPassword] = useState(false)

  return (
    <div className='login-main-div'>

        <div className='top-image-container'>
            <Navigator pageTitle={"Sign In"} />

            <img src={image1} className='login-hero-image' alt='hero' />
        </div>

        <div className='bottom-form-container'>
            {/* <p className='main-title'>
                Sign In
            </p> */}
            <p className='welcome-text'>
                Welcome!
            </p>
            <p className='form-title'>
                Sign in to continue
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <div className='icon-wrap'>     
                        <IoIosMail />
                    </div>
                    <input
                        type="email"
                        placeholder='Email'
                        {...register("email", { required: true })}
                        className={errors.email? 'form-control input-error' : "form-control"}
                    />
                </div>

                <div className="form-group">
                    <div className='icon-wrap'>
                        <IoIosLock />
                    </div>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Password'
                        {...register("password", { required: true })}
                        className={errors.email? 'form-control input-error' : "form-control"}
                    />
                    <button
                        type="button"
                        className="show-hide-btn"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <IoMdEyeOff /> : <IoMdEye /> }
                    </button>
                </div>

                <div className='bottom-buttons'>
                    <div className='checkbox-div'>
                        <input
                            type='checkbox'
                            {...register("remember")}
                            className='remember-checkbox'
                            defaultChecked
                        />
                        <p className='remember-text'>
                            Remember me
                        </p>
                    </div>
                    <button className='forgot-btn'>
                        Forgot Password?
                    </button>
                </div>

                <button type="submit" className="main-login-btn">
                    Login
                </button>

                <button onClick={goToSignUp} className='create-new-btn'>
                Create a new account
                </button>
            </form>
        </div>
    </div>
  )
}

export default LoginMobile