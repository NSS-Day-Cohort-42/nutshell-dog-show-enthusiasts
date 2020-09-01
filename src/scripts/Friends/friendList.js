import { getUsers, useUsers } from "../Users/userProvider.js";
import { getFriends, useFriends } from "../Friends/friendProvider.js";
import { friendHTMLConverter } from "./friendHTMLConverter.js";

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".friends--list")


// filter all relationships to return only the ones for current user
// convert the relationships to friend username with .map()
// pass the relationshipObj and matching friend user obj through the friendHTMLConverter component
const render = (allUsers, allRelationships) => {
    
    const currentUserId = parseInt(sessionStorage.getItem("activeUser"))
    const filteredRelationships = allRelationships.filter(relationship => relationship.userId === currentUserId)
    // console.log("filteredRelationships",filteredRelationships)

    let htmlRepresentations = "Start adding friends below!"

    if (filteredRelationships.length > 0) {
        htmlRepresentations = filteredRelationships.map(relationship => {
            const friendObj = allUsers.find(user => user.id === relationship.friendUserId)
            // console.log("friendObj",friendObj)
            
            return friendHTMLConverter(relationship,friendObj)
        }).join("")
    }

    contentTarget.innerHTML = `
        <h2>Friends</h2>
            <article id="friendList">
            ${htmlRepresentations}
            </article> 
    `   
}


export const friendList = () => {
    getUsers()
    .then(getFriends)
    .then(() => {
        const allUsers = useUsers()
        const allRelationships = useFriends()
        render(allUsers, allRelationships)
    })
}


eventHub.addEventListener("friendStateChanged", event => {
    friendList()
})