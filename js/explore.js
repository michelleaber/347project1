const accordions = document.querySelectorAll('.card');
for (let accordion of accordions) {
    accordion.addEventListener('click', function () {
        this.classList.toggle('open');
        // get the content
        let content = this.nextElementSibling;
        // if clicked and content is already open, then close it
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            // if clicked and content is currently closed, then open it
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}