const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".friends--button")

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showNotesButton") {
        const customEvent = new CustomEvent ("showNotesClicked")
        eventHub.dispatchEvent(customEvent)
    }
    console.log("dispatched >> showNotesClicked")
})

export const showNotesButton = () => {
    contentTarget.innerHTML = `<button id="showNotesButton">Show Notes</button>`
}

