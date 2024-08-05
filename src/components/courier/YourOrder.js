import React from 'react'
import { FaStar } from "react-icons/fa";
import MobileBackground from '../../globalComponent/ui/MobileBackground'
import mobileMap from "../../assets/background/mobileMap.png"
import LocationSelections from '../../globalComponent/ui/LocationSelections'
import GradientBtn from '../../globalComponent/ui/GradientBtn'
import GreenTick from '../../globalComponent/elements/GreenTick'
import ParcelIcon from '../../globalComponent/elements/ParcelIcon'

const title = "your order"

const YourOrder = () => {

  return (
    <MobileBackground title={"Your order"}>
        <div className='w-full relative h-full p-6'>
            <div className='w-full h-full rounded-2xl border-2 border-tooki-orange overflow-hidden'>
                <img
                    src={mobileMap}
                    className='w-full h-full object-cover'
                    alt='map'
                />
            </div>
            <div className='absolute top-2 left-0 w-full h-full flex flex-col items-center justify-between z-10 px-10'>
                <div className='bg-white w-full h-fit rounded-2xl border-[1px] border-black p-3 border-opacity-70 shadow-green'>
                    <p className='ml-2 capitalize text-lg font-medium text-black text-left'>
                        {title}
                    </p>
                    <div className='w-full mt-3'>
                        <LocationSelections 
                            pickUp={"Rohini"}
                            drop={"Gurugram"}
                        />
                    </div>
                </div>

                <div className='w-full'>
                    <div className='w-full mb-6 rounded-2xl shadow-green-lg h-[15rem] bg-white p-3'>
                        <div className='w-full mb-5 flex items-center justify-between px-2'>
                            <p className='h-10 text-sm flex items-center'>
                                <GreenTick /> 
                                Your Ride is 
                                <span className='text-green-600 mx-1'> 
                                    5 Mins
                                </span> Away
                            </p>
                            <div className='w-fit h-fit flex flex-col items-center justify-center'>
                                <p className='font-light text-xs'>
                                    OTP
                                </p>
                                <div className='rounded-md px-2 py-1 bg-orange-500 bg-opacity-50'>
                                    <p className='text-orange-600 tracking-widest '>
                                        8888
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full flex items-center justify-between px-2'>
                            <div className='flex items-center gap-2'>
                                <p className='h-16'>
                                    <ParcelIcon />
                                </p>
                                <div className='text-left text-sm'>
                                    <p className='font-semibold'>HR26 FF 1377</p>
                                    <p className='font-light'>Ola S1 Pro</p>
                                </div>
                            </div>
                            <div className='text-center'>
                                <p className='text-xs text-gray-500'>
                                    Total Fare
                                </p>
                                <p className='text-orange-500 font-medium'>
                                    135 Rs
                                </p>
                            </div>
                        </div>
                        <div className='w-full px-2 mt-3 flex items-center gap-5'>
                            <div className='flex w-14 aspect-square items-center justify-center rounded-full overflow-hidden bg-gray-300'>

                            </div>
                            <div className='text-left'>
                                <p className='font-bold'>
                                    Gaurav Kumar
                                </p>
                                <p className='text-xs flex items-center gap-1'>
                                    <span className='text-orange-500'><FaStar /></span>
                                    <span className='text-gray-600'>4.8</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <GradientBtn text={"Continue"} />
                </div>
            </div>
        </div>
    </MobileBackground>
  )
}

export default YourOrder