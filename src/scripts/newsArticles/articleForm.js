

const contentTarget = document.querySelector(".article--container")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => { 
    if (clickEvent.target.id === "create__Article") {
        render()
    }
})

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