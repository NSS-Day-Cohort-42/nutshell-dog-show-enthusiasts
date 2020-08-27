import { createArticleButton } from "./newsArticles/articleShowFormButton.js";
import "./newsArticles/articleForm.js";
import { addFriendButton } from "./Friends/addFriendButton.js";
import "./Friends/addFriendForm.js";
import { friendList } from "./Friends/friendList.js";

export const Nutshell = () => {
    // Render all your UI components here
    createArticleButton()
    // articleForm()
    addFriendButton()
    friendList()
}