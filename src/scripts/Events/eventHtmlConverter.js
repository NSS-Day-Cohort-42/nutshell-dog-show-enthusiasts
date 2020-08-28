import { deleteEvent } from "./eventProvider.js"

const eventHub = document.querySelector('.container')


eventHub.addEventListener('click', clickEvent  => {
    if (clickEvent.target.id.startsWith("deleteBtn--")) {
     const [promp, eventIdString] =  clickEvent.target.id.split("--")
     deleteEvent(eventIdString)
    } 
    
})





export const eventRender = (events) => {
         
    return ` 
    <div class = "event__CardContainer" >
    <div class="titleCard">${events.eventTitle}</div>
    <div class="descriptionCard">${events.Location}</div>
    <div class="displayDate">${ events.date}</div>
    <divclass="weatherCard"></divclass>
    <button class="button__eventEdit">edit</button>
    <button id= "deleteBtn--${ events.id }" class="button__eventDelete">delete</button>
    <button class="button__Weather">show weather</button>
    </div>
    `
    }

 

 