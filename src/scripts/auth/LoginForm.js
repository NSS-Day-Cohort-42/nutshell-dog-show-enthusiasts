const contentTarget = document.querySelector(".auth--login")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("userAuthenticated", e => {
    contentTarget.innerHTML = ""
})

eventHub.addEventListener("click", e => {
    if (e.target.id === "login--button") {
        const username = document.querySelector("#login--username").value
        const password = document.querySelector("#login--password").value


        return fetch(`http://localhost:8088/users?username=${username}`)
            .then(response => response.json())
            .then(users => {
                if (users.length > 0) {
                    const user = users[0]

                    if (user.password === password) {
                        sessionStorage.setItem("activeUser", user.id)
                        eventHub.dispatchEvent(new CustomEvent("userAuthenticated")) //this creates the new custom event and dispatches it, this event isn't defined. See Auth.js for event listener that defines it. 
                    }
                }
            })
    }
})


const render = () => {
    contentTarget.innerHTML += `
        <section class="login">
            <input id="login--username" type="text" placeholder="Username">  
            <input id="login--password" type="password" placeholder="Password">

            <button id="login--button">Log In</button>
        </section>
    `
}

export const LoginForm = () => {
    render()
}