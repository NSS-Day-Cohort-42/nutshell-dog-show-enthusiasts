import { deleteFriend, useFriends } from "./friendProvider.js";

const currentUserId = parseInt(sessionStorage.getItem("activeUser"))
const eventHub = document.querySelector(".container")


export const friendHTMLConverter = (friendObj) => {
    return `
        <section class="friend__card">
            <div class="friend__name">${friendObj.username}</div>
            <button class="button__deleteFriend" id="deleteFriendButton--friendUserId--${friendObj.id}">Delete Friend</button>
            </section>
            `
        }
        
            // <button class="button__startChat" id="startChatButton--friendUserId--${friendObj.id}">Start Chat</button>


// hear "deleteFriendClicked" + render deleteFriend()
eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("deleteFriendButton--")) {
        const [prompt1, prompt2, friendUserIdTarget] = event.target.id.split("--")

        const relationships = useFriends()
        const relationshipId = relationships.filter(relationship => relationship.userId === currentUserId).find(relationship => relationship.friendUserId === parseInt(friendUserIdTarget)).id

        // console.log("relationshipId >>", relationshipId)

        deleteFriend(relationshipId)
    }
})


