//Mark S
//TaskList() renders task that belong to the current user and where the task completed box has not been checked
//For tasks that have been marked completed, an event listener grabs the task id and updates the value of the "completed" key 
//to true so that it is not rendered but is still saved in the database.
//Event listener for delete tasks removes those task from the DOM and database


import {getUsers, useUsers} from "../Users/userProvider.js"
import {getTasks, useTasks, deleteTask, updateTask} from "./taskProvider.js"
import {taskHTMLCon} from "./taskHTMLConverter.js"

let tasks = []
//the users isn't necessary at this stage for the task module, because the user.id is coming
//from the sessionstorage
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


//render filters based on active user and if the task completed is false, if true it has been
//marked completed and will not render
const render = () => {
    const activeUser = sessionStorage.getItem("activeUser")
    let toDom = ""
    const html = tasks
        .filter(task => task.userId === parseInt(activeUser) && task.completed === false)
        .forEach(task => {
            toDom += taskHTMLCon(task)
        })
        
    contentTarget.innerHTML = `
        
        ${toDom}

    `
    
}

//listens for taskCompletedChecked to be click, when clicked, it grabs the id,
//find the correct id, the updates the object with the original info except for the 
//completed key which is changed to true and will not be rendered
eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("taskCompletedChecked")) {
        const [pre, id] = clickEvent.target.id.split("--")
        
        const updated = tasks.find(task => task.id === parseInt(id))
        
            const updatedObj = {
                taskTitle : updated.taskTitle,
                description : updated.description,
                taskDate : updated.taskDate,
                userId : updated.userId,
                id : updated.id,
                completed : true
            }
        
            
        updateTask(updatedObj)
        
    } 
        
        
       
        
        
        
})

eventHub.addEventListener("taskUpdatedStateChange", () => {
    tasks = useTasks()
    render()
})

