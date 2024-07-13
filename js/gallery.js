let slides = document.getElementsByClassName("myslide");
let slideIndex = 0;
showSlides();

// Function to show the slides
function showSlides(
    set_timer=true
) {
    let i;
    // let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }
    slides[slideIndex-1].style.display = "block";  
    // dots[slideIndex-1].className += " active";
    if (set_timer)
        setTimeout(showSlides, 3000); // Change image every 3 secondscs
}

// Function to go to the next slide
function plusSlides(n) {
    slideIndex += n;
    if (slideIndex > document.getElementsByClassName("myslide").length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = document.getElementsByClassName("myslide").length}
    showSlides(false);
}

// Function to go to a specific slide
function currentSlide(n) {
    slideIndex = n;
    showSlides(false);
}

// Add event listener to the slideshow container
document.querySelector('.slideshow-container').addEventListener('click', function() {
    plusSlides(1);
});

