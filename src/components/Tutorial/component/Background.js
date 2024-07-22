import React from 'react'
import tookiLogo from "../../../assets/logo/tookiLogo.png"
import profileImg from "../../../assets/placeholder/profile-placeholder.png"
import { useNavigate } from 'react-router-dom'
import { FaChevronLeft } from "react-icons/fa6";
import { useUserContext } from '../../../globalComponent/context/UserContext'
import "../../../styles/component/Tutorial/Background.css"

const Background = ({ children, image, flipped, noBg, noBackBtn }) => {
    const navigate = useNavigate()
    const { userId } = useUserContext()

    if (noBg) {
        return (
            <>
                {children}
            </>
        )
    }

  return (
    <div className='background-main-div'>
        {userId && 
        <button onClick={() => navigate("/profile")} className='user-profile-btn'>
            <img src={profileImg} className='profile-icon' alt='user profile' />
        </button>}

        <div className='main-content-div'>
            {!noBackBtn && 
            <p onClick={() => navigate(-1)} className='back-btn'>
                <FaChevronLeft />
            </p>}

            <div className='main-logo-div'>
                <img src={tookiLogo} className='main-logo' alt='tooki' />
            </div>
            
            {image &&
            <div className='background-main-div-photo'>
                {!flipped &&
                <div className='image-container'>
                    <img
                        src={image}
                        className='hero-image' 
                        alt='tutorial' 
                    />
                </div>}

                {flipped &&
                <div className='main-text-container'>
                    {children}
                </div>}

                <div className='divider'></div>

                {!flipped &&
                <div className='main-text-container'>
                    {children}
                </div>}

                {flipped &&
                <div className='image-container'>
                    <img 
                        src={image} 
                        className='hero-image' 
                        alt='tutorial' 
                    />
                </div>}
            </div>}

            {!image &&
            <div className='background-no-image-div'>
                {children}
            </div>}
        </div>
    </div>
  )
}

export default Background