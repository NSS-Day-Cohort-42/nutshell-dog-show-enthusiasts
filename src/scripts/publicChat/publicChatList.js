import { getMessages, useMessages } from "./publicChatProvider.js"

const contentTarget = document.querySelector(".messageForm")
const eventHub = document.querySelector(".container")

export const messageList = () => { 
    getMessages()
    .then(() => { 
        const allMessages = useMessages()
        console.log(allArticles)
        render(allMessages) // rendering all articles to put into the DOM 
    })
}

const render = (messageArr) => {
    const allMessagesHtml = messageArr.map (
        (currentmessage) => {
            return articleHTMLConverter(currentmessage)
            }  
        ).join("")
    contentTarget.innerHTML = allMessagesHtml
}