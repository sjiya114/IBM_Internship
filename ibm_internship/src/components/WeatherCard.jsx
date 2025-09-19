import React, { useState } from 'react'
import {CloudSun,Wind,Droplets} from'lucide-react';
import axios from 'axios';
import { useEffect } from 'react';

function WeatherCard({dest}) {
  const [data,setData]=useState(null);
  const fetchWeather = async () => {
     const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${dest}?key=${import.meta.env.VITE_WEATHER_APIKEY}`;
    try {
      const res = await axios.get(url);
      if (!res.data) {
        console.log("error");
      }
      else{
        console.log(res.data);
         setData(res.data);
      }
    }
    catch (error) {
      console.log("error");
    }
  }
  // eslint-disable-next-line
  useEffect(() => {
    // eslint-disable-next-line
    fetchWeather();
  }, []);
  return (
    <>
        <h1 className='text-4xl font-semibold max-md:text-center mt-30 text-white'>Take a look at weather of Destination</h1>
        <div className='text-white mt-20 flex flex-col bg-gradient-to-r from-[#13345B] to-indigo-500 mb-20 shadow-lg shadow-gray-200 space-y-4 justify-center items-center border-2 border-[#13345B] px-4 py-4 rounded-2xl w-fit   '>
             <CloudSun/>
             <span>{data?.address}</span>
              <span>{data?.days[0].temp}</span> 
              <div className='flex flex-row space-x-10'>
                <div className='flex flex-row space-x-2'>
                  <Droplets/>
                  <span>{data?.days[0].humidity} humidity</span>
                </div>
                <div  className='flex flex-row space-x-2'>
                    <Wind />
                   <span>{data?.days[0].precip} wind</span>
                </div>  
              </div>  
         </div>
         </>
  )
}

export default WeatherCard
