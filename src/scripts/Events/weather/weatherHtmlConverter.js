export const weatherHtmlConverter = (weatherObj) => {
    return `
        
            <div>High: ${weatherObj.high_temp}</div>
            <div> Low: ${weatherObj.low_temp}</div>
            <div> ${weatherObj.weather.description}</div>
            
        
    `
 }
