const accordions = document.querySelectorAll('.accordion');
console.log(accordions);
for (let index = 0; index < accordions.length; index+=1) {
    accordions[index].addEventListener('click', function () {
        this.classList.toggle('open'); // why does it work with this but not accordions.item(index)?
        // get the content
        let content = this.nextElementSibling;
        console.log(this.nextElementSibling);
        // if clicked and the content is already open, then close it
        if (content.style.maxHeight) {
            content.style.maxHeight = null;

        // if clicked and the content is currently closed, then open it
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}