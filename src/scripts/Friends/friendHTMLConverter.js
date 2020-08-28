import { deleteFriend } from "./friendProvider.js";

const eventHub = document.querySelector(".container")


export const friendHTMLConverter = (friendObj) => {
    return `
        <section class="friend__card">
            <h3 class="friend__name">${friendObj.username}</h3>
            </section>
            `
        }
        
            // <button class="button__deleteFriend" id="deleteFriendButton--relationshipId--${relationshipObj.id}">Delete Friend</button>
            // <button class="button__startChat" id="startChatButton--friendUserId--${friendObj.id}">Start Chat</button>


// hear "deleteFriendClicked" + render deleteFriend()
eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("deleteFriendButton")) {
        const [prompt1, prompt2, relationshipId] = event.target.id.split("--")
        console.log("relationshipId >>", relationshipId)
        // deleteFriend(relationshipId)
    }
})