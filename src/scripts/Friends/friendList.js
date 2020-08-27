import { getUsers, useUsers } from "../Users/userProvider.js";
import { getFriends, useFriends } from "../Friends/friendProvider.js";
import { friendHTMLConverter } from "./friendHTMLConverter.js";

// const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".friends--list")

// **NOTE** userId var needs to be dynamically defined based on username entered at sign in **NOTE**
const signedInUserId = 1

const render = (users, allRelationships) => {
    const htmlRepresentations = users.map(user => {
        const relationshipsForThisUser = allRelationships.filter(relationship => relationship.userId === signedInUserId)    //returns array of all friend objects for this userId
        const friends = relationshipsForThisUser.map(friendObj => {                                                 //convert 
            const matchingUserObj = users.find(user => user.userId === friendObj.friendUserId)
            return matchingUserObj
        })
        return friendHTMLConverter(relationshipsForThisUser)
    }).join("")
    

    contentTarget.innerHTML = `
        <h2>Friends</h2>
            <article id="friendList">
            ${htmlRepresentations}
            </article> 
    `
}


// const render = (currentUserId, allRelationships, allUsers) => {

//     const relationshipsForThisUser = allRelationships.flter(relationship => relationship.userId === currentUserId)      //returns an array of all friend objects for current user
//     // relationshipsForThisUser.map()
//     console.log("console log relationshipsForThisUser >>", relationshipsForThisUser)
// }



export const friendList = () => {
    getUsers()
    .then(getFriends)
    .then(() => {
        const users = useUsers()
        const friends = useFriends()
        render(users, friends)
    })
}

