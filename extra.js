const blogSection = document.querySelector("#blog");
const blogCards = blogSection.querySelectorAll(".card");

const openInNewTab = (url) => {
  window.open(url, "_blank").focus();
};

blogCards.forEach((card) => {
  const blogUrl = card.querySelector("a").href;
  card.addEventListener("click", () => {
    openInNewTab(blogUrl);
  });
});

// const day1Btn = document.querySelector("#day1");
const day2Btn = document.querySelector("#day2");
var hash = window.location.hash;
var id = hash.substring(1);
// console.log(id); 

if (id === "day1") {
} else if (id === "day2") {
  day2Btn.click()
  // console.log('day 2 bro');
  // day1Btn.classList.remove("active-btn");
  // day2Btn.classList.add("active-btn");
}
