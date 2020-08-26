import { useArticles, getArticles } from "./articleProvider.js";
import { articleHTMLConverter } from "./articleHTMLConverter.js";



export const articleList = () => { 
    getArticles()
    .then(() => { 
        const allArticles = getArticles()
        render(allArticles)
    })
}
                            

const render = () => { 
    const allArticlesHtml = articleArr.map (
        (currentArticle) => {
            return articleHTMLConverter(currentArticle)
            }  
        ).join("")
            contentTarget.innerHTML = allArticlesHtml
}