const eventHub = document.querySelector(".container")

export const taskHTMLCon = (task) => {
    return `
        <div class="card__task" id="task">
            <input type="checkbox" id="taskCompletedChecked" name="taskBox">
            <label for="taskBox">Completed</label>
            <div class="task__title">${task.taskTitle}</div>
            <div class="task__content">${task.description}</div>
            <div class="task__completionDate">${task.taskDate}</div>
            <button id="deleteTask--${task.id}">Delete</button>
        </div>
    `
}


