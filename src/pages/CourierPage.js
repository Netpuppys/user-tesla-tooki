import React from 'react'
import { Routes, Route } from 'react-router-dom';
import SelectCourier from '../components/courier/SelectCourier';
import AllCourierInfo from '../components/courier/AllCourierInfo';
import EnterLocation from '../components/courier/EnterLocation';
import SubTotal from '../components/courier/SubTotal';
import YourOrder from '../components/courier/YourOrder';
import SelectDriver from '../components/courier/SelectDriver';

const CourierPage = () => {
  return (
    <Routes>
        <Route path='/select' element={<SelectCourier />} />
        <Route path='/details' element={<AllCourierInfo />} />
        <Route path='/location' element={<EnterLocation />} />
        <Route path='/sub-total' element={<SubTotal />} />
        {/* <Route path='/select-driver' element={<SelectDriver />} /> */}
        <Route path='/your-order' element={<YourOrder />} />
        {/* <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/setup' element={<SetupPage />} /> */}
    </Routes>
  )
}

export default CourierPage