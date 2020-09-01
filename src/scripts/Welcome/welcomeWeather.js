//Mark S
//displays weather on page load based on the zipcode provided by the user

import {getWelcomeWeather, useWelcomeWeather} from "../Events/weather/weatherProvider.js"
import {getUsers, useUsers} from "../Users/userProvider.js"
import {welcomeHTMLConverter} from "./welcomeHTMLCon.js"

const contentTarget = document.querySelector(".welcome__weather")


let users = []
let weather = []




const render = () => {
    const activeUser = sessionStorage.getItem("activeUser")
    const user = users.find(user => user.id === parseInt(activeUser))
    getWelcomeWeather(user)
    .then(() => {
        const dailyWeather = useWelcomeWeather()
        const welcomeLanding = dailyWeather[0]
        const matchedDescription = welcomeLanding.weather.icon
        const html = welcomeHTMLConverter(welcomeLanding, matchedDescription)
        contentTarget.innerHTML = html
        
    })
    
}

export const WelcomeWeather = () => {
    getUsers()
        
        .then(() => {
            users = useUsers()
            weather = useWelcomeWeather()
            render()
        })
}

