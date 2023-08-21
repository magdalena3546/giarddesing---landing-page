// const Masonry = require("masonry-layout");

const searchBtn = document.querySelector(".searchBtn");
const closeBtn = document.querySelector(".closeBtn");
const menuBtn = document.querySelector(".menuBtn");
const searchBox = document.querySelector(".inputSearch");
const navigation = document.querySelector(".navigation");
const elm = document.querySelector(".grid");

searchBtn.addEventListener("click", function () {
  searchBox.classList.add("active");
});
closeBtn.addEventListener("click", function () {
  searchBox.classList.remove("active");
});

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("open");
});

document.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    navigation.classList.add("fixed");
  } else {
    navigation.classList.remove("fixed");
  }
});

window.onload = () => {
  const masonry = new Masonry(elm, {
    itemSelector: ".grid-item",
    gutter: 10,
  });
};
