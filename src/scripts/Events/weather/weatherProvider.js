import key from "../../Settings.js"



let weather = []
let dayWeather = []


export const useWeather = () => {
    return weather.slice()

}
export const getWeather = (event) => {
    return fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${event.Location}&key=${key.weatherKey}&units=I#`)
    .then(response => response.json())
    .then(data => weather = data.data)
}




// export const getWeather = async (city) => {
//     try {


//         const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${key.weatherKey}&units=I#`);
//         const parsedWeather = await response.json();
      
//         weather = parsedWeather.data
//       weather = weather.map(weatherObj => {
//          return { temp: weatherObj.temp,
//                   description: weatherObj.weather.description,
//                   icon: weatherObj.weather.icon
                  
//                 }            
//       })
//       console.log(weather)
//     } catch (error) {
//         throw error
//     }
// }




export const useWelcomeWeather = () => {
    return dayWeather.slice()
}

export const getWelcomeWeather = (user) => {
    return fetch(`https://api.weatherbit.io/v2.0/forecast/daily?postal_code=${user.zipcode}&key=${key.weatherKey}&units=I#`)
    .then(response => response.json())
    .then(data => dayWeather = data.data)
    
    
}