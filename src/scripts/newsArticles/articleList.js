import { useArticles, getArticles } from "./articleProvider.js";
import { articleHTMLConverter } from "./articleHTMLConverter.js";
import { useFriends, getFriends } from "../Friends/friendProvider.js";



const contentTarget = document.querySelector(".articleList")
const eventHub = document.querySelector(".container")

export const articleList = () => { 
    getArticles()
    .then(() => { 
        const allArticles = useArticles()
        // console.log(allArticles)
        render(allArticles) // rendering all articles to put into the DOM 
    })
}

                           
// converting all of the article objects to HTML 
const render = (articleArrary) => {
    const activeUser = sessionStorage.getItem("activeUser")
    const allArticles = useArticles()
    const articlesPerId = allArticles.filter(article => article.userId === parseInt(activeUser))
    const sortedArticles = articlesPerId.sort((a,b) => {
        return b.timestamp - a.timestamp
    })
        // console.log(sortedArticles)

    const allArticlesHtml = sortedArticles.map (
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