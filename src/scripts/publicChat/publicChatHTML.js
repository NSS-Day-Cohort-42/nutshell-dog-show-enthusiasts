import { deleteMessages, getMessages, useMessages } from "./publicChatProvider.js";

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("messageDelete--")) { 
        const [prompt, messageId] = clickEvent.target.id.split("--")

        deleteMessages(messageId)
    }
})

eventHub.addEventListener("click", clickEvent => {
    
    if(clickEvent.target.id.includes("editMessage--")) {
        const [prompt, messageId] = clickEvent.target.id.split("--")
        const editMessage = new CustomEvent("editMessageClicked", {
            detail : {
                messageId : parseInt(messageId)
            }
        })
        
        eventHub.dispatchEvent(editMessage)
                
    }
})

// click of chat author link triggers custom event dispatch
export const messagesHTMLConverter = (messageObj, user) => {
    return `
    <section class="message--board">
        <div class="message--content">
            <div class="message__User">Message from: <a href="#" id="addFriendFromChat--friendUserId--${user.id}">${user.username}</a></div> 
            <div class="message__User" style="display: none" >${messageObj.userId}</div> 
            <div class="message__Text">${messageObj.text}</div> 
        </div>

        <div class="message--buttons">
            <button class="button__deleteChatMessage" id='messageDelete--${ messageObj.id }'>Delete</button>
            <button class="button__editChatMessage" id="editMessage--${ messageObj.id }">Edit</button>
        </div>
    </section>
    `
}

// dispatch "chatAuthorClicked"
eventHub.addEventListener("click", clickEvent => {    
    if(clickEvent.target.id.startsWith("addFriendFromChat--")) {
        const [prompt1, prompt2, userId] = clickEvent.target.id.split("--")
        const customEvent = new CustomEvent("chatAuthorClicked", {
            detail : {
                chatAuthorId : userId
            }
        })
        eventHub.dispatchEvent(customEvent)
        // console.log("dispatched `chatAuthorClicked`; chatAuthorId >>", customEvent.detail.chatAuthorId)        
    }
})

