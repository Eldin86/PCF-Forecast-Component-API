import * as React from 'react'

const LoadingDayForecast = () => {
    return (
        <div className="today-forecast loading-today-forecast">
            <div className="loading-today-forecast__header">
                <div className="loading-today-forecast__general-data">
                <p></p>
                <p></p>
                <p></p>
                </div>
                <h1 className="loading-today-forecast__temperature"></h1>
            </div>
            <div className="loading-today-forecast__body">
                <div className="loading-today-forecast__humidity-wind">
                    <p></p>
                    <p></p>
                </div>
            <div className='loading-today-forecast__icon-description'>
                <p className="loading-today-forecast__icon"></p>
                <p className="loading-today-forecast__description"></p>
            </div>
            </div>
        </div>
    )
}

export default LoadingDayForecast