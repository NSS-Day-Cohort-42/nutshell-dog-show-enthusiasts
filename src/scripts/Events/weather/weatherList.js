import { getWeather, useWeather } from "./weatherProvider.js"; 









export const weatherList = async (city) => {
        await getWeather(city)

            return useWeather();
             
             
}

