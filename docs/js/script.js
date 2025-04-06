
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


const hoverOverCardTemplate = <img id="crochet" class="mouseover-img" src="img/crochet.jpg" alt="Overhead view of a crochet shawl on top of a flower blanket">
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
</div>