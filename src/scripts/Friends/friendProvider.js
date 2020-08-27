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

