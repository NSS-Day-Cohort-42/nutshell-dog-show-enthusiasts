let articles = [] 


const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const articleStateChangedEvent = new CustomEvent("articleStateChanged")

    eventHub.dispatchEvent(articleStateChangedEvent)
}


export const useArticles = () => {
    return articles.slice()
}

export const getArticles = () => {
    return fetch('http://localhost:8088/articles')
        .then(response => response.json())
        .then(parsedArticles => {
            articles = parsedArticles
        })
}

export const saveArticle = (article) => {
    return fetch('http://localhost:8088/articles', {
        method: "POST", 
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(article)
    })
    .then(getArticles)
    .then(dispatchStateChangeEvent) 
}


export const deleteArticle = (articleId) => {
    console.log(articleId)
    return fetch(`http://localhost:8088/articles/${articleId}`, {
        method: "DELETE"
    })
        .then(getArticles)
        .then(dispatchStateChangeEvent)
}

export const editArticle = (articles) => {
    console.log(articles)
    return fetch (`http://localhost:8088/articles/${articles.id}`, {
        method : "PUT",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(articles)
    })
        .then(getArticles)
        .then(dispatchStateChangeEvent)
}