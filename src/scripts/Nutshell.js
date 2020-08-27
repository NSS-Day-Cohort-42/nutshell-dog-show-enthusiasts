import { TaskFormCreateButton } from "./Tasks/createTaskFormButton.js"
import "./Tasks/taskForm.js"
import "./Tasks/taskList.js"
import {TaskList} from "./Tasks/taskList.js"
import { createArticleButton } from "./newsArticles/articleShowFormButton.js";
import "./newsArticles/articleForm.js";

// Render all your UI components here
export const Nutshell = () => {
   TaskFormCreateButton()
   TaskList()
   createArticleButton()
}
   
   
  
   

