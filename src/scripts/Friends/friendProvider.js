const eventHub = document.querySelector(".container")

let friends = []

export const getFriends = () => {
    return fetch ("http://localhost:8088/friends") 
        .then (response => response.json())
        .then (friendsArray => {
            friends = friendsArray
        })
}

export const useFriends = () => {
    return friends.slice()
}


// dispatch "friendStateChanged"
export const dispatchFriendStateChange = () => {
    const customEvent = new CustomEvent ("friendStateChanged")
    eventHub.dispatchEvent(customEvent)    
}


// saveFriend
export const saveFriend = (friend) => {
    return fetch (`http://localhost:8088/friends`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(friend)
    })
        .then(getFriends)
        .then(dispatchFriendStateChange)
} 


// deleteFriend
export const deleteFriend = (relationshipId) => {

    return fetch (`http://localhost:8088/friends/${relationshipId}`, {
        method: "DELETE",
    })
        .then(getFriends)
        .then(dispatchFriendStateChange)
} 