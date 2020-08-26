



const render = () => {
    contentTarget.innerHTML = `
        <input type="text" id ="article--title" placeholder="Article Title" autofocus/> 
        <input type="text" id ="article--synopsis" placeholder="Synopsis"/>
        <input type="text" id ="article--url" placeholder="Article URL"/>
        
        
        <input type="hidden" id="articleId" name="articleId" value="">
    `
    } 