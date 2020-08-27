const contentTarget = document.querySelector('.events--container')




export const eventRender = () => {
         
    return ` 
    <div class = "event__CardContainer" >
    <div class="titleCard"></div>
    <div class="descriptionCard"></div>
    <divclass="weatherCard"></divclass>
    <button class="button__eventEdit"></button>
    <button class="button__eventDelete"></button>
    </div>
    `
    }