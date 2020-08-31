



let weather = []


export const useWeather = () => {
    return weather.slice()

}





export const getWeather = async (city) => {
    try {


        const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=1de141ef043944419d1173ca59f6ef0e&units=I#`);
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


