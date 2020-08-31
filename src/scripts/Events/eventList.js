
import { getEventEntries, useEventEntries } from './eventProvider.js'
import { eventRender } from './eventHtmlConverter.js'

// const contentTarget = document.querySelector('.events--container') 
// const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('.eventList') 
const eventHub = document.querySelector('.container')
const contentTargetTwo = document.querySelector('.eventListSecondary')


eventHub.addEventListener("eventStateChanged", CustomEvent => {
    const deletedevents = useEventEntries()
    render(deletedevents)
})



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
   
    //     const sorter = arr.sort((a,b) => {
    //         return b.date - a.date
    //     })
    // const allEventsHtml =  sorter.map(values => {
    //  return eventRender(values)
    // }).join("")
    // contentTarget.innerHTML = allEventsHtml
    const first = arr.pop()
        const html = eventRender(first)
        contentTarget.innerHTML = html
        const restOfEvents = arr.reverse().map(values => {
            return eventRender(values)
        }).join("")
        contentTargetTwo.innerHTML = restOfEvents
}



 



