import React from 'react'
import Background from '../../components/Tutorial/component/Background'
import profileBg from '../../assets/background/driverProfile.png'
import { FaChevronLeft } from "react-icons/fa";
import CompletedOrder from '../../globalComponent/ui/CompletedOrder';
import "../../styles/component/UserProfile/UserProfile.css"
import { useNavigate } from 'react-router-dom';
import { useMobile } from '../../globalComponent/context/MobileContext';

const UserProfile = () => {
    const navigate = useNavigate()
    const { isMobile } = useMobile()

  return (
    <Background flipped={true} image={!isMobile && profileBg}>
        <div className='profile-main-div'>
            <p onClick={() => navigate(-1)} className='back-button'>
                <FaChevronLeft />
            </p>
            <p className='page-heading'>
                Order History
            </p>

            <div className='profile-main-content'>
                <div className='head-cont'>
                    Trucks and two wheeler orders
                </div>

                <div className='main-info-container'>
                    <CompletedOrder />
                </div>
            </div>
        </div>
    </Background>
  )
}

export default UserProfile