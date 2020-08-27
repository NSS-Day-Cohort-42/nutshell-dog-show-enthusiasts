const contentTarget = document.querySelector(".createMessageButton")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    console.log("Message Button Clicked")
    if (clickEvent.target.id === "create__Message") { 
        const createMessageEvent = new CustomEvent("createMessage")
        eventHub.dispatchEvent(createMessageEvent)
    }
})

export const createMessageButton = () => {
    contentTarget.innerHTML = "<button id='create__Message'>Create Public Message</button>"
}