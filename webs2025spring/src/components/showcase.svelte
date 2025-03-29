<!-- <script>
	import beach from './BeachPic.jpg';
    import fragile from './AsFragileAsASpidersWeb.jpg';
    import audio from './BeachConversation.mp3'; -->
    <script>
  import { onMount } from "svelte";

  let images = [
    './AsFragileAsASpidersWeb.jpg',
    './BeachPic.jpg',
  ];
  
  let currentIndex = 0;

  onMount(() => {
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
    }, 5000); // 5 seconds

    return () => clearInterval(interval); // Clean up the interval when the component is destroyed
  });
</script>

<style>
  .image-container {
    width: 300px; /* Adjust as needed */
    height: 200px; /* Adjust as needed */
    overflow: hidden;
  }

  img {
    width: 100%;
    height: auto;
  }
</style>

<div class="image-container">
  <img src={images[currentIndex]} alt="Rotating images">
</div>



<img alt="The Beach at sunrise with seagulls flying over waves" src={beach} />

<div>
    Temp Text
</div>