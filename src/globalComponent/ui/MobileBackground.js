import React from 'react'
import { GoChevronLeft } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
import { RxAvatar } from "react-icons/rx";

const MobileBackground = ({ title, children, searchIcon=true, profileIcon=true }) => {
    const navigate = useNavigate()

    const handleBackBtn = () => {
        navigate(-1)
    }

  return (
    <div className='w-screen h-screen pt-10 pb-5'>
        <div className='w-full h-[3rem] flex items-center justify-between gap-2 px-6'>
            <button
                onClick={handleBackBtn}
                className='border-none text-3xl mr-6 flex items-center justify-center w-10 aspect-square rounded-full'
            >
                <GoChevronLeft />
            </button>

            <p className='capitalize text-3xl font-regular'>
                {title}
            </p>

            <div className='min-w-10 flex items-center gap-3'>
                {searchIcon && 
                <button
                    className='border-none text-3xl flex items-center justify-center w-10 aspect-square rounded-full'
                >
                    <CiSearch />
                </button>}
                {profileIcon &&
                <Link
                    to={"/profile"}
                    className='text-2xl'
                >
                    <RxAvatar />
                </Link>}
            </div>
        </div>
        <div className='w-full h-[calc(100%-3rem)]'>
            {children}
        </div>
    </div>
  )
}

export default MobileBackground