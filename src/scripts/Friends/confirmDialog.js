import { saveFriend, useFriends } from "./friendProvider.js"; 
import { useUsers } from "../Users/userProvider.js";

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".friend__confirmDialogBox")


// hear "chatAuthorClicked"
// display dialog box for user to confirm Y/N
eventHub.addEventListener("chatAuthorClicked", event => {   
    // console.log("hear chatAuthorClicked event") 
    
    const allUsers = useUsers()
    
    const authorUserId = parseInt(event.detail.chatAuthorId)
    console.log("authorUserId >>",authorUserId) 

    const friendObj = allUsers.find(user => user.id === authorUserId)
    console.log("friendObj >>",friendObj) 
    
    const htmlRepresentation = `
        <section>Do you want, do you really really want to add ${friendObj.username}? <br>Pleaes confirm.</section>
        <button class="button__confirmFriend" id="confirmYesButton--authorUserId--${friendObj.id}">Yes</button>
        <button class="button__confirmFriend" id="confirmNoButton">No</button>
    `

    contentTarget.innerHTML = htmlRepresentation

    contentTarget.showModal()
})

 
// hear click event `confirmedYes`
// render saveFriend() 
eventHub.addEventListener("click", event => {  
    if (event.target.id.startsWith("confirmYesButton--")) {
        const [prompt1, prompt2, authorUserId] = event.target.id.split("--")
        const friendUserId = parseInt(authorUserId)
        
        const currentUserId = parseInt(sessionStorage.getItem("activeUser"))
        
        const newFriend = {
            userId: currentUserId,
            friendUserId: friendUserId
        }  
        
        const allRelationships = useFriends()
        const filteredRelationships = allRelationships.filter(relationship => relationship.userId === currentUserId)
        const matchingRelationshipObj =  filteredRelationships.filter(relationship => relationship.friendUserId === friendUserId)
        
        if (friendUserId === currentUserId) {
            window.alert("Doh. Cannot add yourself as a friend. 😂")
        }
        else if (matchingRelationshipObj.length > 0 ){
            window.alert(`You are already friends!`)
        }
        else {
            saveFriend(newFriend)
        }
    }
})


// hear click event `confirmedNo`
// render close dialog box
// note: event.target.parentNode.close() method only works if the button is a direct child of the dialog
eventHub.addEventListener("click", event => {  
    if (event.target.id === "confirmNoButton") {
        console.log("heard `confirmedNo` click event")
        event.target.parentNode.close()
    }
})