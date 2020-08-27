import {getUsers, useUsers} from "../Users/userProvider.js"
import {getTasks, useTasks, deleteTask, updateTask} from "./taskProvider.js"
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
//working but adds object with id and completed
// eventHub.addEventListener("click", clickEvent => {
//     if(clickEvent.target.id.startsWith("taskCompletedChecked")) {
//         const [pre, id] = clickEvent.target.id.split("--")
//         const updated = tasks.filter(task => task.id === parseInt(id)).map(task => {
//             return {
//                 taskTitle : task.taskTitle,
//                 description : task.description,
//                 taskDate : task.taskDate,
//                 userId : task.userId,
//                 id : task.id,
//                 completed : true
//             }
//         })
//         const updatedObj = updated[0]
        
//         updateTask(updatedObj)
        
        
//     } 
        
        
        
        
        
        
// })

const render = () => {
    
    const activeUser = sessionStorage.getItem("activeUser")
    let toDom = ""
    const html = tasks
        .filter(task => task.userId === parseInt(activeUser) && task.completed === false)
        .forEach(task => {
            toDom += taskHTMLCon(task)
        })
        
    contentTarget.innerHTML = `
        <h2>Tasks</h2>
        ${toDom}

    `
    
}



eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("taskCompletedChecked")) {
        const [pre, id] = clickEvent.target.id.split("--")
        console.log(id)
        const updated = tasks.find(task => task.id === parseInt(id))
        console.log(updated)
            const updatedObj = {
                taskTitle : updated.taskTitle,
                description : updated.description,
                taskDate : updated.taskDate,
                userId : updated.userId,
                id : updated.id,
                completed : true
            }
        console.log(updatedObj)
            
        
        
        
        
        
        updateTask(updatedObj)
        
    } 
        
        
       
        
        
        
})

eventHub.addEventListener("taskUpdatedStateChange", () => {
    tasks = useTasks()
    render()
})