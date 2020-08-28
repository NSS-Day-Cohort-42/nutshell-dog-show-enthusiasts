


export const getWeather =  async (zipCode) => {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=c03577aea5fe97f6b7f7284326a61b8c`);
    const parsedEvents = await response.json();
    events = parsedEvents;
}

getWeather(37216)