const accordions = document.querySelectorAll('#accordion-card');
for (let index = 0; index < accordions.length; index+=1) {
    accordions[index].addEventListener('click', function () {
        this.classList.toggle('open');
        // get the content
        let content = this.nextElementSibling;
        // if clicked and the content is already open, then close it
        if (content.style.maxHeight) {
            content.style.maxHeight = null;

        // if clicked and the content is currently closed, then open it
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}