window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("navbar").classList.add("nav_fixed");
    document.getElementById("menu").classList.add("nav_menu_fixed");
    document.getElementById("nav_form").classList.add("nav_form_fixed");

    
  } else {
    document.getElementById("navbar").classList.remove("nav_fixed");
    document.getElementById("menu").classList.remove("nav_menu_fixed");
    document.getElementById("nav_form").classList.remove("nav_form_fixed");


  }
}

let slideIndex = 0;
showSlides();

function showSlides() {
  //zorgt er voor dat alle dia's een display none krijgen
  let slides = document.getElementsByClassName("slider_slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex - 1].style.display = "block";
  
  setTimeout(showSlides, 2000); // 2 seconds
}


