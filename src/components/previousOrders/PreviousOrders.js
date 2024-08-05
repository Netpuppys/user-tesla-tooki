import React from 'react'
import CompletedOrder from '../../globalComponent/ui/CompletedOrder';
import { useNavigate } from 'react-router-dom';
import { useMobile } from '../../globalComponent/context/MobileContext';
import MobileBackground from '../../globalComponent/ui/MobileBackground';
import heroHistory from "../../assets/setup/history.png"
import "../../styles/component/UserProfile/UserProfile.css"

const PreviousOrders = () => {
    const navigate = useNavigate()
    const { isMobile } = useMobile()

  return (
    <MobileBackground title={"Order History"}>
        <div className='profile-main-div'>
            <div className='w-full h-fit px-10 mt-5'>
                <img 
                    src={heroHistory}
                    className='w-full aspect-square'
                    alt='banner'
                />
            </div>

            <div className='profile-main-content'>
                <div className='head-cont'>
                    Trucks and two wheeler orders
                </div>

                <div className='main-info-container'>
                    <CompletedOrder 
                        pickupLocation={"delhi"}
                        dropLocation={"Gurugram"}
                        orderDate={"10-06-24"}
                        orderTime={"1:00 pm"}
                        orderPrice={200}
                        vehicleType={2}
                    />
                    <CompletedOrder 
                        pickupLocation={"delhi"}
                        dropLocation={"Gurugram"}
                        orderDate={"10-06-24"}
                        orderTime={"1:00 pm"}
                        orderPrice={200}
                        vehicleType={2}
                    />
                    <CompletedOrder 
                        pickupLocation={"delhi"}
                        dropLocation={"Gurugram"}
                        orderDate={"10-06-24"}
                        orderTime={"1:00 pm"}
                        orderPrice={200}
                        vehicleType={2}
                    />
                    <CompletedOrder 
                        pickupLocation={"delhi"}
                        dropLocation={"Gurugram"}
                        orderDate={"10-06-24"}
                        orderTime={"1:00 pm"}
                        orderPrice={200}
                        vehicleType={2}
                    />
                </div>
            </div>
        </div>
    </MobileBackground>
  )
}

export default PreviousOrders