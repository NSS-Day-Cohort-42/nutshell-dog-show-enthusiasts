

const contentTarget = document.querySelector(".article--container")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => { 
    if (clickEvent.target.id === "create__Article") {
        articleForm()
    }
})

// eventHub.addEventListener("click", clickEvent => {
//     if (clickEvent.target.id === "saveNote") {

//         const noteTitle = document.querySelector("#note--title")
//         const noteAuthor = document.querySelector("#note--author")
//         const noteContent = document.querySelector("#note--content")
//         const crimeId = document.querySelector("#criminalSelect")
//         const [prompt, criminalId] = crimeId.value.split("--") //splitting at --. the prompt holds criminal
//         // Make a new object representation of a note. //

//         if (noteTitle.value !== "" && noteAuthor.value !== "" && noteContent.value !== "" && crimeId.value !== "0") {
//             const editNoteId = document.querySelector("#noteId")

//             if (editNoteId.value === "") {
//                 const newNote = {
//                     // Key/value pairs here
//                     title: noteTitle.value,
//                     author: noteAuthor.value,
//                     content: noteContent.value,
//                     timestamp: Date.now(),
//                     criminalId: parseInt(criminalId) //parseInt turns a string into an integer 
                    
//                 }
//                 // Change API state and application state
//                 saveNote(newNote)
//                 render()

const render = () => {
    contentTarget.innerHTML = `
        <input type="text" id ="article--title" placeholder="Article Title" autofocus/> 
        <input type="text" id ="article--synopsis" placeholder="Synopsis"/>
        <input type="text" id ="article--url" placeholder="Article URL"/>
        
        <button id="save__Article">Save Article</button> 
        <input type="hidden" id="articleId" name="articleId" value="">
    `
    } 

export const articleForm = () => { 
    render()
}