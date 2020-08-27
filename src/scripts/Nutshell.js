
import { createArticleButton } from "./newsArticles/articleShowFormButton.js";
import "./newsArticles/articleForm.js";
import { articleList } from "./newsArticles/articleList.js";
import "./publicChat/publicChatForm.js"
import { createMessageButton } from "./publicChat/createMessageButton.js";

export const Nutshell = () => {
    // Render all your UI components here
    createArticleButton()
    articleList()
    createMessageButton()
}