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
    
}
   
   
  
   

