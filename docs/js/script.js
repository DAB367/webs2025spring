let pictures = [
    "img/Waimea.jpg",
    "img/Waimea1.jpg"
]

const hoverOverCardTemplate = <img id="crochet" class="mouseover-img" src="img/crochet.jpg"
alt="Overhead view of a crochet shawl on top of a flower blanket">
<div class="overlay">
<div class="text">
    <h3>
        Crocheting
    </h3>
    <p>
        I used to love knitting. Then I realized that the cake was a lie this whole time.
    <ul>
        <li>
            The cake is a lie
        </li>
        <li>
            The cake is a lie
        </li>

        <li>
            The cake is a lie
        </li>

        <li>
            The cake is a lie
        </li>

        <li>
            The cake is a lie
        </li>
    </ul>
    </p>
</div>
</div>
<div>
<h3>
    Crochet
</h3>
<p>Crocheting is super fun!</p>
</div>;

window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
});


window.onload = (event) => {
    let parentCard = document.querySelector('#carouselContainer')
    console.log("page is fully loaded");

    let track = document.querySelector('.carousel_track');
    let slides = Array.from(track.children)
    let slideSize = slides[0].getBoundingClientRect();
    let slideWidth = slideSize.width;

    let dotsNav = document.querySelector('.carousel_nav');
    let currentDot = dotsNav.querySelector('.current-slide');
    let dots = Array.from(dotsNav.children);
    let currentSlide = track.querySelector('.current-slide');

    let nextButton = document.querySelector('.carousel_button--right');
    let prevButton = document.querySelector('.carousel_button--left');

    //arrange the slides next to each other
    const setSlidePosition = (slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    };
    slides.forEach(setSlidePosition);

    const moveToSlide = (track, currentSlide, targetSlide) => {
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
    }

    const updateDots = (currentDot, targetDot) => {
        currentDot.classList.remove('current-slide');
        targetDot.classList.add('current-slide');
    }
    //when I click the nav indicators, move to that slide
    dotsNav.addEventListener('click', e => {
        //what indicator was clicked
        const targetDot = e.target.closest('button');
        if (!targetDot) return;
        currentSlide = track.querySelector('.current-slide');
        currentDot = dotsNav.querySelector('.current-slide');
        const targetIndex = dots.findIndex(dot => dot === targetDot);
        const targetSlide = slides[targetIndex];

        moveToSlide(track, currentSlide, targetSlide);
        updateDots(currentDot, targetDot);
    })
};