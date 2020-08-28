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
                taskId : parseInt(messageId)
            }
        })
        
        eventHub.dispatchEvent(editMessage)
                
    }
})


export const messagesHTMLConverter = (messageObj) => {
    return `
    <section class="message--board">
        <div class="message__User">${ messageObj.userId }</div> 
        <div class="message__Text">${messageObj.text}</div> 
    
        <button id='messageDelete--${ messageObj.id }'>Delete</button>
        <button id="editMessage--${ messageObj.id }">Edit</button>
    </section>
    `
}