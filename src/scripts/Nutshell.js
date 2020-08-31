
import { TaskFormCreateButton } from "./Tasks/createTaskFormButton.js"
import "./Tasks/taskForm.js"
import "./Tasks/taskList.js"
import {TaskList} from "./Tasks/taskList.js"
import { createArticleButton } from "./newsArticles/articleShowFormButton.js";
import "./newsArticles/articleForm.js";

import { friendList } from "./Friends/friendList.js";
import { addFriendButton } from "./Friends/addFriendButton.js";
import "./Friends/addFriendForm.js";

import { articleList } from "./newsArticles/articleList.js";
import "./publicChat/publicChatForm.js"
import { createMessageButton } from "./publicChat/createMessageButton.js";
import { messageList } from "./publicChat/publicChatList.js";
import { eventFormButton  } from "./Events/eventForm.js";
import { WelcomeMessage } from "./Welcome/welcome.js";

// Render all your UI components here
export const Nutshell = () => {

    createArticleButton()
    articleList()

    TaskFormCreateButton()
    TaskList()

    addFriendButton()
    friendList()
    
    createMessageButton()
    messageList()
    
    TaskFormCreateButton()
    TaskList()

    eventFormButton()

    WelcomeMessage()
}

   
   
  
   

