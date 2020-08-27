


const contentTarget = document.querySelector(".chatForm")
const eventHub = document.querySelector(".container")


eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "send__Message") {
        console.log("Clicked saved Message")
        const messageText = document.querySelector("#message--Text")
        const currentUser = sessionStorage.getItem("activeUser")
        
        if(messageText.value !== "") {

            const newMessage = {
                // Key/value pairs here
                text: messageText.value,
                timestamp: Date.now(), 
                userId: parseInt(currentUser)             
            }
            saveArticle(newArticle)
            articleList()
        } else { 
            window.alert("Fill in all the fields!!!")
        }
    }
})

const render = () => {
    contentTarget.innerHTML = `
        <input type="text" id ="message--Text" placeholder="Article Title" autofocus/> 
        
        <button id="send__Message">Send</button> 
        <input type="hidden" id="messageId" name="messageId" value="">
    `
    } 

export const articleForm = () => { 
    render()
}