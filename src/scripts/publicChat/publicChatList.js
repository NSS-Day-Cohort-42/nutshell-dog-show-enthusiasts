import { getMessages, useMessages } from "./publicChatProvider.js"
import { getUsers, useUsers } from "../Users/userProvider.js"
import { messagesHTMLConverter } from "./publicChatHTML.js"

let allUsers = []

const contentTarget = document.querySelector(".chatForm")
const eventHub = document.querySelector(".container")

export const messageList = () => { 
    getMessages()
    .then(() => { 
        const allMessages = useMessages()
        findAuthorUsers(allMessages) // rendering all articles to put into the DOM 
    })
}

const findAuthorUsers = (messagesArray) => {
    getUsers()
    .then(() => {
        allUsers = useUsers()
        render(messagesArray, allUsers)
    })
}

const render = (messageArr, usersArr) => {
    const messagesSorted = messageArr.sort((a, b) => {
        return b.timestamp - a.timestamp
    })
    
    const allMessagesHtml = messagesSorted.map (
        (currentmessage) => {
            // find the user that wrote the message
            const authorUserObject = usersArr.find(user => user.id === currentmessage.userId)
            // pass the user object to the HTML convertor method so we can pull out the username
            console.log("author: ", authorUserObject)
            return messagesHTMLConverter(currentmessage, authorUserObject)
            }  
        ).join("")
    contentTarget.innerHTML = allMessagesHtml
}

eventHub.addEventListener("messageStateChanged", CustomEvent => {
    const deletedMessages = useMessages()
    render(deletedMessages)
})