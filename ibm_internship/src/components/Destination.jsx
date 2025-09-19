import React from 'react'
import WeatherCard from './WeatherCard'
import Gallery from './Gallery'
import { useLocation } from 'react-router-dom'

function Destination() {
  const location=useLocation();
  const state=location.state;
  const {dest}=state;
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-6xl max-md:text-center max-md:text-4xl font-semibold mt-40 text-white'>Welcome to {dest.input}</h1>
      <Gallery dest={dest.input} />
      <WeatherCard dest={dest.input}  />
    </div>
  )
}

export default Destination
