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
    const articleToEditId = customEvent.detail.editArticleId
    const articleObject = allOfTheArticles.find(article => article.id === articleToEditId)

    articleForm()

    const articleTitleInput = document.querySelector("#article--title")
    const articleSynopsisInput = document.querySelector("#article--synopsis")
    const articleUrlInput = document.querySelector("#article--url")
    const articleIdInput = document.querySelector("#articleId")
    
    articleTitleInput.value = articleObject.title
    articleSynopsisInput.value = articleObject.synopsis
    articleUrlInput.value = articleObject.url
    articleIdInput.value = articleObject.id
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "save__Article") {
        const articleTitle = document.querySelector("#article--title").value
        const articleSynopsis = document.querySelector("#article--synopsis").value
        const articleURL = document.querySelector("#article--url").value
        const currentUser = sessionStorage.getItem("activeUser")
        const articleId = document.querySelector("#articleId").value
        console.log(articleId)
        
        if(articleTitle !== "" && articleSynopsis !== "" && articleURL !== "") {
            if(articleId === "") {
                const newArticle = {
                    title: articleTitle,
                    synopsis: articleSynopsis,
                    url: articleURL,
                    timestamp: Date.now(), 
                    userId: parseInt(currentUser)             
                }
                saveArticle(newArticle)
                articleList()
            } else {
                const editedArticle = {
                    title: articleTitle,
                    synopsis: articleSynopsis,
                    url: articleURL,
                    timestamp: Date.now(), 
                    userId: parseInt(currentUser),
                    id: articleId  
                }
                editArticle(editedArticle)
                render()
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