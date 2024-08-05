import React from 'react'
import { IoPinOutline } from "react-icons/io5";

const LocationSelections = ({ pickUp, drop}) => {
  return (
    <div className='w-full h-fit'>
        <div className='w-full mb-2 h-1/2 px-2 flex items-center justify-between bg-gray-300 rounded-md bg-opacity-50'>
            <p className='text-red-600 h-10 text-xl flex items-center justify-center'>
                <IoPinOutline /> Pickup
            </p>
            <div className='text-right'>
                <p className='text-lg capitalize text-gray-900'>
                    {pickUp}
                </p>
            </div>
        </div>
        <div className='w-full h-1/2 px-2 flex items-center justify-between bg-gray-300 rounded-md bg-opacity-50'>
            <p className='text-green-600 h-10 text-xl flex items-center justify-center'>
                <IoPinOutline /> Drop
            </p>
            <div className='text-right'>
                <p className='text-lg capitalize text-gray-900'>
                    {drop}
                </p>
            </div>
        </div>
    </div>
  )
}

export default LocationSelections