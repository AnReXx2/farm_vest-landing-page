const items = document.querySelectorAll(".pathway_containers .accordion-item");

// scroll-animation
let sections = document.querySelectorAll("section");
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 1000;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add("show-animate");
      // Add animation class to all h1 elements within this section
      let h1s = sec.querySelectorAll("h1");
      h1s.forEach((h1) => {
        if (!h1.classList.contains("animate__animated")) {
          h1.classList.add("animate__animated", "animate__fadeInLeft");
        }
      });
    } else {
      sec.classList.remove("show-animate");
      // Remove animation class from all h1 elements within this section
      let h1s = sec.querySelectorAll("h1");
      h1s.forEach((h1) => {
        h1.classList.remove("animate__animated", "animate__fadeInLeft");
      });
    }
  });
};

// accordion
items.forEach((item) => {
  const trigger = item.querySelector(".accordion-header");

  trigger.addEventListener("click", () => {
    trigger.nextElementSibling.classList.toggle("active");
  });
});

// burger-menu
let burgerMenu = document.querySelector(".burger");
let menu = document.querySelector("nav");
let body = document.querySelector("body");

burgerMenu.onclick = () => {
  burgerMenu.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("no-scroll");
};
