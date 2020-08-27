




export const eventRender = (events) => {
         
    return ` 
    <div class = "event__CardContainer" >
    <div class="titleCard">${events.eventTitle}</div>
    <div class="descriptionCard">${events.Location}</div>
    <div class="descriptionCard">${new Date(events.timestamp).toLocaleDateString('en-US')}</div>
    <divclass="weatherCard"></divclass>
    <button class="button__eventEdit">edit</button>
    <button class="button__eventDelete">delete</button>
    <button class="button__Weather">show weather</button>
    </div>
    `
    }

 

 