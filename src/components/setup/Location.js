import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import Select from 'react-select';
import Background from '../Tutorial/component/Background';
import personImage from "../../assets/setup/location.png";
import { useForm } from 'react-hook-form';
import MobileBackground from '../../globalComponent/ui/MobileBackground';

const Location = () => {
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm();
    const [selectedCity, setSelectedCity] = useState();
    const [selectedRegion, setSelectedRegion] = useState();
    const [ position, setPosition ] = useState('')

    useEffect(() => {
        console.log(position)
    }, [position])

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
                setPosition({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                })
            },
            (error) => {
                if (error.code === error.PERMISSION_DENIED) {
                    alert("Location services are disabled. Please enable location services to move forward.");
                } else {
                    console.error(error);
                }
            }
        );
    }, []);

    const onSubmit = (data) => {
        console.log(data);
    };

    const cityOptions = [
        {
            value: "delhi", 
            label: "Delhi",
            regions: ["North Delhi", "South Delhi", "East Delhi", "West Delhi", "Central Delhi"] 
        },
        {
            value: "mumbai", 
            label: "Mumbai",
            regions: ["South Mumbai", "Western Suburbs", "Central Mumbai", "Navi Mumbai", "Thane"] 
        },
        {
            value: "bangalore", 
            label: "Bangalore",
            regions: ["Koramangala", "Indiranagar", "Whitefield", "Electronic City", "Jayanagar"] 
        },
        {
            value: "chennai", 
            label: "Chennai",
            regions: ["T Nagar", "Anna Nagar", "Velachery", "Adyar", "Mylapore"] 
        },
        {
            value: "kolkata", 
            label: "Kolkata",
            regions: ["Park Street", "Salt Lake City", "Howrah", "New Town", "Alipore"] 
        },
    ];

    const handleCityChange = (selectedOption) => {
        setSelectedCity(selectedOption);
        setSelectedRegion(null); // Reset selected region when city changes
    };

    const handleRegionChange = (selectedOption) => {
        setSelectedRegion(selectedOption);
    };

    const customStyles = {
        control: (styles, { isFocused }) => ({ 
            ...styles, 
            backgroundColor: 'transparent', 
            borderRadius: '8px', 
            border: 'none', 
            minHeight: '40px', 
            width: "100%",
            outline: isFocused? "0px" : "none"
        }),
        option: (styles, { isFocused }) => ({
            ...styles,
            backgroundColor: isFocused ? '#ddd' : 'transparent',
            color: '#333',
            padding: '8px 12px',
        }),
        singleValue: styles => ({ ...styles, color: '#333' }),
    };

    return (
        <MobileBackground title={"Location"}>
            <div className='w-full h-full px-8 py-10'>
               
                <div className='w-full h-fit flex items-center justify-center px-5 mb-20'>
                    <img 
                        src={personImage}
                        className='w-full h-full object-cover'
                        alt=''
                    />
                </div>

                <div className='w-full shadow-2xl h-fit rounded-3xl p-5'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="w-full bg-[#E7FFE8] rounded-xl mb-6">
                            <Select
                                options={cityOptions}
                                placeholder='Select your City'
                                value={selectedCity}
                                className='w-full h-full focus:outline-0'
                                {...register("city", { required: "true" })}
                                onChange={handleCityChange}
                                styles={customStyles}
                            />
                        </div>

                        <div className="w-full bg-[#E7FFE8] rounded-xl mb-6">
                            <Select
                                options={selectedCity && selectedCity.regions.map(region => ({ value: region, label: region }))}
                                placeholder='Select your Area'
                                value={selectedRegion}
                                className='w-full h-full focus:outline-0'
                                {...register("region", { required: "true" })}
                                onChange={handleRegionChange}
                                styles={customStyles}
                            />
                        </div>

                        <button 
                            onClick={() => navigate("/courier/select")} 
                            type="submit"
                            className="w-full h-14 rounded-xl flex items-center justify-center bg-[#FF6B17] text-xl font-bold"
                        >
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        </MobileBackground>
    );
};

export default Location;
