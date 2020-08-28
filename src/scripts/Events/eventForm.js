
import { saveEvents, getEventEntries, useEventEntries } from './eventProvider.js'
import { eventList } from './eventList.js'
// import {  render } from "./eventList.js";



const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('.eventsRender')


eventHub.addEventListener('click', event => {

    if (event.target.id === 'button__createEvent') {
        contentTarget.innerHTML += eventsFormConverter()


    }

})

eventHub.addEventListener('click', event => {
    if (event.target.id === 'saveEvent') {
        const eventTitle = document.querySelector('.eventTitle')
        const eventLocation = document.querySelector('.eventLocation')
        const currentUser = sessionStorage.getItem("activeUser")
        
        const timeStamp = document.querySelector('.event__CompletionDate')
     
        if (eventTitle.value !== "" && eventLocation.value !== "" && timeStamp.value !== null) {



            const newEvent = {
                eventTitle: eventTitle.value,    
                Location: eventLocation.value,
                date: timeStamp.value,
                userId: parseInt(currentUser)
            }

            saveEvents(newEvent)
            eventList()
        } else {
            window.alert('all the fields $#%^')
        }
    }
}
)


export const eventFormButton = () => {
    contentTarget.innerHTML = ` 
    <button id="button__createEvent">createEvent</button>
    `
}

export const eventsFormConverter = () => {
    return ` 
    
    <input type="text" class="eventTitle" placeholder="Event Title"></input>
   <input type ="text" class="eventLocation" placeholder="location"></input>
    <input type="date" class="event__CompletionDate"></input> 
    <button class="button__eventWeather">event weather</button>
    <button id="saveEvent">Save Event</button>
    `}


