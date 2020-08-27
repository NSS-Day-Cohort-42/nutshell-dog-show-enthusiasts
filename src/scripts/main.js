import { LoginForm } from "./auth/LoginForm.js"
import { RegisterForm } from "./auth/RegisterForm.js"
import { Nutshell } from "./Nutshell.js"
import "./auth/Auth.js"

// console.log(sessionStorage.getItem("activeUser")) --- This was equal to null
// if active user is not successfully logged in render login / reg forms. If authenticated load the app.
if (sessionStorage.getItem("activeUser") !== null) {
    Nutshell()
} else {
    LoginForm()
    RegisterForm()
}

/*
    1. Check if the user is authenticated by looking in session storage for `activeUser`
    2. If so, render the Nutshell component
    3. If not, render the login and registration forms
    4. Also, if the user authenticates, and the login form is initially shown
        ensure that the Nutshell component gets rendered
*/