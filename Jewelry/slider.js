document.addEventListener("DOMContentLoaded", function() {
  let slideIndex = 0;
  showSlides();

  function showSlides() {
      let slides = document.getElementsByClassName("mySlides");

      // Hide all slides
      for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }

      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    

      // Display the current slide
      slides[slideIndex-1].style.display = "flex";  

      // Change slide every 3 seconds
      setTimeout(showSlides, 4000);
  }
})