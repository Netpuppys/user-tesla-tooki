import React from 'react'
import { FaMapPin } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import bikePlaceholder from "../../assets/placeholder/bikePlaceholder.png"
import "../../styles/globalComponent/CompletedOrder.css"
import LocationSelections from './LocationSelections';

const CompletedOrder = ({ pickupLocation, dropLocation, orderDate, orderTime, orderPrice, vehicleType }) => {
    const vehicle = vehicleType || "--"
    const pickup = pickupLocation || "NA"
    const drop = dropLocation || "NA"
    const date = orderDate || "--:--:--"
    const time = orderTime || "--:--"
    const price = orderPrice || "--"

  return (
    <div className='completed-order-card-div'>
        <div className='top-div'>
            <img 
                src={bikePlaceholder} 
                className='driver-profile-img' 
                alt='driver' 
            />
            <p className='main-info-text'>
                {date}, {time}
                <br/>
                <span>{vehicle} Wheeler</span>
            </p>

            <p className='order-price'>
                Rs {price}/-
            </p>
        </div>

        <div className='w-full px-10 py-4'>
            <LocationSelections
                pickUp={pickup}
                drop={drop}
            />
        </div>

        <div className='options-div'>
            <p className='order-status'>
                <GiCheckMark />
                <span>
                    Completed
                </span>
            </p>

            <button className='book-again-btn'>
                Book Again
            </button>
        </div>
    </div>
  )
}

export default CompletedOrder