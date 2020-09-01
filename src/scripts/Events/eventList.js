
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

export const render = (events) => {
    const activeUser = sessionStorage.getItem("activeUser")
    const allEvents = useEventEntries()
    //filter userID and active user
    const eventsPerId = allEvents
        .filter(event => event.userId === parseInt(activeUser))
            if(eventsPerId.length >= 1) {
                const first = eventsPerId.pop()
                
                const html = eventRender(first)
                contentTarget.innerHTML = html
                const restOfEvents = eventsPerId.reverse().map(values => {
                    return eventRender(values)
                }).join("")
                contentTargetTwo.innerHTML = restOfEvents
                
            } else {
                const restOfEvents = eventsPerId.reverse().map(values => {
                    return eventRender(values)
                }).join("")
                contentTarget.innerHTML = restOfEvents
            }
}
    
    //     const sorter = arr.sort((a,b) => {
        //         return b.date - a.date
        //     })
        // const allEventsHtml =  sorter.map(values => {
            //  return eventRender(values)
            // }).join("")
            // contentTarget.innerHTML = allEventsHtml
            //if(arr.length >= 1) {
        //         const first = arr.pop()
        // const html = eventRender(first)
        // contentTarget.innerHTML = html
        //     .forEach(event => {
        //         toDom += eventRender(event)
        //     })
        
    //     contentTargetTwo.innerHTML = restOfEvents
    // } else {
    //     const restOfEvents = arr.reverse().map(values => {
    //         return eventRender(values)
    //     }).join("")
    //     contentTarget.innerHTML = restOfEvents
    // }
        
    



    // const restOfEvents = arr.reverse().map(values => {
    //     return eventRender(values)
    // }).join("")



