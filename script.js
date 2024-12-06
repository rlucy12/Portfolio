const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const nameDesignation = document.querySelector(".name-designation");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
  nameDesignation.classList.toggle("name-active");
});

document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !burger.contains(e.target)) {
    nav.classList.remove("nav-active");
    nameDesignation.classList.remove("name-active");
  }
});


 
