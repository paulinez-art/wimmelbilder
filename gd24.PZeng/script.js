//Burgermenü
const burger = document.getElementById("burger");
const nav = document.getElementById("taskleiste");

burger.addEventListener("click", () => {
  nav.classList.toggle("open");
});
//Slideshow
let slideIndex = [1, 1, 1, 1, 1, 1];
let slideId = [
  "mySlides1",
  "mySlides2",
  "mySlides3",
  "mySlides4",
  "mySlides5",
  "mySlides6",
];

showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(2, 3);
showSlides(3, 4);
showSlides(4, 5);

function plusSlides(n, no) {
  showSlides((slideIndex[no] += n), no);
}

function currentSlide(n, no) {
  showSlides((slideIndex[no] = n), no);
}

function showSlides(n, no) {
  let i;
  let slides = document.getElementsByClassName(slideId[no]);
  let dots = document.getElementsByClassName("dot" + no);

  if (n > slides.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex[no] - 1].style.display = "block";
  if (dots.length > 0) {
    dots[slideIndex[no] - 1].className += " active";
  }
}
//Spiel
