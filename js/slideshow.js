var slides = document.getElementsByClassName('slide');
var dots = document.getElementsByClassName('dot'); 
var slideIndex = 1;


function currentSlide(n) {
    slideIndex = n;
    showSlides();
}

showSlides();
function showSlides() {  
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
    slideIndex++;
    setTimeout(showSlides, 3000);
}
