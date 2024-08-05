import React from 'react'
import MobileBackground from '../../globalComponent/ui/MobileBackground'
import { GoChevronRight } from 'react-icons/go'

const  PinkButton = ({ text, onClickHandler }) => {
    return (
      <button
        // disabled={onClickHandler? true : false}
        onClick={onClickHandler && onClickHandler}
        className='h-20 mb-[0.5px] w-full bg-[#FFEFEA] flex items-center justify-between ga-2 px-8'
      >
        <p className='capitalize font-medium text-lg'>
          {text}
        </p>
        <p className='text-2xl'>
          <GoChevronRight />
        </p>
      </button>
    )
  }
  

const BookSelection = () => {
  return (
    <MobileBackground title={"Book Specific"}>
        <div className='pt-10'>
            <PinkButton
                text={"Order By Vehicle Number"}
            />
            <PinkButton
                text={"Order By Mobile Number"}
            />
        </div>
    </MobileBackground>
  )
}

export default BookSelection