import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WeatherCard from './components/WeatherCard'
import Gallery from './components/Gallery'
import { Route, Routes } from 'react-router-dom'
import { Home } from 'lucide-react'
import Destination from './components/Destination'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Hero/>}  ></Route>
        <Route path='/destination' element={<Destination/>}/>
      </Routes>
    </div>
  )
}

export default App
