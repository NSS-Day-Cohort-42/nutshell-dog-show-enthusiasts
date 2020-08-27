import { deleteArticle } from "./articleProvider.js";

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("delete--")) { 
        const [prompt, articleId] = clickEvent.target.id.split("--")

        deleteArticle(articleId)
    }
})




export const articleHTMLConverter = (articleObject) => {
    return ` 
        <section class="article--dashboard">
            <div class="article__Title">Title: ${articleObject.title}</div> 
            <div class="article__Synopsis">Synopsis: ${articleObject.synopsis}</div> 
            <div class="article__url">url: ${articleObject.url}</div>
            
            <button id='delete--${ articleObject.id }'>Delete</button>
        </section>
    `
}