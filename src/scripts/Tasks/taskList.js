import {getUsers, useUsers} from "../Users/userProvider.js"
import {getTasks, useTasks, deleteTask} from "./taskProvider.js"
import {taskHTMLCon} from "./taskHTMLConverter.js"

let tasks = []
let users = []

const contentTarget = document.querySelector(".taskList")
const eventHub = document.querySelector(".container")

export const TaskList = () => {
    getTasks()
        .then(getUsers)
        .then (() => {
            users = useUsers()
            tasks = useTasks()
            render()
        })
}

// const render = () => {
//     const activeUser = sessionStorage.getItem("activeUser")
    
//     contentTarget.innerHTML = tasks.map(
//         task => {
            
//             const userTask = users.find(user => user.id === tasks.userId)
            
//             const html = taskHTMLCon(task)
            
//             return html
//         }
//     ).join("")
// }

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("deleteTask")) {
        const [pre, id] = clickEvent.target.id.split("--")

        deleteTask(id)
            .then(TaskList)

            
    }
})

eventHub.addEventListener("taskAddedStateChange", () => {
    tasks = useTasks()
    render()
})


//this should update the completed boolean in the database and a render condition should be that
//if completed === true then it does not render
eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "taskCompletedChecked") {
        const hideTask = document.getElementById("task")
        hideTask.remove()
} 
})

const render = () => {
    const activeUser = sessionStorage.getItem("activeUser")
    const html = tasks
        .filter(task => task.userId === parseInt(activeUser))
        .map(task => taskHTMLCon(task)).join("")
    contentTarget.innerHTML = `
        <h2>Tasks</h2>
        ${html}

    `
    
}