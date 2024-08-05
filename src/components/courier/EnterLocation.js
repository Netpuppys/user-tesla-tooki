import React, { useState } from 'react'
import { useNavigate, useLocation } from "react-router-dom"
import { FaMapPin } from "react-icons/fa";
// import mapBg from "../../assets/courierPage/mapBg.png"
import mapBg from "../../assets/background/mobileMap.png"
import Background from '../Tutorial/component/Background'
import GradientBtn from '../../globalComponent/ui/GradientBtn';
import axiosInstance from '../../utils/axiosInstance';
import "../../styles/component/courier/EnterLocation.css"
import MobileBackground from '../../globalComponent/ui/MobileBackground';

const EnterLocation = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [ pickDropPoints, setPickDropPoints ] = useState({
        pickUp: "",
        drop: ""
    })

    const parcelData = location.state;

    const handleClick = () => {
        if (pickDropPoints.pickUp === "" && pickDropPoints.drop === "") {
            alert("Please enter current and drop Location")
            return
        }

        const postData = {
            parcel_type: parcelData.type,
            quotation_id: parcelData.id,
            pickup_address: pickDropPoints.pickUp,
            delivery_address: pickDropPoints.drop
        }

        axiosInstance
            .post("/logistics/orders/", postData)
            .then(res => {
                console.log(res)
                navigate("/courier/sub-total")
            })
            .catch(err => {
                console.log(err)
            })
    }

  return (
    <MobileBackground title={"Select Courier"}>
        <div className='w-full h-full flex items-center justify-end px-5 py-8'>
            <div className='relative w-full h-full top-0 left-0 flex items-center justify-center rounded-2xl border-2 border-[#F95C29] overflow-hidden'>
                <img
                    src={mapBg} 
                    className=' w-full h-full object-cover' 
                    alt='background' 
                />

                <div
                    className='absolute left-0 bottom-2 w-full px-2 h-fit z-10'
                >
                    <div className='shadow-green w-full h-fit p-3 bg-white rounded-2xl mb-5'>
                        <p className='text-left text-xl font-semibold'>
                            Where is it going?
                        </p>
                        <div className='mt-4 w-full flex items-center justify-between'>
                            <p className='w-[1.5rem] flex items-center justify-center text-2xl text-green-500'>
                                <FaMapPin />
                            </p>
                            <div className='w-[calc(100%-2rem)] bg-[#E6FFE8] rounded-lg overflow-hidden'>
                                <input
                                    type='text'
                                    placeholder='Current Location'
                                    className='w-full h-10 bg-transparent focus:outline-none px-3'
                                    value={pickDropPoints.pickUp}
                                    onChange={e => setPickDropPoints(prev => ({ ...prev, pickUp: e.target.value}))}
                                />
                            </div>
                        </div>
                        <div className='mt-4 w-full flex items-center justify-between'>
                            <p className='w-[1.5rem] flex items-center justify-center text-2xl text-red-500'>
                                <FaMapPin />
                            </p>
                            <div className='w-[calc(100%-2rem)] bg-[#E6FFE8] rounded-lg overflow-hidden'>
                                <input
                                    type='text'
                                    placeholder='Current Location'
                                    className='w-full h-10 bg-transparent focus:outline-none px-3'
                                    value={pickDropPoints.drop}
                                    onChange={e => setPickDropPoints(prev => ({ ...prev, drop: e.target.value}))}
                                />
                            </div>
                        </div>
                    </div>

                    <GradientBtn
                        text={"Continue"} 
                        onClickHandler={handleClick} 
                    />
                </div>
            </div>
        </div>
    </MobileBackground>
  )
}

export default EnterLocation