
import { createArticleButton } from "./newsArticles/articleShowFormButton.js";
import "./newsArticles/articleForm.js";
import { articleList } from "./newsArticles/articleList.js";

export const Nutshell = () => {
    // Render all your UI components here
    createArticleButton()
    articleList()
    // articleForm()
}