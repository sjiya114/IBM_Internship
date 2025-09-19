import React, { useState } from 'react'
import image from '../assets/bg2.png';
import {useNavigate} from 'react-router-dom';
function Hero() {
  const [input,setInput]=useState("");
  const navigate=useNavigate();
  const onSubmit=(e)=>
  {
  e.preventDefault();
  navigate("/destination",{state:{dest:{input}}})
  }
  return (
    <>
<section style={{backgroundImage:`url(${image})`}} className="relative  flex flex-col  justify-center h-screen w-full items-center max-md:px-2 bg-black text-white text-sm pb-28 pt-8 bg-top bg-no-repeat">
  <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div> 
 <div className='z-50 w-full flex flex-col justify-center items-center'>
   <div className="flex items-center border pl-4 gap-2 border-gray-500/30  bg-blue-950 h-[46px] rounded-full overflow-hidden max-w-md w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 30 30" fill="white">
                <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8"/>
            </svg>
            <input type="text" onChange={(e)=>{setInput(e.target.value)}}  placeholder="Search" className="w-full h-full outline-none text-white bg-transparent placeholder-gray-500 text-sm" />
        </div>
 <button type='submit' onClick={onSubmit} className='px-4 py-2 rounded-lg bg-white text-blue-950 font-bold text-sm w-fit mt-4'>Go to Destination</button>
    </div>
</section>
    </>
  )
}

export default Hero
