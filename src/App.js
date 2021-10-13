import React, { Component ,useState} from 'react'

import { fetchWeather } from './api/fetchWeather'
import './App.min.css'

 const App =()=> {
   const [query, setquery] = useState('')
   const [weather, setweather] = useState({})
   const search = async (e) => {
     if(e.key==='Enter'){
       const data = await fetchWeather(query)
      setweather(data.data)
      setquery('')
     }
   }
    return (
      <div className='input_box main-container'>
        <input type='text' className="search" placeholder='Search...' value={query} onChange={(e)=>setquery(e.target.value)}onKeyPress={search}/>
        {weather.main &&(
          <div className="city">
            <div className="city-name">
              <div>{weather.name}</div>
              <sup>{weather.sys.country}</sup>
            </div>
            <div className="city-temp">
              {Math.round(weather.main.temp)}
              <sup>&deg;C</sup>
              <div >
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description}/>
                <div>{weather.weather[0].description}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
}

export default App