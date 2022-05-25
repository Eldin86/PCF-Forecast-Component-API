import * as React from 'react'
import {Card} from '../../components/Card/Card'
import useFetch from '../../hooks/useFetch'
import LoadingCards from '../../components/LoadingCards/LoadingCards'
import LoadingDayForecast from '../../components/LoadingDayForecast/LoadingDayForecast'
import SingleDayForecast from '../../components/SingleDayForecast/SingleDayForecast'

interface ResponseProp {
    dt: number,
    temp : {
        day: number
    },
    weather: [
        {
            icon: string,
            description: string
        }
    ],
    humidity: number,
    wind_speed: number,
    icon: string
}

export const WeatherDataList: React.FC= () => {
   const {responses, isError, isLoading} = useFetch<ResponseProp>()
    return (
        <>
        <div className="weather-data">
        <h3 className='title-app'>Weather Forecast App</h3>
        {isError && <h3>{isError}</h3>}
            {isLoading && <LoadingDayForecast/>}
        {
            responses && <SingleDayForecast 
                date={responses[0].dt}  
                day={responses[0].dt}  
                temperature={responses[0].temp.day}  
                src={responses[0].weather[0].icon}  
                humidity={responses[0].humidity}  
                wind={responses[0].wind_speed}  
                description={responses[0].weather[0].description}/> 
        }

           <div className="daily-forecast">
            {
                isLoading ? <LoadingCards /> : <>
                    {responses && responses.map((el:any, index) => {
                    if(index === 0) return
                    return (
                        <Card 
                            key={index}
                            date={el.dt} 
                            description={el.weather[0].description}
                            temperature={el.temp.day} 
                            day={el.dt}
                            src={el.weather[0].icon}
                             />
                    )
                })}
                </>
            }
           </div>
        </div>
        </>
    )
}