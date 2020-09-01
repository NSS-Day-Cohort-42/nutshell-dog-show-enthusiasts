
import { saveEvents, getEventEntries, useEventEntries } from './eventProvider.js'
import { eventList } from './eventList.js'
import { getWeather, useWeather } from "./weather/weatherProvider.js";



const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('.eventsRender')


eventHub.addEventListener('click', event => {

    if (event.target.id === 'button__createEvent') {
        contentTarget.innerHTML += eventsFormConverter()


    }

})

eventHub.addEventListener('click', event => {
    if (  event.target.id === 'saveEvent') {
        
     
        const eventTitle = document.querySelector('#eventTitle')
        const eventLocation = document.querySelector('#eventLocation')
        const currentUser = sessionStorage.getItem("activeUser")
        
        const timeStamp = document.querySelector('#event__CompletionDate')
     
        if (eventTitle.value !== "" && eventLocation.value !== "" && timeStamp.value !== "") {
             
          

            const newEvent = {
                eventTitle: eventTitle.value,    
                Location: eventLocation.value,
                date: timeStamp.value,
                userId: parseInt(currentUser),
                
            }

            saveEvents(newEvent)
            //eventList()
           
        } else {
            window.alert('all the fields $#%^')
        }
    }
}
)


export const eventFormButton = () => {
    contentTarget.innerHTML = ` 
    <button id="button__createEvent">Create Event</button>
    `
}

export const eventsFormConverter = () => {
   
    return ` 
    <form class="eventForm">
    <input type="text" id="eventTitle" placeholder="Event Title"></input>
    <input type ="text" id="eventLocation" placeholder="location"></input>
    <input type="date" id="event__CompletionDate">
    <button class="button__eventWeather">event weather</button>
    <button id="saveEvent">Save Event</button>
    </form>
    `
}

    // export const weatherList = async (city) => {
    //    await getWeather(city)
    //    console.log(useWeather())
    //        return useWeather();
            
            
        

//         const CurrentDate =  new Date()
//    CurrentDate.setDate(CurrentDate.getDate() + 7)

    //     <input type="date" min="${new Date().toLocaleDateString('en-US').replace(/\//g,"-")}"  max="
    // ${
       
    //   CurrentDate.toLocaleDateString('en-US').replace(/\//g,"-")
    // }"class="event__CompletionDate"></input> 