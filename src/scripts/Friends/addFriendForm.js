const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".friends--addFriend")

// hear "addFriendClicked" + render addFriendForm()
eventHub.addEventListener("addFriendClicked", event => { 
    addFriendForm()
})

const render = () => {
    contentTarget.innerHTML = `
        <form id="addFriendForm">
            <input type="text" id="addFriendForm--friendUsername" placeholder="Enter friend username..."></input>                       
        </form>

        <button id="saveFriendButton">Save Friend</button>
    `    
}


export const addFriendForm = () => {
    render()
}


