import { saveTask } from "./taskProvider.js"



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

        if(taskTitle.value !== "" && taskDescription.value !== "" && taskExpectedCompletion.value !== "") {

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
            window.alert("Please fill in all the fields, noob.")
        }
    }
})

