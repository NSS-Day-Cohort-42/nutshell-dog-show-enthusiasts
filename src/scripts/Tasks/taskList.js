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

const render = () => {
    contentTarget.innerHTML = tasks.map(
        task => {
            
            const userTask = users.find(user => user.id === tasks.userId)
            console.log(userTask)
            const html = taskHTMLCon(task, userTask)
            
            return html
        }
    ).join("")
}

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