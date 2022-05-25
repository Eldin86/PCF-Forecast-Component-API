import * as React from 'react'

interface Props {
    date: number,
    day: number,
    temperature: number,
    src: string,
    humidity: number,
    wind: number,
    description: string
}

const SingleDayForecast: React.FC<Props> = ({date, day, temperature, src, humidity, wind, description}) => {
    return (
        <div className="today-forecast">
                <div className="today-forecast__header">
                    <div>
                        <strong>Mostar</strong><br/>
                        <strong>{new Date(date*1000).toLocaleString().split(', ')[0]}</strong><br/>
                        <strong>{new Date(day*1000).toLocaleDateString('en-GB', { weekday: 'long' })}</strong>
                    </div>
                    <h1>{temperature}&deg;C</h1>
                </div>
                <div className="today-forecast__body">
                   <div>
                        <small><strong>Humidity</strong>: {humidity}%</small> <br/>
                        <small><strong>Wind:</strong> {wind}km/h</small>
                   </div>
                    <div>
                        <img src={`http://openweathermap.org/img/wn/${src}@4x.png`}/>
                        <h4>{description}</h4>
                    </div>
                </div>
            </div>
    )
}

export default SingleDayForecast