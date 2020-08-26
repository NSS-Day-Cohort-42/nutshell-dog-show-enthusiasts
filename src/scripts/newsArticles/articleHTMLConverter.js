export const noteHTMLConverter = (articleObject) => {
    return ` 
        <section class="article--dashboard">
            <div class="article__Title">Title: ${articleObject.title}</div> 
            <div class="article__Synopsis">Author: ${articleObject.synopsis}</div> 
            <div class="article__url">Content: ${articleObject.url}</div>  
        </section>
    `
}