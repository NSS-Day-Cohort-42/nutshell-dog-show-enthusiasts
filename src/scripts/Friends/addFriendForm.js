import { getUsers, useUsers } from "../Users/userProvider.js";
import { dispatchFriendStateChange, saveFriend } from "./friendProvider.js";

const currentUserId = parseInt(sessionStorage.getItem("activeUser"))
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
        const allUsers = useUsers()
        // console.log("friendUsername value >>", friendUsername.value)

        const friendUserObj = allUsers.find((user) => {
            return friendUsername.value === user.username
        }) 

                
        if (friendUserObj === undefined ) {
            window.alert("Please enter a valid username.")
        } 
        else {
            const friendUserId = friendUserObj.id
              
            const newFriend = {
                userId: currentUserId,
                friendUserId: friendUserId
            }                        
            if (friendUserId === currentUserId){
                window.alert("Doh. Cannot add yourself as a friend. 😂")
            }            
            // if (findFriend(parseInt(friendUserId)) > 0 ){
            //     window.alert("You have already saved this friend.")
            // }
            else{
                saveFriend(newFriend)
                render()      
            }                        
        }
    }
        
    // console.log("save friend button clicked + friend saved to API >>") 

    dispatchFriendStateChange()
})



const render = () => {
    contentTarget.innerHTML = `
        <section id="addFriendForm">
            <input type="text" id="addFriendForm--friendUsername" placeholder="friend username..."></input>                       
            <button class="button__saveFriend" id="saveFriendButton">Save Friend</button>
        </section>
    `    
}


export const addFriendForm = () => {
    render()
}


