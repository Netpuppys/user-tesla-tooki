import React, { useEffect, useState } from 'react'
// import { FaMapPin } from "react-icons/fa";
// import { FaChevronRight } from "react-icons/fa";
// import mapBg from "../../assets/courierPage/mapBg.png"
// import Background from '../Tutorial/component/Background'
// import GradientBtn from '../../globalComponent/ui/GradientBtn';
// import parcelIcon from "../../assets/courierPage/parcelIcon.png"
// import { ThreeDots } from 'react-loader-spinner'
import documentIcon from "../../assets/courierPage/documentIcon.png"
import parcelIcon from "../../assets/courierPage/parcel.png"
import logisticsIcon from "../../assets/courierPage/logisticsIcon.png"
import axiosInstance from '../../utils/axiosInstance';
import "../../styles/component/courier/SubTotal.css"
// import { useNavigate } from 'react-router-dom';
import MobileBackground from '../../globalComponent/ui/MobileBackground';
import mapBg from "../../assets/background/mobileMap.png"
import LocationSelections from '../../globalComponent/ui/LocationSelections';
import GradientBtn from '../../globalComponent/ui/GradientBtn';
import SelectDriver from './SelectDriver';
import { ThreeCircles } from 'react-loader-spinner';

const courierTypes = [
    {
        icon: documentIcon,
        type: "document",
    },
    {
        icon: parcelIcon,
        type: "parcel",
    },
    {
        icon: logisticsIcon,
        type: "logistics",
    },
]

const SubTotal = () => {
    // const navigate = useNavigate()
    const [ quotData, setQoutData ] = useState()
    const quotId = sessionStorage.getItem("quotId")
    const [ showDriverList, setShowDriverList ] = useState(false)

    useEffect(() => {
        console.log(quotId)
        if (quotId) {
            axiosInstance
                .get(`/quotations/prices/${quotId}/`)
                .then(res => {
                    const response = res.data.data
                    console.log(res)
                    setQoutData(response)
                })
                .catch(err => {
                    console.error(err)
                })
        }
    }, [quotId])

    const handleCloseMap = () => {
        setShowDriverList(prev => !prev)
    }

    if(!quotData) {
        return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <ThreeCircles 
                color={"#F95426"}
            
            />
        </div>
        )
    }

  return (
    <MobileBackground title={"confirm details"}>
        <div className='w-full h-full p-4 relative'>

            {showDriverList && 
            <div className='w-screen h-screen overflow-scroll fixed z-50 left-0 top-0'>
                <SelectDriver 
                    handleCloseMap={handleCloseMap} 
                />
            </div>}

            <div className='w-full h-full rounded-2xl border-2 border-tooki-orange overflow-hidden relative'>
                <img
                    src={mapBg}
                    className='w-full h-full object-cover'
                    alt='map'
                />

                <div className='absolute bottom-0 left-0 w-full rounded-2xl h-fit p-4 shadow-green bg-white border-2 border-[#00C50A]'>
                    <div className='w-full flex gap-4'>
                        {courierTypes.map((item, id) => (
                            <div 
                                key={id} 
                                style={item.type === quotData.parcel_type.toLowerCase() ? { border: "2px solid #F95426" } : {}}
                                className='w-1/3 aspect-square flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-[#6f6f6f]'
                            >
                                <img
                                    src={item.icon}
                                    className='w-1/2'
                                    alt={item.type}
                                />
                                <p className='capitalize text-xs font-medium text-opacity-40'>
                                    {item.type}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className='p-4'>
                        <LocationSelections
                            pickUp={"delhi"}
                            drop={"gurugram"}
                        />
                    </div>
                    <div className='w-full flex items-center justify-between px-4'>
                        <p className='font-semibold'>
                            Estimated Amount:
                        </p>
                        <p className=''>
                            ₹ {quotData.estimated_amount}
                        </p>
                    </div>
                    <button 
                        disabled
                        className='w-full mt-3 rounded-xl border-2 border-green-600 text-green-600 py-3 text-xl font-bold'
                    >
                        Offer Your Fare
                    </button>

                    <div className='w-full border-[0.5px] my-5 border-[#42a462]'></div>

                    <GradientBtn 
                        text={"Find a Driver"} 
                        styles={{ fontWeight: "600", fontSize: "1.4rem" }} 
                        onClickHandler={handleCloseMap}
                    />
                </div>
            </div>
        </div>
    </MobileBackground>
  )
}

export default SubTotal