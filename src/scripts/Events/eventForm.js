
import { saveEvents } from './eventProvider.js'

const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('.events--container')

// ${ new Date(eventObject.timestamp).toLocaleDateString('en-US')  }</input> 
eventHub.addEventListener('click', event => {

    if (event.target.id === 'button__createEvent') {
    contentTarget.innerHTML = eventsFormConverter()
}
})

eventHub.addEventListener('click', event => {
 
    const eventTitle = document.querySelector('.event__Title').value
    const eventDate = document.querySelector('.event__CompletionDate').value
    const eventLocation = document.querySelector('.event__Location').value
    
    if ( event.target.id === 'saveEvent' && eventTitle  !== ''  && eventDate !==  null && eventLocation ==! '' ) {
           
            const newEvent = {
                eventTitle: eventTitle.value,
                Location : eventLocation.value,
                eventCompletionDate: eventDate.value
            }
         
            saveEvents(newEvent)
        }    
   
    })  
    

export const formButton = () => {
    contentTarget.innerHTML = ` 
    <button id="button__createEvent">createEvent</button>
    `
}

export const eventsFormConverter = () => {
  return   ` 
    
    <input type="text" class="event__Title" placeholder="Event Title"></input>
   <input type ="text" class="event__Location" placeholder="location"></input>
    <input type="date" class="event__CompletionDate"></input> 
    <button class="button__eventWeather">event weather</button>
    <button id="saveEvent">Save Event</button>
    `}





