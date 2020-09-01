

export const welcomeHTMLConverter = (weatherObj, iconCode) => {
    return `
        <div>High: ${Math.round(weatherObj.high_temp)}</div>
        <div> Low: ${Math.round(weatherObj.low_temp)}</div>
        <div> ${weatherObj.weather.description}</div>
        <img src='../../icons/${iconCode}.png' :alt="weather image">
    `
}
