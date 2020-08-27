const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".friends--addFriend")


const render = () => {
    contentTarget.innerHTML = `
        <form id="addFriendForm">
            <input type="text" id="addFriendForm--friendUsername" placeholder="friend's username..."></input>                       
        </form>
        
        <button id="saveFriendButton">Save Friend</button>
    `    
}


export const addFriendForm = () => {
    render()
    // getCriminals()
    // .then (()=> {
    //     const criminals = useCriminals()
    //     render(criminals)
    // })
}


// hear "addFriendButton" + render addFriendForm()
eventHub.addEventListener ("addFriendButton", addFriendForm)