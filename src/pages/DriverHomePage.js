import React from 'react'
import tookiLogo from "../assets/logo/tookiLogoSmall.png"
import profilePlaceholder from "../assets/placeholder/profile-placeholder.png"
import compassIcon from "../assets/icons/compassIcon.png"
import healthIcon from "../assets/icons/healthIcon.png"
import settingsIcon from "../assets/icons/settingsIcon.png"
import "../styles/pages/DriverHomePage.css"
import DriverHome from '../components/driverPages/DriverHome'

const DriverHomePage = () => {
  return (
    <div className='driver-home-main-div'>
        <div className='main-content-div'>

            <div className='nav-bar-div'>
                <div className='logo-div'>
                    <img 
                        src={tookiLogo} 
                        className='logo-small' 
                        alt='tooki' 
                    />
                </div>

                <div className='status-div'>
                    <p className='status-text'>
                        Online
                    </p>
                    <div className='slider'></div>
                </div>

                <div className='profile-div'>
                    <img 
                        src={profilePlaceholder} 
                        className='profile-image' 
                        alt='helloooo' 
                    />
                </div>
            </div>

            <div className='main-center-div'>
                <DriverHome />
            </div>

            <div className='nav-bar-div'>
                <div className='bottom-icon-div'>
                    <img 
                        src={compassIcon} 
                        className='bottom-icon' 
                        alt='map' 
                    />
                </div>

                <div className='bottom-icon-div'>
                    <img 
                        src={healthIcon} 
                        className='bottom-icon' 
                        alt='health' 
                    />
                </div>

                <div className='bottom-icon-div'>
                    <img 
                        src={settingsIcon} 
                        className='bottom-icon'
                        alt='settings' 
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default DriverHomePage