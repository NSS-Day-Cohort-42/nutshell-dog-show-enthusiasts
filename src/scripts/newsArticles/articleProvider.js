let articles = [] 


const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const articleStateChangedEvent = new CustomEvent("articleStateChanged")

    eventHub.dispatchEvent(articleStateChangedEvent)
}


export const useArticles = () => {
    articles.slice()
}

export const getArticles = () => {
    return fetch('http://localhost:8088/database')
        .then(response => response.json())
        .then(parsedArticles => {
            articles = parsedArticles
        })
}

export const saveArticle = (article) => {
    return fetch('http://localhost:8088/database', {
        method: "POST", 
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(article)
    })
    .then(getArticles)
    .then(dispatchStateChangeEvent) 
}