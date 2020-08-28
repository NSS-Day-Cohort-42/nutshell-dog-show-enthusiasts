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
   
    const allOfTheMessages = useMessages()
    console.log(allOfTheMessages)
    const messageToEdit = customEvent.detail.messageId
    console.log(customEvent.detail)
    const messageObject = allOfTheMessages.find(message => message.id === messageToEdit)
    console.log(messageObject)
    
    // render the create message form again so we can populate the message the user wants to edit
    messageForm()
    // target the message form fields
    const messageText = document.querySelector("#message--Text")
    const messageIdInput = document.querySelector("#messageId")
    // populate the message form with the data of the message the user is editing
    messageText.value = messageObject.text
    messageIdInput.value = messageObject.id
})



eventHub.addEventListener("keypress", KeyPressEvent =>{
    if(KeyPressEvent.charCode === 13) {
       sendMessage()
    }
})

eventHub.addEventListener("click", clickEvent => {
    // first, check if they clicked send message button
    if (clickEvent.target.id === "send__Message") {
        sendMessage()
    }
})

const sendMessage = () => { 
    const messageText = document.querySelector("#message--Text")
    const messageId = document.querySelector("#messageId").value
    const currentUser = sessionStorage.getItem("activeUser")
    // check that the user filled out message field...if not, show an alert
    if (messageText.value !== "") {
        // check if message id exists...if not, create as new message. if it exists, they are editing an existing message
        if (messageId == "") {
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
                userId: parseInt(currentUser),
                id: messageId
            } 
        
            editMessages(editedMessage)
                
            render()
        }
    
    } else { 
        window.alert("Write A Message")
    }
}

const render = () => {
    contentTarget.innerHTML = `
        <input type="text" id ="message--Text" placeholder="What's on your mind?"/> 
        
        <button id="send__Message">Send</button> 
        <input type="hidden" id="messageId" name="messageId">
    `
    } 

export const messageForm = () => { 
    render()
}