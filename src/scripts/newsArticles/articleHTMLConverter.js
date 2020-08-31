import { deleteArticle } from "./articleProvider.js";

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("delete--")) { 
        const [prompt, articleId] = clickEvent.target.id.split("--")

        deleteArticle(articleId)
    }
})

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.includes("edit--")) {
        const [prompt, editArticleId] = clickEvent.target.id.split("--")
        const editArticle = new CustomEvent("editArticleClicked", {
            detail : {
                editArticleId: parseInt(editArticleId)
            }
        })
        
        eventHub.dispatchEvent(editArticle)
                
    }
})


// export const articleHTMLConverter = (articleObject) => {
//     return ` 
//         <section class="article--dashboard">
//             <div class="article__Title">Title: ${articleObject.title}</div> 
//             <div class="article__Synopsis">Synopsis: ${articleObject.synopsis}</div> 
//             <div class="article__url">url: ${articleObject.url}</div>
//             <div class="article__date">Saved: ${new Date(articleObject.timestamp).toLocaleDateString('en-US')}</div>

            
//             <button class="deleteArticle" id='delete--${ articleObject.id }'>Delete</button>
//             <button class="editArticle" id='edit--${ articleObject.id }'>Edit</button>
//         </section>
//     `
// }



// friend articles: <i> tags (italic font), Cornsilk background color, no edit/delete buttons
export const articleHTMLConverter = (articleObject) => {
    const activeUserId = parseInt(sessionStorage.getItem("activeUser"))
    console.log("activeUserId >>",activeUserId)
    if (articleObject.userId === activeUserId) {
        return ` 
            <section class="article--dashboard">
                <article class="article__cardUser">
                    <div class="article__Title">Title: ${articleObject.title}</div> 
                    <div class="article__Synopsis">Synopsis: ${articleObject.synopsis}</div> 
                    <div class="article__url">url: ${articleObject.url}</div>
                    <div class="article__date">Saved: ${new Date(articleObject.timestamp).toLocaleDateString('en-US')}</div>

                    
                    <button class="deleteArticle" id='delete--${ articleObject.id }'>Delete</button>
                    <button class="editArticle" id='edit--${ articleObject.id }'>Edit</button>
                </article>
            </section>
        `
    }
    else {
        return ` 
            <section class="article--dashboard">
                <i>
                <article class="article__cardFriend" style="background-color:Cornsilk;">
                    <div class="article__Title">Title: ${articleObject.title}</div> 
                    <div class="article__Synopsis">Synopsis: ${articleObject.synopsis}</div> 
                    <div class="article__url">url: ${articleObject.url}</div>
                    <div class="article__date">Saved: ${new Date(articleObject.timestamp).toLocaleDateString('en-US')}</div>
                </article>
                </i>
        
                
            </section>
        `
    }

}