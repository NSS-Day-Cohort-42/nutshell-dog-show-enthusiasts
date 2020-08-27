const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".friends--addFriend")

contentTarget.addEventListener("click", event => {
    if (event.target.id === "addFriendButton") {
        const customEvent = new CustomEvent ("addFriendClicked")
        eventHub.dispatchEvent(customEvent)
    }
    console.log("add friend button clicked + dispatched >> addFriendClicked")
})

export const addFriendButton = () => {
    contentTarget.innerHTML = `<button id="addFriendButton">Add a Friend</button>`
}