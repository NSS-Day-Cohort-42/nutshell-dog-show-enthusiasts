export const messagesHTMLConverter = (messageObj) => {
    return `
    <section class="message--board">
        <div class="message__User">${ messageObj.userId }</div> 
        <div class="message__Text">Synopsis: ${messageObj.content}</div> 
    
        <button id='delete--${ messageObj.id }'>Delete</button>
    </section>
    `
}