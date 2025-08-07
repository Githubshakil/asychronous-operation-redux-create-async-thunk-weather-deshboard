import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import weatherbanner from '../assets/weather-banner.png'


import { clearWeatherData, fetchWeatherData } from '../redux/features/weather/weatherSlice'
import WeatherCard from './WeatherCard'

const Weather = () => {
    const {weatherData, loading, error} = useSelector((state)=> state.weather)
    const dispatch = useDispatch()


    const [city , setCity] = useState("")
    
    const handlefetchWeather = (event)=>{
        event.preventDefault()
        if(city.trim()==="")return
        dispatch(fetchWeatherData(city))
        setCity("")
    }

  return (
    <div className='bg-blue-300'>
        <div className='px-6 py-20 container max-w-screen-lg mx-auto min-h-screen'>
            <h1 className='text-3xl md:text-5xl font-bold text-center mb-3'>Weather Deshboard</h1>
            <div className='w-full flex justify-center items-center mb-4'>
                <p className='bg-red-500 text-white inline-block px-2 text-center'>fetch weather data from different cities using redux toolkit and redux thunk</p>
            </div>
            <div className='w-full flex justify-center'>
                <img src={weatherbanner} alt="" />
            </div>

            {/* search weather box */}

            <form onSubmit={handlefetchWeather} className='my-6 flex flex-wrap gap-2 md:gap-4'>
                <input value={city} onChange={(e) => setCity(e.target.value)} type="text" placeholder='Enter City Name' className='flex-grow bg-gray-200 px-4 py-2 border border-gray-400 rounded focus:outline-none' />
                <button type='submit' className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 cursor-pointer'>Search Weather</button>
                <button onClick={() => dispatch(clearWeatherData())} type='button' className='px-4 py2 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer'>Clear</button>
            </form>

            {/* weather Cards with loading and error */}

            {loading && <p className='text-center text-blue-500'>Loading...</p>}
            {error && <p className='text-center text-red-500'>{error}</p>}

            <div className='grid grid-cols-1 md:grid-cols-3  gap-4'>
                {
                    weatherData.map((data, index) => (
                       <WeatherCard key={index} city={data.name} feels={data.main.feels_like} temp={data.main.temp} description={data.weather[0].description} wind={data.wind.speed} cloud={data.clouds.all}/>
                    ))
                }
            </div>








        </div>
    </div>
  )
}

export default Weather