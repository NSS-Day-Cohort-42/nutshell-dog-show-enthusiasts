import { getUsers, useUsers } from "../Users/userProvider.js";
import { getFriends, useFriends } from "../Friends/friendProvider.js";
import { friendHTMLConverter } from "./friendHTMLConverter.js";

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".friends--list")
const currentUser = parseInt(sessionStorage.getItem("activeUser"))



const render = (allUsers, allRelationships) => {
    const relationshipsForThisUser = allRelationships.filter(relationship => relationship.userId === currentUser)
    
    const friends = relationshipsForThisUser.map(relationship => {
        const matchingUserObj = allUsers.find(user => user.id === relationship.friendUserId)
        return matchingUserObj
    })

    // console.log("console log friends >>", friends)

    let htmlRepresentations = ""
    friends.forEach(friend => {
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