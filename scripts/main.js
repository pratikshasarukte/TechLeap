// // const slides=document.querySelectorAll(".slides img");
// // let slideIndex=0;
// // let intervalId=null;

// // //initializeSlider();
// // document.addEventListener("DOMContentLoaded", initializeSlider);

// // function initializeSlider(){

// //     if(slides.length>0){
// //         slides[slideIndex].classList.add("displaySlide");
// //         intervalId=setInterval(nextSlide,5000);

// //     }

// // }

// // function showSlide(index){

// //     if(index>=slides.length){
// //         slideIndex=0;
// //     }else if(index<0){
// //         slideIndex=slides.length-1;
// //     }

// //     slides.forEach(slide => {
// //         slide.classList.remove("displaySlide");
// //     });

// //     slides[slideIndex].classList.add("displaySlide");

// // }

// // function prevSlide(){
// //     clearInterval(intervalId);
// //     slideIndex--;
// //     showSlide(slideIndex);

// // }

// // function nextSlide(){
// //     clearInterval(intervalId);
// //     slideIndex++;
// //     showSlide(slideIndex);

// // }


// const slides = document.querySelectorAll(".slides img");
// let slideIndex = 0;
// let intervalId = null;

// document.addEventListener("DOMContentLoaded", initializeSlider);

// function initializeSlider() {
//     if (slides.length > 0) {
//         slides[slideIndex].classList.add("displaySlide");
//         intervalId = setInterval(nextSlide, 5000);
//     }
// }

// function showSlide(index) {
//     if (index >= slides.length) {
//         slideIndex = 0; // Loop back to the first slide
//     } else if (index < 0) {
//         slideIndex = slides.length - 1; // Loop back to the last slide
//     }

//     slides.forEach(slide => {
//         slide.classList.remove("displaySlide");
//     });

//     slides[slideIndex].classList.add("displaySlide");
// }

// // Change the slide to the previous one
// function prevSlide() {
//     slideIndex--; // Update slide index
//     showSlide(slideIndex); // Show the new slide
// }

// // Change the slide to the next one
// function nextSlide() {
//     slideIndex++; // Update slide index
//     showSlide(slideIndex); // Show the new slide
// }

// // Optional: Restart the interval after manually changing slides
// function restartInterval() {
// //     clearInterval(intervalId); // Clear current interval
// //     intervalId = setInterval(nextSlide, 5000); // Restart the interval
// // }







const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].style.display = "block"; // Show the first slide
        intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0; // Loop back to the first slide
    } else if (index < 0) {
        slideIndex = slides.length - 1; // Loop back to the last slide
    }

    // Hide all slides and reset their positions
    slides.forEach((slide, i) => {
        slide.style.display = "none"; // Hide the slide
        slide.style.transform = `translateX(${(i - slideIndex) * 100}%)`; // Positioning for sliding effect
    });

    // Show the current slide
    slides[slideIndex].style.display = "block"; 
}

// Change the slide to the previous one
function prevSlide() {
    slideIndex--; // Update slide index
    showSlide(slideIndex); // Show the new slide
}

// Change the slide to the next one
function nextSlide() {
    slideIndex++; // Update slide index
    showSlide(slideIndex); // Show the new slide
}

// Optional: Restart the interval after manually changing slides
function restartInterval() {
    clearInterval(intervalId); // Clear current interval
    intervalId = setInterval(nextSlide, 5000); // Restart the interval
}











