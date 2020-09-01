//Mark S
//After the createTask button is clicked the Task Creation form is rendered
//Event listeners for saving and editing objects that are saved to the database and then
//rendered to the DOM


import { saveTask, updateTask } from "./taskProvider.js"
import {getTasks, useTasks} from "./taskProvider.js"



const eventHub = document.querySelector(".container")

const contentTarget = document.querySelector(".tasksCreate")

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
            <input type="hidden" name="taskId" id="taskId" >
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
        const id = document.querySelector("#taskId")
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
                    id : parseInt(id.value)

                }
                
                updateTask(editedTask)
                
                render()
            }
        } else {
            window.alert("Please fill in all the fields, noob.")
        }
    }
})

eventHub.addEventListener("editTaskClicked", editEvent => {
        //render to load task form to place values to edit
        render()
        const taskIdToEdit = editEvent.detail.taskId
        const alltasks = useTasks()
        const findTask = alltasks.find(task => task.id === taskIdToEdit)
        
        const id = document.getElementById("taskId")
        const taskName = document.querySelector("#taskName")
        const taskDescription = document.querySelector("#taskDescription")
        const taskExpectedCompletion = document.querySelector("#taskExpectedCompletionDate")
        
        id.value = findTask.id
        taskName.value = findTask.taskTitle
        taskDescription.value = findTask.description
        taskExpectedCompletion.value = findTask.taskDate
       
        
        
        
    }
)

        
        
        


        


