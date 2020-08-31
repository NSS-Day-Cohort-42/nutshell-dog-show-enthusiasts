import { saveFriend, useFriends } from "./friendProvider.js"; 
import { useUsers } from "../Users/userProvider.js";

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".friend__confirmDialogBox")


// hear "chatAuthorClicked"
// display dialog box for user to confirm Y/N
eventHub.addEventListener("chatAuthorClicked", event => {   
    console.log("hear chatAuthorClicked event") 
    const friendUserId = event.detail.chatAuthorId 

    const allUsers = useUsers()
    const friendObj = allUsers.filter(user => {return user.id === friendUserId})
    
    const htmlRepresentation = (friendUserId) => {

            return `
                <section>So you really want to add ${friendObj.username}? Pleaes confirm.</section>
                <button class="button__confirmFriend" id="confirmYesButton--friendUserId--${friendUserId}">Yes</button>
                <button class="button__confirmFriend" id="confirmNoButton">No</button>
            `
        }

        contentTarget.innerHTML = htmlRepresentation

        console.log("friendObj",friendObj)
        // show dialog box
        contentTarget.showModal()
})

 
// hear click event `confirmedYes` (note that `confirmedNo` is irrelevant)
// display dialog using .showModal() 
// render saveFriend() 
eventHub.addEventListener("click", event => {  
    if (event.target.id.startsWith("confirmYesButton--")) {
        const [prompt1, prompt2, friendUserId] = event.target.id.split("--")
        
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


// only works if button is direct child of dialog
// or list and target .close to dialog box
// event.target.parentNode.close()

