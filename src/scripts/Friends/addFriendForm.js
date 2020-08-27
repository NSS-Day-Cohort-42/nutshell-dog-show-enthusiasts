import { getUsers, useUsers } from "../Users/userProvider.js";
import { dispatchFriendStateChange, saveFriend } from "./friendProvider.js";

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".friends--addFriend")

// hear "addFriendClicked" + render addFriendForm()
eventHub.addEventListener("addFriendClicked", event => { 
    addFriendForm()
})

// hear button click (from button with id "saveFriendButton")
contentTarget.addEventListener("click", event => {
    if (event.target.id === "saveFriendButton") {

        const friendUsername = document.querySelector("#addFriendForm--friendUsername")
        const currentUser = sessionStorage.getItem("activeUser")
        const allUsers = useUsers()

        console.log("friendUsername value >>", friendUsername.value)

        const friendUserObj = allUsers.find((user) => {
            return friendUsername.value === user.username
        }) 
        // console.log("friendUserObj >>", friendUserObj)


        const friendUserId = parseInt(friendUserObj.id)

        const newFriend = {
            userId: parseInt(currentUser),
            friendUserId: friendUserId
        }
        
        // saveFriend(newFriend)

        console.log("save friend button clicked + friend saved to API >>") 
    }

    dispatchFriendStateChange()
})


// window.alert("This username does not exist. Please try another. 🤓")


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


