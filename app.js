let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-70px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const windowHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const progress = (scrollTop / windowHeight) * 100;
  document.getElementById("progress-bar").style.width = progress + "%";
});
