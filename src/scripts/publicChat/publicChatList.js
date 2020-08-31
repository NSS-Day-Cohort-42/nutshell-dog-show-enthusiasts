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
        //now that we have messages, we need to get users to show in the chat
        //called a method to fetch all the users and passed the messages so we can render it in the next promise
        findAuthorUsers(allMessages) 
    })
}
//created a new promise to get the users 
export const findAuthorUsers = (messagesArray) => {
    getUsers()
    .then(() => {
        allUsers = useUsers() 
        //now we have all the messages and all of the users
        //passed both the messages and the users to the render function
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
    const messages = useMessages()
    findAuthorUsers(messages) //called findAuthorUsers instead of render so we could get the users before rendering
})