import { deleteEvent, getEventById } from "./eventProvider.js"
import { getWeather, useWeather } from "./weather/weatherProvider.js"

const eventHub = document.querySelector('.container')


eventHub.addEventListener('click', clickEvent  => {
    if (clickEvent.target.id.startsWith("deleteBtn--")) {
     const [promp, eventIdString] =  clickEvent.target.id.split("--")
     deleteEvent(eventIdString)
    } 
    
})

eventHub.addEventListener('click', async clickEvent => {
if (clickEvent.target.id.startsWith('showWeather--')) {
const [promp, eventObjId] = clickEvent.target.id.split("--")
const myEvents = await getEventById(eventObjId)
console.log(myEvents)
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

 
