import { deleteFriend, useFriends } from "./friendProvider.js";

const currentUserId = parseInt(sessionStorage.getItem("activeUser"))
const eventHub = document.querySelector(".container")


export const friendHTMLConverter = (relationshipObj,friendObj) => {
    return `
        <section class="friend__card">
            <div class="friend__name">${friendObj.username}</div>
            <button class="button__deleteFriend" id="deleteFriendButton--relationshipId--${relationshipObj.id}">Delete Friend</button>
            </section>
            `
            // <button class="button__startChat" id="startChatButton--friendUserId--${relationshipObj.friendUserId}">Start Chat</button>
        }        


// hear "deleteFriendClicked"
// get relationshipId by splitting id by delimiter
// render deleteFriend()
eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("deleteFriendButton--")) {
        const [prompt1, prompt2, relationshipId] = event.target.id.split("--")
        deleteFriend(relationshipId)
    }
})