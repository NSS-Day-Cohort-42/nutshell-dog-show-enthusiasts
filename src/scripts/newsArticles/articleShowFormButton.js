const contentTarget = document.querySelector(".createArticleButton")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    console.log("Article Button Clicked")
    if (clickEvent.target.id === "create__Article") { 
        const createArticleEvent = new CustomEvent("createArticle")
        eventHub.dispatchEvent(createArticleEvent)
    }
})

export const createArticleButton = () => {
    contentTarget.innerHTML = "<button id='create__Article'>Create Article</button>"
}
