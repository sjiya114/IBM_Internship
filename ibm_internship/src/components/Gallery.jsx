import { useEffect, useState } from "react";
import axios from 'axios';

export default function Gallery({dest}) {
  const [images,setImages]=useState([]);
  const fetchImages=async()=>
  {
    try {
      const res=await axios.get(`https://api.unsplash.com/search/photos?per_page=3&query=${dest}&page=1&client_id=${import.meta.env.VITE_API_ACCESS_KEY}`);
      if(res.data)
      {
      let requi=res.data.results;
      console.log(requi);
      setImages(requi);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>
  {
  fetchImages();
  },[])
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            
            <h1 className='text-4xl max-md:text-2xl max-md:text-center font-semibold mt-20  max-md:mt-10 text-white'>Our latest Destination</h1>
            <p className="text-sm max-md:text-center text-slate-200 my-6 text-center mt-6 max-w-lg mx-auto">Take a look at our destination gallery</p>
            
          {images && images.length>0 &&  <div className="flex items-center gap-6 h-[400px] w-full max-w-5xl mt-10 mx-auto">
                <div className="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full">
                    <img className="h-full w-full object-cover object-center"
                        src={images[0].urls.raw}
                        alt="image" />
                    <div
                        className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-3xl">{images[0].alt_description}</h1>
                    </div>
                </div>
                <div className="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full">
                    <img className="h-full w-full object-cover object-right"
                       src={images[1].urls.raw}
                        alt="image" />
                    <div
                        className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-3xl">{images[1].alt_description}</h1>
                    </div>
                </div>
                <div className="relative group flex-grow transition-all w-56 h-[400px] duration-500 hover:w-full">
                    <img className="h-full w-full object-cover object-center"
                        src={images[2].urls.raw}/>
                    <div
                        className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-3xl">{images[2].alt_description}</h1>
                    </div>
                </div>
            </div>
}
        </>
    );
};