import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BookSelection from '../components/bookAgain/BookSelection'

const BookAgainPage = () => {
  return (
    <Routes>
        <Route path='/' element={<BookSelection />} />
    </Routes>
  )
}

export default BookAgainPage