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