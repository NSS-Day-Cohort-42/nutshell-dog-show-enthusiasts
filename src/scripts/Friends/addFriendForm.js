import { dispatchFriendStateChange, saveFriend } from "./friendProvider.js";

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".friends--addFriend")

// hear "addFriendClicked" + render addFriendForm()
eventHub.addEventListener("addFriendClicked", event => { 
    addFriendForm()
})

// dispatch "saveFriendClicked" 
contentTarget.addEventListener("click", event => {
    if (event.target.id === "saveFriendButton") {

        const friendUsername = document.querySelector("#addFriendForm--friendUsername")
        const currentUser = sessionStorage.getItem("activeUser")

        const newFriend = {
            userId: parseInt(currentUser),
            friendUserId: friendUsername.value
        }
        saveFriend(newFriend)

        console.log("save friend button clicked + friend saved to API >>") 
    }
    dispatchFriendStateChange()
})



const render = () => {
    contentTarget.innerHTML = `
        <form id="addFriendForm">
            <input type="text" id="addFriendForm--friendUsername" placeholder="friend username..."></input>                       
        </form>

        <button id="saveFriendButton">Save Friend</button>
    `    
}


export const addFriendForm = () => {
    render()
}


