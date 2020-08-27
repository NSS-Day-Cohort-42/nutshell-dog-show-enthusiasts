import { messageList } from "./publicChatList.js"
import { saveMessage } from "./publicChatProvider.js"


const contentTarget = document.querySelector(".publicChat--container")
const eventHub = document.querySelector(".container")


eventHub.addEventListener("click", clickEvent => { 
    if (clickEvent.target.id === "create__Message") {
        messageForm()
    }
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "send__Message") {

        const messageText = document.querySelector("#message--Text")
        const currentUser = sessionStorage.getItem("activeUser")
        
        if(messageText.value !== "") {

            const newMessage = {
                // Key/value pairs here
                text: messageText.value,
                timestamp: Date.now(), 
                userId: parseInt(currentUser)             
            }
            saveMessage(newMessage)
            messageList()
        } else { 
            window.alert("Write A Message")
        }
    }
})

const render = () => {
    contentTarget.innerHTML = `
        <input type="text" id ="message--Text" placeholder="What's on your mind?"/> 
        
        <button id="send__Message">Send</button> 
        <input type="hidden" id="messageId" name="messageId" value="">
    `
    } 

export const messageForm = () => { 
    render()
}