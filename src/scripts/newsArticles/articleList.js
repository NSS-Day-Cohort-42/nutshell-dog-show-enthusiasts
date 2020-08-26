import { useArticles, getArticles } from "./articleProvider.js";
import { articleHTMLConverter } from "./articleHTMLConverter.js";

const render = () => { 
    const allArticlesHtml = articleArr.map (
        (currentArticle) => {
           return articleHTMLConverter(currentArticle)  
        }
    ).join("")

    contentTarget.innerHTML = allArticlesHtml
}

