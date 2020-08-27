let users = []

export const useUsers = () => {
    return users.slice()
}

export const getUsers = () => {
    return fetch("http://localhost:8088/users?_expand=friend")
        .then(response => response.json())
        .then(data => users = data)
}

