export const friendHTMLConverter = (friendObj) => {
    return `
        <section class="friend__card">
            <h3 class="friend__name">${friendObj.id}</h3>
            <button class="button__startChat" id="friend__startChatButton--${friendObj.id}">Start Chat</button>
            <button class="button__deleteFriend" id="friend__deleteButton--${friendObj.id}">Delete Friend</button>
        </section>
    `
}