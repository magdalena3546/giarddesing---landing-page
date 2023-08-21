const searchBtn = document.querySelector(".searchBtn");
const closeBtn = document.querySelector(".closeBtn");
const menuBtn = document.querySelector(".menuBtn");
const searchBox = document.querySelector(".inputSearch");
const navigation = document.querySelector(".navigation");
const elm = document.querySelector(".grid");
const projectsBtn = document.querySelector(".projectsBtn");
const hideProjectsBtn = document.querySelector(".hideProjectsBtn");
const boxShow = document.querySelector(".boxShow");
const hidePhotos = document.querySelectorAll(".hidePhoto");
const macyContainer = document.querySelector("#macy-container");
searchBtn.addEventListener("click", () => {
  searchBox.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  searchBox.classList.remove("active");
});

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
});

document.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    navigation.classList.add("fixed");
  } else {
    navigation.classList.remove("fixed");
  }
});

const macy = Macy({
  container: "#macy-container",
  trueOrder: false,
  waitForImages: false,
  margin: 24,
  columns: 3,
  breakAt: {
    992: { columns: 1 },
  },
});

projectsBtn.addEventListener("click", () => {
  projectsBtn.classList.add("hide");
  macyContainer.classList.add("no-after");
  hidePhotos.forEach((elm) => elm.classList.add("show"));
  macy.reInit();
  hideProjectsBtn.classList.remove("hide");
});

hideProjectsBtn.addEventListener("click", () => {
  hideProjectsBtn.classList.add("hide");
  macyContainer.classList.remove("no-after");
  hidePhotos.forEach((elm) => elm.classList.remove("show"));
  projectsBtn.classList.remove("hide");
  macy.reInit();
});
