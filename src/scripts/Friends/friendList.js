import { getUsers, useUsers } from "../Users/userProvider.js";
import { getFriends, useFriends } from "../Friends/friendProvider.js";
import { friendHTMLConverter } from "./friendHTMLConverter.js";

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".friends--list")


const render = (allUsers, allRelationships) => {
    const currentUserId = parseInt(sessionStorage.getItem("activeUser"))
    const relationshipsForThisUser = allRelationships.filter(relationship => relationship.userId === currentUserId)
    
    const friendsArray = relationshipsForThisUser.map(relationship => {
        const matchingUserObj = allUsers.find(user => user.id === relationship.friendUserId)
        return matchingUserObj
    })

    console.log("console log friendsArray >>", friendsArray)

    let htmlRepresentations = ""
    friendsArray.forEach(friend => {
        htmlRepresentations += friendHTMLConverter(friend)
    })

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