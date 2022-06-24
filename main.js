//BACKGROUND IMAGES SLIDER EFFECT BELOW
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 4000);
}
//END OF BACKGROUND IMAGES SLIDER EFFECT BELOW

// START OF PVC SECTION EDITS FOR SLIDER

setInterval(slide, 3000);

let slides2 = document.querySelector(".pvcslidesinner");

var image = document.querySelector(".slidespvc img").width;

function slide() {
  return slides2.scrollTo(image, 0), repeat();

  function repeat() {
    if (image === 400) {
      return (image = 800);
    } else if (image === 800) {
      return (image = 1200);
    } else if (image === 1200) {
      return (image = 1600);
    } else if (image === 1600) {
      return (image = 400);
    }
  }
}

// END OF PVC SECTION EDITS FOR SLIDER

// START OF INEC BUTTON EDITS

var section = document.querySelector(".pvcslides");
var buttoninec = document.querySelector(".inecbtnsection");

function hoverreveal() {
  buttoninec.style.display = "block";
  if (section.onmousemove) {
    return (buttoninec.style.display = block);
  }
}

function hoverrevealkill() {
  buttoninec.style.display = "none";
}

// END OF INEC BUTTON EDITS

// START OF PVC SECTION EDITS FOR SLIDER IN MOBILE VIEW

setInterval(slidemobile, 3000);

let Slidesmob = document.querySelector(".pvcslidemobilein");

// var imagemobile = document.querySelector(".slidespvcmobile img").width;
imagemobile = 300;
function slidemobile() {
  return Slidesmob.scrollTo(imagemobile, 0), repeat2();

  function repeat2() {
    if (imagemobile === 300) {
      return (imagemobile = 600);
    } else if (imagemobile === 600) {
      return (imagemobile = 900);
    } else if (imagemobile === 900) {
      return (imagemobile = 1300);
    } else if (imagemobile === 1300) {
      return (imagemobile = 300);
    }
  }
}

// END OF PVC SECTION EDITS FOR SLIDER IN MOBILE VIEW
