import { Nutshell } from "../Nutshell.js";

const eventHub = document.querySelector(".container")

//defining the custom event that is being dispatched in login / Reg Form only when the user is being authenticated. 
eventHub.addEventListener("userAuthenticated", customEvent => {
    Nutshell() //loads the homepage of the app when user is logged in successfully
})
