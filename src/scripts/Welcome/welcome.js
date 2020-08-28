//Mark S
//Welcome message by username of current user, renders after log in


import {getUsers, useUsers} from "../Users/userProvider.js"

let users = []

const contentTarget = document.querySelector(".welcome__message")

export const WelcomeMessage = () => {
    getUsers()
        .then(() => {
            users = useUsers()
            render()
        })
}

const render = () => {
    const activeUser = sessionStorage.getItem("activeUser")
    const html = users.find(user => user.id === parseInt(activeUser))

    contentTarget.innerHTML = `
        <h2>Welcome, ${html.username}</h2>
    `
    
   
    
}