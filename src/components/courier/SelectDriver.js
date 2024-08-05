import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa6';
import axiosInstance from '../../utils/axiosInstance';
import { useNavigate } from 'react-router-dom';

const driversData = [
  {
    driverName: "John Doe",
    carName: "Toyota Camry",
    rating: 4.5,
    fare: 30,
    distanceKm: 12,
    timeMins: 20,
    timeHours: 0.33
  },
  {
    driverName: "Sarah Smith",
    carName: "Honda Civic",
    rating: 4.8,
    fare: 25,
    distanceKm: 10,
    timeMins: 18,
    timeHours: 0.3
  },
  {
    driverName: "Carlos Rivera",
    carName: "Ford Fiesta",
    rating: 4.3,
    fare: 28,
    distanceKm: 15,
    timeMins: 25,
    timeHours: 0.42
  },
  {
    driverName: "Aisha Khan",
    carName: "Hyundai Elantra",
    rating: 4.7,
    fare: 32,
    distanceKm: 13,
    timeMins: 22,
    timeHours: 0.37
  },
  {
    driverName: "David Lee",
    carName: "Chevrolet Cruze",
    rating: 4.6,
    fare: 27,
    distanceKm: 11,
    timeMins: 17,
    timeHours: 0.28
  },
  {
    driverName: "Maria Garcia",
    carName: "Nissan Altima",
    rating: 4.9,
    fare: 35,
    distanceKm: 16,
    timeMins: 30,
    timeHours: 0.5
  }
];

const DriverCard = ({ name, fare, car, timeMins, rating, distance }) => {
  const navigate = useNavigate()

  return (
    <div className='bg-[#FFE1CC] rounded-xl w-full h-fit p-3'>
      <div className='w-full flex items-center gap-3'>
          <div className='w-1/5 aspect-square rounded-full bg-gray-400'>
          </div>
          <div className="w-full">
            <div className='w-full flex items-center justify-between'>
              <p className='text-xl font-medium'>
                {name}
              </p>
              <p className='text-xl text-[#28C928] font-bold'>
                ₹ {fare}
              </p>
            </div>
            <div className='w-full flex items-center justify-between'>
              <p className='text-sm font-medium'>
                {car}
              </p>
              <p className='text-sm'>
                {timeMins} mins
              </p>
            </div>
            <div className='w-full flex items-center justify-between'>
              <p className='te font-medium flex items-center text-orange-500'>
                <FaStar />
                <span className='text-sm text-black ml-2'>{rating}</span>
              </p>
              <p className=''>
                {distance} Km
              </p>
            </div>
          </div>
      </div>
      <div className='w-full mt-6 flex items-center justify-end'>
        <button
          onClick={() => navigate("/courier/your-order")}
          className='px-10 py-2 bg-[#FF5C00] rounded-xl font-semibold text-lg'
        >
          Accept
        </button>
      </div>
    </div>
  )
}


const SelectDriver = ({ handleCloseMap }) => {
  const [ driversList, setDriverList ] = useState()

  useEffect(() => {
    axiosInstance
      .get("driver/find/1")
      .then(res => {
        const response = res.data;
        setDriverList(response.drivers_within_radius)
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className='w-full min-h-screen relative backdrop-blur-sm'>
        <div className='w-full h-40 bg-white flex items-end justify-end p-6'>
            <button
              onClick={handleCloseMap}
              className='text-opacity-60 text-black font-semibold'
            >
              Cancel
            </button>
        </div>
        <div className='w-full p-4 bg-transparent flex flex-col items-center gap-4'>
            {driversData.map((item, id) => (
              <div key={id} className='w-full h-fit'>
                <DriverCard
                  handleCloseMap={handleCloseMap}
                  name={item.driverName}
                  fare={item.fare}
                  car={item.carName}
                  timeMins={item.timeMins}
                  rating={item.rating}
                  distance={item.distanceKm}
                />
              </div>
            ))}
        </div>
    </div>
  )
}

export default SelectDriver