






export const articleHTMLConverter = (articleObject) => {
    return ` 
        <section class="article--dashboard">
            <div class="article__Title">Title: ${articleObject.title}</div> 
            <div class="article__Synopsis">Synopsis: ${articleObject.synopsis}</div> 
            <div class="article__url">url: ${articleObject.url}</div>
            
            <button id='delete--Article'>Delete</button>
        </section>
    `
}