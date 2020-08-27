
let events = [];
 
const eventHub = document.querySelector('.container')

const dispatchChangeEvent = () => {
    const eventStateChanged = new CustomEvent('eventStateChanged')
    
    eventHub.dispatchEvent(eventStateChanged)
}

export const useEventEntries = () => {
    return events.slice();
}





export const getEventEntries =  async () => {
    const response = await fetch('http://localhost:3000/events');
    const parsedEvents = await response.json();
    events = parsedEvents;
}

    export const saveEvents =  (event) => {
        const jsonEntry = JSON.stringify(event)
    
         return fetch('http://localhost:3000/events',{
            method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: jsonEntry
        })
        .then(getEventEntries)
        .then(dispatchChangeEvent)
    }

    export const deleteEvent = (event) => {
        return fetch(`http://localhost:3000/events`, {
            method: "DELETE"
        })
        .then(getEventEntries)
        .then(dispatchChangeEvent)
        .catch(
            (error) => {
                console.log(error)
            }
        )
    }