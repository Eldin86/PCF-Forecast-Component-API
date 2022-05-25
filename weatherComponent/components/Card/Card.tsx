import * as React from 'react'

interface Props {
    date: number,
    src: string,
    description: string,
    temperature: number,
    day: number
}

export const Card: React.FC<Props> = ({date, description, temperature, day, src}) => {

    return (
        <div className="card">
            <p>{new Date(date*1000).toLocaleString().split(', ')[0]}</p>
            <img src={`http://openweathermap.org/img/wn/${src}@2x.png`}/>
            <h2>{temperature}&deg;C</h2>
            <small>{description}</small>
            <p>{new Date(day*1000).toLocaleDateString('en-GB', { weekday: 'long' })}</p>
        </div>
    )
}