
import { getEventEntries, useEventEntries } from './eventProvider.js'
import { eventRender } from './eventHtmlConverter.js'

const contentTarget = document.querySelector('.events--container') 
const eventHub = document.querySelector('.container')

eventHub.addEventListener('eventStateChanged', () =>  {
getEventEntries().then(() => {
const allEvents = useEventEntries()
render(allEvents)
})
})

export const eventList = () => { 
    getEventEntries()
    .then(() => { 
        const events = useEventEntries()
        render(events)
    })

}

export const render = (arr) => {
    const allEventsHtml =  arr.reverse().map(values => {
     return eventRender(values)
    }).join("")
    contentTarget.innerHTML = allEventsHtml
}

 

