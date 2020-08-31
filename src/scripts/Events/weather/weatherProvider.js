import key from "../../Settings.js"



let weather = []


export const useWeather = () => {
    return weather.slice()

}





export const getWeather = async (city) => {
    try {


        const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${key.weatherKey}&units=I#`);
        const parsedWeather = await response.json();
      
        weather = parsedWeather.data
      weather = weather.map(weatherObj => {
         return { temp: weatherObj.temp,
                  description: weatherObj.weather.description,
                  icon: weatherObj.weather.icon
                  
                }            
      })
      console.log(weather)
    } catch (error) {
        throw error
    }
}

let dayWeather = []

// export const getWelcomeWeather = async (user) => {
//     try {
//     const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?postal_code=${user.zipCode}&key=${key.weatherKey}&units=I#`)
//         const parsedDailyWeather = await response.json()
//         dayWeather = parsedDailyWeather.data
//     } catch (error) {
//         throw error   
// }}

export const useWelcomeWeather = () => {
    return dayWeather.slice()
}

export const getWelcomeWeather = (user) => {
    return fetch(`https://api.weatherbit.io/v2.0/forecast/daily?postal_code=${user.zipcode}&key=${key.weatherKey}&units=I#`)
    .then(response => response.json())
    .then(data => dayWeather = data.data)
    
    
}