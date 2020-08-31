import { saveFriend, useFriends } from "./friendProvider.js"; 
import { useUsers } from "../Users/userProvider.js";

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".friend__confirmDialogBox")


// hear "addFriendFromChatClicked"
// display dialog box for user to confirm Y/N
eventHub.addEventListener("addFriendFromChatClicked", event => {
    if (event.target.id.startsWith("addFriendFromChat--")) {
        // console.log("`addFriendFromChat` was clicked >> ")
        const [prompt1, prompt2, friendUserId] = event.target.id.split("--")
        allusers = useUsers()
        
        const htmlRepresentation = (friendUserId) => {
            friendObj = allUsers.filter(user => {return user.id === friendUserId})

            return `
                <section>
                    So you really want to add this friend, <b>${friendObj.username}</b>? Pleaes confirm.
                    <button class="button__confirmFriend" id="confirmFriendYesButton--friendUserId--${friendUserId}">Yes</button>
                    <button class="button__confirmFriend" id="confirmFriendNoButton">No</button>
                </section>
            `
            }

        contentTarget.innerHTML = htmlRepresentation

        // show dialog box
        contentTarget.showModal()
    }
})

 
// hear click event "confirmedFriendYes"
// (click event for confirmed "no" is irrelevant)
// display dialog using .showModal() 
// render saveFriend() 
eventHub.addEventListener("addFriendFromChatClicked", event => {
       
        const currentUserId = parseInt(sessionStorage.getItem("activeUser"))
        const friendUserId = event.detail.friendUserId
        
        const newFriend = {
            userId: currentUserId,
            friendUserId: friendUserId
        }  

        const allRelationships = useFriends()
        const filteredRelationships = allRelationships.filter(relationship => relationship.userId === currentUserId)
        const matchingRelationshipObj =  filteredRelationships.filter(relationship => relationship.friendUserId === friendUserId)

        if (matchingRelationshipObj.length > 0 ){
            window.alert("You are already friends!")
        }
        else {
            saveFriend(newFriend)
        }
    })


// export addFriendDialog() to add to friendList.js innerHTML
export const confirmFriendDialog = () => {

    return `
        <dialog class="friend__confirmDialogBox"></dialog>
    `
}

