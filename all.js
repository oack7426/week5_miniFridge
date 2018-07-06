$(document).ready(function() {
    $('.light-box').click(function() {
        $(this).toggleClass('open');
        $(this).find('.light-boxbox').toggleClass('open-box');
        $(this).siblings('svg').toggleClass('open-icon');
        $('.wrap').toggleClass('open-bg-block');
        $('.page_top h2').toggleClass('open-text-white');
        $('header').toggleClass('open-bg-grey');
        $('.prev').toggleClass('open_prev');
        $('.next').toggleClass('open_next');
    });
});

// 以下是外掛
var slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}
