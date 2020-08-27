const contentTarget = document.querySelector(".article--container")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    
    if (clickEvent.target.id === "create__Article") { 
        const createArticleEvent = new CustomEvent("createArticle")
        eventHub.dispatchEvent(createArticleEvent)
    }
})

export const createArticleButton = () => {
    contentTarget.innerHTML = "<button id='create__Article'>Create Article</button>"
}
