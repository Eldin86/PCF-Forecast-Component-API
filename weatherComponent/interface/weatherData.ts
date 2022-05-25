import {WeatherType} from '../enum/WeatherTypes'

export interface IWeatherData { 
    date: Date; 
    temperature: number;
    weatherType: WeatherType;
}