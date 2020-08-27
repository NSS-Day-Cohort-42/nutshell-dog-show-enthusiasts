let publicChats = []

const eventHub = document.querySelector(".container")


const dispatchStateChangeEvent = () => {
    const messageStateChangedEvent = new CustomEvent("messageStateChanged")

    eventHub.dispatchEvent(messageStateChangedEvent)
}

export const useMessages = () => { 
    return publicChats.slice()
}

export const getMessages = () => {
    return fetch('http://localhost:8088/messages')
        .then(response => response.json())
        .then(parsedMessages => {
            publicChats = parsedMessages
        })
}

export const saveMessage = (message) => {
    return fetch('http://localhost:8088/messages', {
        method: "POST", 
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(message)
    })
    .then(getMessages)
    .then(dispatchStateChangeEvent) 
}

export const deleteMessages = (messageId) => {
    return fetch(`http://localhost:8088/messages/${ messageId }`, {
        method: "DELETE"
    })
        .then(getMessages)
        .then(dispatchStateChangeEvent)
}