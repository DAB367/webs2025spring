window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
});

/**
 * 
 * @param {Object} param0 
 * @param {eventElement} param0.imageElement  
 * @param {WebElement} param0.textElement  
 */
const greyOutImageTextOverlay = ({ imageElement, textElement }) => {
    console.log('imageElement',imageElement,'textElement',textElement);
}

window.onload = (event) => {
    // hover event for images, show text
    addEventListener("mouseover", (event) => {
        const mouseoverImageText = 'mouseover-img';
        let eventElement = event.target;
        console.log('eventElement', eventElement)
        if (eventElement && eventElement.classList.contains(mouseoverImageText)) {
            let nextElementSibling = eventElement.nextElementSibling;
            if (nextElementSibling) {
                greyOutImageTextOverlay({ imageElement: eventElement, textElement: mouseoverImageText })
            }
        }
    });

    onmouseover = (event) => { };
}