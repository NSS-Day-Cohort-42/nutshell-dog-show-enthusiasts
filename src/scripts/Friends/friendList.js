import { getUsers, useUsers } from "../Users/userProvider.js";
import { getFriends, useFriends } from "../Friends/friendProvider.js";
import { friendHTMLConverter } from "./friendHTMLConverter.js";

// const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".friends--list")
const currentUser = parseInt(sessionStorage.getItem("activeUser"))


// const render = (allUsers, allRelationships) => {

//     const relationshipsForThisUser = allRelationships.filter(relationship => relationship.userId === currentUser)
//     console.log("console log 'relationshipsForThisUser' >>", relationshipsForThisUser)


    


    // const filteredUsers = allUsers.filter((user) => {
    //     return currentUser === user.userId
    // })


    // const htmlRepresentations = allUsers.map(user => {
    //     const relationshipsForThisUser = allRelationships.filter(relationship => relationship.userId === currentUser)    //returns array of all friend objects for this userId
    //     const friends = relationshipsForThisUser.map(friendObj => {                                                 //convert 
    //         const matchingUserObj = allUsers.find(user => user.userId === friendObj.friendUserId)
    //         return matchingUserObj
    //     })
    //     console.log("console log 'relationshipsForThisUser' >>", relationshipsForThisUser)
    //     return friendHTMLConverter(relationshipsForThisUser)
    // }).join("")
    

    // contentTarget.innerHTML = `
    //     <h2>Friends</h2>
    //         <article id="friendList">
    //         ${htmlRepresentations}
    //         </article> 
    // `
// }


const render = (allUsers) => {
    const relationshipsForThisUser = allRelationships.filter(relationship => relationship.userId === currentUser)
}


export const friendList = () => {
    const users = getUsers()
    // .then(getFriends)
    .then(() => {

        render(users)

        // const allUsers = useUsers()
        // const allRelationships = useFriends()
        // render(allUsers, allRelationships)
    })
}



// eventHub.addEventListener("friendStateChanged", () => {
//     const newFriends = useFriends()
//     renderNoteList(newFriends)
// })