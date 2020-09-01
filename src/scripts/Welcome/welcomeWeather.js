import {getWelcomeWeather, useWelcomeWeather} from "../Events/weather/weatherProvider.js"
import {getUsers, useUsers} from "../Users/userProvider.js"
import {welcomeHTMLConverter} from "./welcomeHTMLCon.js"

const contentTarget = document.querySelector(".welcome__weather")
const eventHub = document.querySelector(".container")

let users = []
let weather = []


// export const WelcomeWeather = () => {
//     getUsers()
//         .then(() => {
//             users = useUsers()
//         })
//         .then(getWelcomeWeather(user))
//         .then(() => {

//             weather = useWelcomeWeather()
//             render()
//     })
// }

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

