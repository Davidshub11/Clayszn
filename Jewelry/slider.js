let currentSlide = 0;

function showSlide(index) {
	const slides = document.querySelector(".slides");
	const totalSlides = document.querySelectorAll(".myslides").length;

	if (index >= totalSlides) {
		currentSlide = 0;
	} else {
		currentSlide = index;
	}

	const offset = -currentSlide * 100; // 100% width for each slide
	slides.style.transform = `translateX(${offset}%)`;
}

function autoSlide() {
	currentSlide++;
	showSlide(currentSlide);
}

// Start automatic sliding
setInterval(autoSlide, 3000)
// Start with the first slide
showSlide(currentSlide);





// document.addEventListener("DOMContentLoaded", function() {
//   let slideIndex = 0;
//   showSlides();

//   function showSlides() {
//       let slides = document.getElementsByClassName("myslides");

//       // Hide all slides
//       for (let i = 0; i < slides.length; i++) {
//           slides[i].style.display = "none";  
//       }

//       slideIndex++;
//       if (slideIndex > slides.length) {slideIndex = 1}    

//       // Display the current slide
//       slides[slideIndex-1].style.display = "flex";  

//       // Change slide every 3 seconds
//       setTimeout(showSlides, 4000);
//   }
// })







//initial declarations
// let slideIndex = 0;
// let paused = false;
// const time = 4000; // 4 seconds
// const pauseTime = 40000; // Pause for 4 seconds after the last slide

// function showSlides() {
//   if (!paused) {
//     const slides = document.getElementsByClassName("mySlides");
//     const profile = document.querySelector(".profile");

//     // Hide all slides
//     for (let i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }

//     // Show the profile div after last slide
//     if (slideIndex === slides.length) {
//       profile.style.display = "block";
//       setTimeout(() => {
//         profile.style.display = "none"; // Hide profile after the pause
//         slideIndex = 0; // Reset index to start from the beginning
//         showSlides(); // Restart slideshow
//       }, pauseTime);
//       return; // Exit the function to avoid showing the next slide
//     }

//     // Increment slide index
//     slideIndex++;
    
//     // Reset index if it exceeds the number of slides
//     if (slideIndex > slides.length) {
//       slideIndex = 1;
//     }

//     // Display the current slide
//     slides[slideIndex - 1].style.display = "flex";

//     // Schedule the next slide change
//     setTimeout(showSlides, time);
//   }
// }

// function pause() {
//   paused = !paused;
//   if (!paused) {
//     // Restart the slideshow if it was paused
//     showSlides();
//   }
// }

// // Initialize the slideshow
// window.onload = function() {
//   // Hide profile initially
//   document.querySelector(".profile").style.display = "none";
  
//   showSlides();

//   // Add event listeners for mouse events
//   const images = document.querySelectorAll(".slider1");
//   images.forEach(img => {
//     img.addEventListener("mouseover", pause);
//     img.addEventListener("mouseout", () => { paused = false; showSlides(); });
//   });
// };










// script.js
// const slides = document.querySelectorAll('.myslides');
// const slideCount = slides.length;
// let currentSlide = 0;

// function showSlide(index) {
//     slides.forEach((slide, i) => {
//         slide.style.transform = `translateX(${(i - index) * 100}%)`;
//     });
// }

// function startSliding() {
//     setInterval(() => {
//         currentSlide = (currentSlide + 1) % slideCount;
//         showSlide(currentSlide);
//     }, 3000); // Change slide every 3 seconds
// }

// // Initialize slider
// showSlide(currentSlide); // Show the first slide
// startSliding();

