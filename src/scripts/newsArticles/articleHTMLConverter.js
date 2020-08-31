import { deleteArticle } from "./articleProvider.js";

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("delete--")) { 
        const [prompt, articleId] = clickEvent.target.id.split("--")

        deleteArticle(articleId)
    }
})

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.includes("edit--")) {
        const [prompt, editArticleId] = clickEvent.target.id.split("--")
        const editArticle = new CustomEvent("editArticleClicked", {
            detail : {
                editArticleId : parseInt(editArticleId)
            }
        })
        
        eventHub.dispatchEvent(editArticle)
                
    }
})


export const articleHTMLConverter = (articleObject) => {
    return ` 
        <section class="article--dashboard">
            <div class="article__Title">Title: ${articleObject.title}</div> 
            <div class="article__Synopsis">Synopsis: ${articleObject.synopsis}</div> 
            <div class="article__url">url: ${articleObject.url}</div>
            
            <button id='delete--${ articleObject.id }'>Delete</button>
            <button id='edit--${ articleObject.id }'>Edit</button>
        </section>
    `
}