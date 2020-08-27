import { saveArticle } from "./articleProvider.js";

const contentTarget = document.querySelector(".article--container")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => { 
    if (clickEvent.target.id === "create__Article") {
        articleForm()
    }
})

eventHub.addEventListener("click", clickEvent => {
    console.log("Clicked saved Article")
    if (clickEvent.target.id === "save__Article") {

        const articleTitle = document.querySelector("#article--title")
        const articleSynopsis = document.querySelector("#article--synopsis")
        const articleURL = document.querySelector("#article--url")
        console.log(articleTitle, articleSynopsis, articleURL)
        if(articleTitle.value !== "" && articleSynopsis.value !== "" && articleURL.value !== "") {

            const newArticle = {
                // Key/value pairs here
                title: articleTitle.value,
                synopsis: articleSynopsis.value,
                url: articleURL.value,
                timestamp: Date.now(), 
                // userId:                    
            }
            saveArticle(newArticle)
            render()
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