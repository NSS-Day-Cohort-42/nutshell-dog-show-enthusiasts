//Mark S. This converts objects with HTML tags to be passed to the DOM
//Also, event listener is waiting for click-edit event to dispatch detail containing the 
//Task id to Taskform.js where object is found, values rendered, edited, and saved 


const eventHub = document.querySelector(".container")

export const taskHTMLCon = (task) => {
    return `
        <div class="card__task" id="taskCards">
            <input type="checkbox" id="taskCompletedChecked--${task.id}" name="taskBox">
            <label for="taskBox">Completed</label>
            <div class="task__title">Task Name :${task.taskTitle}</div>
            <div class="task__content">Description :${task.description}</div>
            <div class="task__completionDate">Expected Completion: ${task.taskDate}</div>
            <button id="deleteTask--${task.id}">Delete</button>
            <button id="editTask--${task.id}">Edit</button>
        </div>
    `
}

eventHub.addEventListener("click", clickEvent => {
    
    if(clickEvent.target.id.includes("editTask--")) {
        const idForTaskEdit = clickEvent.target.id.split("--")[1]
        const editEvent = new CustomEvent("editTaskClicked", {
            detail : {
                taskId : parseInt(idForTaskEdit)
            }
        })
        
        eventHub.dispatchEvent(editEvent)
        
        
    }
})




