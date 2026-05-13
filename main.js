//
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(document.querySelector(".loader"));
  });
});

const observer = new IntersectionObserver((enteries) => {
  enteries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      // entry.target.classList.remove("hidden");
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));