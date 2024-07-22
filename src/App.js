import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoadingScreen from './globalComponent/Loader/LoadingScreen';
import TutorialPage from './pages/TutorialPage';
import LoginPage from './pages/LoginPage';
import './App.css';
import SignUpPage from './pages/SignUpPage';
import SetupPage from './pages/SetupPage';
import { MobileProvider } from './globalComponent/context/MobileContext';
import CourierPage from './pages/CourierPage';
import VerificationPage from './pages/VerificationPage';
import DriverHomePage from './pages/DriverHomePage';
import UserProfile from './assets/UserProfile/UserProfile';
import { UserProvider } from './globalComponent/context/UserContext';

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const startTime = Date.now();

    // Simulate page content loading (replace with actual loading logic)
    setTimeout(() => {
      const endTime = Date.now();
      const elapsedTime = endTime - startTime;

      // Adjust the minimum loading time if the page content takes longer than 500ms
      const minLoadingTime = Math.max(500, elapsedTime);

      const timer = setTimeout(() => {
        setIsLoading(false);
      }, minLoadingTime);

      return () => clearTimeout(timer);
    }, 500); // Simulated page content loading time
  }, []);

  return (
    <div className="App">
      <MobileProvider>
        <UserProvider>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <Router>
          <Routes>
            <Route path='/' element={<Navigate to="/tutorial" />} />
            <Route path='/tutorial' element={<TutorialPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignUpPage />} />
            <Route path='/setup' element={<SetupPage />} />
            <Route path='/driver' element={<DriverHomePage />} />
            <Route path='/profile' element={<UserProfile />} />
            <Route path='/courier/*' element={<CourierPage />} />
            <Route path='/verification/*' element={<VerificationPage />} />
          </Routes>
        </Router>
      )}
      </UserProvider>
      </MobileProvider>
    </div>
  );
}

export default App;
