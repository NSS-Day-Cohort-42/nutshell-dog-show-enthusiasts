import {getWelcomeWeather, useWelcomeWeather} from "../Events/weather/weatherProvider.js"
import {getUsers, useUsers} from "../Users/userProvider.js"

const contentTarget = document.querySelector(".welcome__weather")
const eventHub = document.querySelector(".container")

export const WelcomeWeather = () => {
    getUsers()
    .then(getWelcomeWeather)
    users = useUsers()
    welcomeWeatherData = useWelcomeWeather()
    render()
}

const render = () => {
    const activeUser = sessionStorage.getItem("activeUser")
    const user = users.find(user => user.id === parseInt(activeUser))
    console.log(user)

}

