import { saveTask } from "./taskProvider.js"



const eventHub = document.querySelector(".container")

const contentTarget = document.querySelector(".tasks--container")

eventHub.addEventListener("taskFormClicked", ()=> {
    TaskForm()
})

const render = () => {
    contentTarget.innerHTML = `
        <div name="taskCreationForm id="taskCreationForm">
            <input type="text" id="taskName" />
            <input type="text" id="taskDescription" />
            <input type="date" id="taskExpectedCompletionDate">
            <button id="saveTask">Save Task</button>
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

        const newTask = {
            taskTitle : taskTitle.value,
            description : taskDescription.value,
            taskDate : taskExpectedCompletion.value,
            completed : false,
        }
        saveTask(newTask)
    }
})

