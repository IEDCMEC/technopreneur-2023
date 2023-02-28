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
