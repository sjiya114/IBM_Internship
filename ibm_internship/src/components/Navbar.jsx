import React from 'react'

function Navbar() {
  return (
    <nav className="flex mt-6 max-md:w-screen fixed top-0 left-0 right-0 z-100 bg-black/60 shadow-md shadow-amber-50 items-center border mx-4 max-md:mx-0  justify-between border-white px-6 max-md:px-2  py-4 rounded-full max-md:rounded-sm text-white text-sm">
    <div className=" w-full ml-14 max-md:ml-2  flex flex-row  justify-between  gap-4">
        <button
            className=" hover:bg-slate-800 px-4 py-2 rounded-full text-lg  font-bold transition">
           <i><a href='/'> Travel Explorer</a></i>
        </button>
        <button
            className="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300">
            Get Started
        </button>
    </div>
</nav>
  )
}

export default Navbar
