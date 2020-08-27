let tasks = []

const eventHub = document.querySelector(".container")

const dispatchStateChange = () => {
    const taskAddedStateChange = new CustomEvent("taskAddedStateChange")
    eventHub.dispatchEvent(taskAddedStateChange)
}

const dispatchTaskDeleted = () => {
    const taskDeletedStateChange = new CustomEvent("taskDeletedStateChange")
    eventHub.dispatchEvent(taskDeletedStateChange)
}

export const useTasks = () => {
    return tasks.slice()
}

export const getTasks = () => {
    return fetch("http://localhost:8088/tasks")
        .then(response => response.json())
        .then(data => tasks = data)
}

export const saveTask = (newTask) => {
    return fetch("http://localhost:8088/tasks", {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(newTask)
    })
    .then(getTasks)
    .then(dispatchStateChange)
}

export const deleteTask = (taskId) => {
    return fetch(`http://localhost:8088/tasks/${taskId}`, {
        method : "DELETE"
    })
    .then(getTasks)
    .then(dispatchTaskDeleted)
}