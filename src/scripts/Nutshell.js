
import { TaskFormCreateButton } from "./Tasks/createTaskFormButton.js"
import "./Tasks/taskForm.js"
import "./Tasks/taskList.js"
import {TaskList} from "./Tasks/taskList.js"
import { createArticleButton } from "./newsArticles/articleShowFormButton.js";
import "./newsArticles/articleForm.js";
import { addFriendButton } from "./Friends/addFriendButton.js";
import "./Friends/addFriendForm.js";
// import { addFriendForm } from "./Friends/addFriendForm.js";
import { friendList } from "./Friends/friendList.js";
import { articleList } from "./newsArticles/articleList.js";
import "./publicChat/publicChatForm.js"
import { createMessageButton } from "./publicChat/createMessageButton.js";
import { messageList } from "./publicChat/publicChatList.js";

// Render all your UI components here
export const Nutshell = () => {
    // Render all your UI components here
    createArticleButton()
    // articleForm()

    TaskFormCreateButton()
    TaskList()
    createArticleButton()

    addFriendButton()
    friendList()
    
    articleList()
    createMessageButton()
    messageList()
    TaskFormCreateButton()
    TaskList()
    createArticleButton()
}

   
   
  
   

