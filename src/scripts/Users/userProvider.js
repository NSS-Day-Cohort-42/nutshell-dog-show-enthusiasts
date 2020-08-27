let users = []

export const getUsers = () => {
    return fetch ("http://localhost:8088/users") 
        .then (response => response.json())
        .then (usersArray => {
            users = usersArray
        })
}

export const useUsers = () => {
    return users.slice()
}