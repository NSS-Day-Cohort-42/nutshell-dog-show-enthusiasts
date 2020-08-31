
let events = [];
 
const eventHub = document.querySelector('.container')

export const dispatchChangeEvent = () => {
    const eventStateChanged = new CustomEvent('eventStateChanged')
    
    eventHub.dispatchEvent(eventStateChanged)
}

// export const useEventEntries = () => {
//     return events.slice();
// }
//sorts by events by date
export const useEventEntries = () => {
    const dateSorted = events.sort(
        (currentEvent, nextEvent) => 
            Date.parse(nextEvent.date) - Date.parse(currentEvent.date)
    )
    return dateSorted.slice();
}


export const getEventById =  async (id) => {
    const response = await fetch(`http://localhost:8088/events/${id}`);
    return await response.json();
    
}



export const getEventEntries =  async () => {
    const response = await fetch('http://localhost:8088/events');
    const parsedEvents = await response.json();
    events = parsedEvents;
}

    export const saveEvents =  (event) => {
        const jsonEntry = JSON.stringify(event)
    console.log(jsonEntry)
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