window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const navbar = document.getElementById("navbar");
  const menu = document.getElementById("menu");
  const navForm = document.getElementById("nav_form");

  if (navbar && menu && navForm) {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      navbar.classList.add("nav_fixed");
      menu.classList.add("nav_menu_fixed");
      navForm.classList.add("nav_form_fixed");
    } else {
      navbar.classList.remove("nav_fixed");
      menu.classList.remove("nav_menu_fixed");
      navForm.classList.remove("nav_form_fixed");
    }
  }
}

let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("slider_slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slides.length > 0) {
    slides[slideIndex - 1].style.display = "block";
  }
  setTimeout(showSlides, 2000);
}
