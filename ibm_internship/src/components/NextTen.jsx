import React from 'react'
import { useState,useEffect} from 'react';
import {CloudSun,Droplets,Wind} from 'lucide-react' 
import axios from 'axios';

function NextTen({dest}) {
    const [data, setData] = useState(null);
    const fetchWeather = async () => {
        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${dest}?key=${import.meta.env.VITE_WEATHER_APIKEY}`;
        try {
            const res = await axios.get(url);
            if (!res.data) {
                console.log("error");
            }
            else {
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
        <h1 className='text-4xl font-semibold max-md:text-center mt-30 text-white'>Take a look at weather of Ten Days </h1>
        <div className='flex flex-row max-w-screen-xl mx-auto max-md:justify-center md:space-x-10 flex-wrap justify-between'>
       {data?.days.map((datas)=> <div className='text-white mt-20 flex flex-col bg-gradient-to-r from-[#a53c3c] to-indigo-500 mb-20 shadow-lg shadow-gray-200 space-y-4 justify-center items-center border-2 border-[#13345B] px-4 py-4 rounded-2xl w-fit   '>
             <CloudSun/>
             <span>{datas?.datetime}</span>
              <span>{datas?.temp}</span> 
              <div className='flex flex-row space-x-10'>
                <div className='flex flex-row space-x-2'>
                  <Droplets/>
                  <span>{datas?.humidity} humidity</span>
                </div>
                <div  className='flex flex-row space-x-2'>
                    <Wind />
                   <span>{datas?.precip} wind</span>
                </div>  
              </div>  
         </div>
)}
        </div>
        </>
    )
}

export default NextTen
