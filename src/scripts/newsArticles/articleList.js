import { useArticles, getArticles, deleteArticle } from "./articleProvider.js";
import { articleHTMLConverter } from "./articleHTMLConverter.js";

const contentTarget = document.querySelector(".article--container")
const eventHub = document.querySelector(".container")

export const articleList = () => { 
    getArticles()
    .then(() => { 
        const allArticles = useArticles()
        console.log(allArticles)
        render(allArticles)
    })
}
                            

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