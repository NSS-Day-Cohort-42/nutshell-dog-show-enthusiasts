import { getUsers, useUsers } from "../Users/userProvider.js";
import { getFriends, useFriends } from "../Friends/friendProvider.js";
import { friendHTMLConverter } from "./friendsHTMLConverter.js";

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".friends--list")


const render = () => {
    contentTarget.innerHTML = `
        <form id="friendForm">
            <input type="text" id="noteForm--author" placeholder="enter your name..."></input>                       
            <textarea id="noteForm--comment" placeholder="comments here..."></textarea>
        </form>
    `
    
    saveTarget.innerHTML = `
        <button id="saveNoteButton">Save</button>
    `
}


export const noteForm = () => {
    getCriminals()
    .then (()=> {
        const criminals = useCriminals()
        render(criminals)
    })
}