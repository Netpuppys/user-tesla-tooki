import React from 'react';
import deleteImage from "../../assets/delete/delete.png"
import mapBackground from "../../assets/background/map-bg.png"
import "../../styles/component/driver/DriverHome.css"

const DriverHome = () => {
  return (
    <div className='driver-home-div'>
        
        <div className='customer-card'>
            <img src={deleteImage} className='customer-card-image' alt='delete' />
        </div>

        <div className='map-background-div'>
            <img src={mapBackground} className='map-background' alt='map' />
        </div>
    </div>
  )
}

export default DriverHome