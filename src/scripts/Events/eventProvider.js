
let events = [];
 
const eventHub = document.querySelector('.container')

export const dispatchChangeEvent = () => {
    const eventStateChanged = new CustomEvent('eventStateChanged')
    
    eventHub.dispatchEvent(eventStateChanged)
}

export const useEventEntries = () => {
    return events.slice();
}





export const getEventEntries =  async () => {
    const response = await fetch('http://localhost:8088/events');
    const parsedEvents = await response.json();
    events = parsedEvents;
}

    export const saveEvents =  (event) => {
        const jsonEntry = JSON.stringify(event)
    
         return fetch('http://localhost:8088/events',{
            method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: jsonEntry
        })
        .then(getEventEntries)
        .then(dispatchChangeEvent)
    }

    export const deleteEvent = (eventid) => {
        return fetch(`http://localhost:8088/events/${eventid}`, {
            method: "DELETE"
        })
        .then(getEventEntries)
        .then(dispatchChangeEvent)
        
        
            
            
        
    }