import { saveArticle } from "./articleProvider.js";
import { articleList } from "./articleList.js";
import { createArticleButton } from "./articleShowFormButton.js";

const contentTarget = document.querySelector(".articleList")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => { 
    if (clickEvent.target.id === "create__Article") {
        articleForm()
    }
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "save__Article") {
        console.log("Clicked saved Article")
        const articleTitle = document.querySelector("#article--title")
        const articleSynopsis = document.querySelector("#article--synopsis")
        const articleURL = document.querySelector("#article--url")
        const currentUser = sessionStorage.getItem("activeUser")
        // console.log("currentUser:", currentUser) --- this returned the Id of the user in the console
        if(articleTitle.value !== "" && articleSynopsis.value !== "" && articleURL.value !== "") {

            const newArticle = {
                // Key/value pairs here
                title: articleTitle.value,
                synopsis: articleSynopsis.value,
                url: articleURL.value,
                timestamp: Date.now(), 
                userId: parseInt(currentUser)             
            }
            saveArticle(newArticle)
            articleList()
        } else { 
            window.alert("Fill in all the fields!!!")
        }
    }
})

const render = () => {
    contentTarget.innerHTML = `
        <input type="text" id ="article--title" placeholder="Article Title" autofocus/> 
        <input type="text" id ="article--synopsis" placeholder="Synopsis"/>
        <input type="text" id ="article--url" placeholder="Article URL"/>
        
        <button id="save__Article">Save Article</button> 
        <input type="hidden" id="articleId" name="articleId" value="">
    `
    } 

export const articleForm = () => { 
    render()
}