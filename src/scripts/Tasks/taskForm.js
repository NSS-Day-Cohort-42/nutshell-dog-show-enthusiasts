import { saveTask, updateTask } from "./taskProvider.js"
import {getTasks, useTasks} from "./taskProvider.js"



const eventHub = document.querySelector(".container")

const contentTarget = document.querySelector(".tasks--container")

eventHub.addEventListener("taskFormClicked", ()=> {
    TaskForm()
})

const render = () => {
    contentTarget.innerHTML = `
        <div name="taskCreationForm id="taskCreationForm">
            <input type="text" id="taskName" placeholder="Task Name"/>
            <input type="text" id="taskDescription" placeholder="Description" />
            <label for="taskCompletion">Expected Completion :</label>
            <input type="date" id="taskExpectedCompletionDate" name="taskCompletion">
            <button id="saveTask">Save Task</button>
            <input type="hidden" name="taskId" id="taskId">
        </div>
    `
}

export const TaskForm = () => {
    render()

}

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "saveTask") {
        
        const taskTitle = document.querySelector("#taskName")
        const taskDescription = document.querySelector("#taskDescription")
        const taskExpectedCompletion = document.querySelector("#taskExpectedCompletionDate")
        const currentUser = sessionStorage.getItem("activeUser")
        const noteId = document.querySelector("#noteId")
        if(taskTitle.value !== "" && taskDescription.value !== "" && taskExpectedCompletion.value !== "") {
            if(id.value === "") {
                const newTask = {
                    taskTitle : taskTitle.value,
                    description : taskDescription.value,
                    taskDate : taskExpectedCompletion.value,
                    completed : false,
                    userId : parseInt(currentUser)
                }
                saveTask(newTask)
                render()
            } else {
                const editedTask = {
                    taskTitle : taskTitle.value,
                    description : taskDescription.value,
                    taskDate : taskExpectedCompletion.value,
                    completed : false,
                    userId : parseInt(currentUser),
                    id : parseInt(noteId.value)

                }
                updateTask(editedTask)
            }
        } else {
            window.alert("Please fill in all the fields, noob.")
        }
    }
})

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("editTask")) {
        
        const [pre, taskid] = clickEvent.target.id.split("--")
        console.log(taskid)
        const tasks = useTasks()
        console.log(tasks)
        const edited = tasks.find(task => task.id === parseInt(taskid))
        console.log(edited)

        const id = document.querySelector("#taskId")
        
        const taskTitle = document.querySelector(".task__title")
        console.log(taskTitle.value)
        const taskDescription = document.querySelector("#taskDescription")
        const taskExpectedCompletion = document.querySelector("#taskExpectedCompletionDate")

        id.value = edited.id
        taskTitle.value = edited.taskTitle
        taskDescription.value = edited.description
        taskExpectedCompletion.value = edited.taskDate
    }
})

