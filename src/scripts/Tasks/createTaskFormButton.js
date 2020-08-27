const eventHub = document.querySelector(".container")

const contentTarget = document.querySelector(".tasks-createForm")

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "taskCreateForm") {
        const taskFormEvent = new CustomEvent("taskFormClicked")
        eventHub.dispatchEvent(taskFormEvent)
    }
})

export const TaskFormCreateButton = () => {
    contentTarget.innerHTML = "<button id='taskCreateForm'>Create New Task</button>"
}