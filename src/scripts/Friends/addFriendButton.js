const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".friends--addFriend")

// dispatch "addFriendClicked" 
contentTarget.addEventListener("click", event => {
    if (event.target.id === "addFriendButton") {
        const customEvent = new CustomEvent ("showFriendForm")
        eventHub.dispatchEvent(customEvent)

        // console.log("add friend button clicked + dispatched >> 'showFriendForm'") 
    }
})


// hear "friendSaved" + render addFriendButton()
eventHub.addEventListener("friendSaved", event => { 
    addFriendButton()
})

export const addFriendButton = () => {
    contentTarget.innerHTML = `<button class="button__addFriend" id="addFriendButton">Add a Friend</button>`
}