import Temp from "./Temp";
import Weather from "./Weather";

export default interface Forecast {
    dt: number;
    sunrise: number;
    sunset: number;
    pressure: number,
    humidity: number,
    temp: Temp;
    weather: Weather[];
    speed: number;
    deg: number;
    clouds: number;
    rain: number;
}