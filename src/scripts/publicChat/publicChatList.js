import { getMessages, useMessages } from "./publicChatProvider.js"
import { messagesHTMLConverter } from "./publicChatHTML.js"


const contentTarget = document.querySelector(".chatForm")
const eventHub = document.querySelector(".container")

export const messageList = () => { 
    getMessages()
    .then(() => { 
        const allMessages = useMessages()
        render(allMessages) // rendering all articles to put into the DOM 
    })
}

const render = (messageArr) => {
    const messagesSorted = messageArr.sort((a, b) => {
        return b.timestamp - a.timestamp
    })
    
    const allMessagesHtml = messagesSorted.map (
        (currentmessage) => {
            return messagesHTMLConverter(currentmessage)
            }  
        ).join("")
    contentTarget.innerHTML = allMessagesHtml
}

eventHub.addEventListener("messageStateChanged", CustomEvent => {
    const deletedMessages = useMessages()
    render(deletedMessages)
})