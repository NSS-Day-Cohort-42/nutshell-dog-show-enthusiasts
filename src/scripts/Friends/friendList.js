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
    // console.log("filteredRelationships >>",filteredRelationships)

    const htmlRepresentations = filteredRelationships.map(relationship => {
        const friendObj = allUsers.find(user => user.id === relationship.friendUserId)
        // console.log("friendObj >>",friendObj)
        
        return friendHTMLConverter(relationship,friendObj)
    }).join("")

    // console.log("htmlRepresentations >>",htmlRepresentations)

    if (filteredRelationships.length > 0) {
    contentTarget.innerHTML = `
        <h2>Friends</h2>
            <article id="friendList">
            ${htmlRepresentations}
            </article> 
    `    
    }
    else {
        contentTarget.innerHTML = `
        <h2>Friends</h2>
            <article id="friendList">
            Start adding friends below! 
            </article> 
    `   
    }


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