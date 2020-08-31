import { saveArticle, useArticles, editArticle } from "./articleProvider.js";
import { articleList } from "./articleList.js";
import { createArticleButton } from "./articleShowFormButton.js";

const contentTarget = document.querySelector(".articleList")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => { 
    if (clickEvent.target.id === "create__Article") {
        articleForm()
    }
})

eventHub.addEventListener("editArticleClicked", customEvent => {
   
    const allOfTheArticles = useArticles()
    const articleToEdit = customEvent.detail.messageId
    const articleObject = allOfTheArticles.find(article => article.id === articleToEdit)
    
    articleForm()

    const articleTitle = document.querySelector("#article--Text")
    const articleSynopsis = document.querySelector("#article--synopsis")
    const articleUrl = document.querySelector("#article--url")
    
    articleTitle.value = articleObject.title
    articleSynopsis.value = articleObject.synopsis
    articleUrl = articleObject.url
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "save__Article") {
        const articleTitle = document.querySelector("#article--title")
        const articleSynopsis = document.querySelector("#article--synopsis")
        const articleURL = document.querySelector("#article--url")
        const currentUser = sessionStorage.getItem("activeUser")
        const articleId = document.querySelector("#articleId")
        // console.log("currentUser:", currentUser) --- this returned the Id of the user in the console
        if(articleTitle.value !== "" && articleSynopsis.value !== "" && articleURL.value !== "") {

            if(articleId === "") {

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
                const editedArticle = {
                    title: articleTitle.value,
                    synopsis: articleSynopsis.value,
                    url: articleURL.value,
                    timestamp: Date.now(), 
                    userId: parseInt(currentUser),
                    id: articleId  
                }
                editArticle(editedArticle)
            }
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