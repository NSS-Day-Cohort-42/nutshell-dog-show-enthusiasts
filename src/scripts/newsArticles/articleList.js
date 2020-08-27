import { useArticles, getArticles, deleteArticle } from "./articleProvider.js";
import { articleHTMLConverter } from "./articleHTMLConverter.js";

const contentTarget = document.querySelector(".articleList")
const eventHub = document.querySelector(".container")

export const articleList = () => { 
    getArticles()
    .then(() => { 
        const allArticles = useArticles()
        console.log(allArticles)
        render(allArticles) // rendering all articles to put into the DOM 
    })
}
                            
// converting all of the article objects to HTML 
const render = (articleArr) => {
    const allArticlesHtml = articleArr.map (
        (currentArticle) => {
            return articleHTMLConverter(currentArticle)
            }  
        ).join("")
    contentTarget.innerHTML = allArticlesHtml
}

eventHub.addEventListener("articleStateChanged", CustomEvent => {
    const deletedArticles = useArticles()
    render(deletedArticles)
})