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
    <div class="message__User">Message from: <a href="#" id="addFriendFromChat--friendUserId--${messageObj.userId}">${user.username}</a></div> 
    <div class="message__User" style="display: none" >${messageObj.userId}</div> 
    <div class="message__Text">${messageObj.text}</div> 
    
    <button id='messageDelete--${ messageObj.id }'>Delete</button>
    <button id="editMessage--${ messageObj.id }">Edit</button>
    </section>
    `
}

// dispatch "addFriendFromChatClicked"
eventHub.addEventListener("click", clickEvent => {    
    if(clickEvent.target.id.startsWith("addFriendFromChat--")) {
        const [prompt1, prompt2, chatAuthorId] = clickEvent.target.id.split("--")
        const customEvent = new CustomEvent("addFriendFromChatClicked", {
            detail : {
                friendUserId : parseInt(chatAuthorId)
            }
        })
        eventHub.dispatchEvent(customEvent)
        // console.log("dispatched addFriendFromChatClicked")        
    }
})

