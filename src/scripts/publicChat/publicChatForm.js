import { messageList } from "./publicChatList.js"
import { saveMessage, editMessages, useMessages } from "./publicChatProvider.js"


const contentTarget = document.querySelector(".publicChat--container")
const eventHub = document.querySelector(".container")


eventHub.addEventListener("click", clickEvent => { 
    if (clickEvent.target.id === "create__Message") {
        messageForm()
    }
})

eventHub.addEventListener("editMessageClicked", customEvent => {
    console.log("edit event loaded")
    const allOfTheMessages = useMessages()
    console.log(allOfTheMessages)
    const messageToEdit = customEvent.detail.messageId
    console.log(customEvent.detail)
    const messageObject = allOfTheMessages.find(message => message.id === messageToEdit)
    console.log(messageObject)
    
    const messageText = document.querySelector("#message--Text")
    const currentUser = sessionStorage.getItem("activeUser")
    
    messageText.value = messageObject.text
    currentUser.value = messageObject.currentUser
    id.value = messageID
})



eventHub.addEventListener("keypress", KeyPressEvent =>{
    if(KeyPressEvent.charCode === 13) {
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
            const editedMessage = {
                text: messageText.value,
                timestamp: Date.now(), 
                userId: parseInt(currentUser)
        } 
        
            editMessages(editedMessage)
                
            render()
        }
        } 
        // else { 
        //     window.alert("Write A Message")
        // }
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