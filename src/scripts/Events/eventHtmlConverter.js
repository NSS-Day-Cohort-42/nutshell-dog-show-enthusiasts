import { deleteEvent, getEventById, getEventEntries, useEventEntries } from "./eventProvider.js"
import { getWeather, useWeather } from "./weather/weatherProvider.js"
//import { welcomeHTMLConverter } from "../Welcome/welcomeHTMLCon.js"
import {weatherHtmlConverter} from "../Events/weather/weatherHtmlConverter.js"


const eventHub = document.querySelector('.container')


eventHub.addEventListener('click', clickEvent  => {
    if (clickEvent.target.id.startsWith("deleteBtn--")) {
     const [promp, eventIdString] =  clickEvent.target.id.split("--")
     deleteEvent(eventIdString)
    } 
    
})

const contentTarget = document.querySelector(".weatherDisplay")
eventHub.addEventListener('click', clickEvent => {
if (clickEvent.target.id.startsWith('showWeather--')) {
const [promp, eventObjId] = clickEvent.target.id.split("--")
const myEventId = parseInt(eventObjId)
const allEvents = useEventEntries()
const selectedEvent = allEvents.find(event => event.id === myEventId)
getWeather(selectedEvent)
    .then(() => {
        const dayOfWeather = useWeather()
        const findDate = dayOfWeather.filter(day => day.valid_date === selectedEvent.date)
        const eventWeather = findDate[0]
        const html = weatherHtmlConverter(eventWeather)
        console.log(html)
        contentTarget.innerHTML = html
        
    })
}}
)






export const eventRender = (events) => {
         
    return ` 
    <div class = "event__CardContainer" >
    <div class="titleCard">${events.eventTitle}</div>
    <div class="descriptionCard">${events.Location}</div>
    <div class="displayDate">${events.date}</div>
    <div class="weatherCard"></divclass>
    <button class="button__eventEdit">edit</button>
    <button id= "deleteBtn--${ events.id }" class="button__eventDelete">delete</button>
    <button id="showWeather--${events.id}"class="button__Weather">show weather</button>
    </div>
    `
    }

 
