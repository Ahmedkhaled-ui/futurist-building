// Scroll event
window.addEventListener("scroll", handleScroll);

// Call it once on load to apply active state
handleScroll();

function handleScroll() {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 400) {
    navbar.classList.add("nav-scrolled");
  } else {
    navbar.classList.remove("nav-scrolled");
  }

  // Update active link
  const sections = document.querySelectorAll("section, div[id]");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (
      link.getAttribute("href") === "#" + current ||
      (current === "" && link.getAttribute("href") === "#")
    ) {
      link.classList.add("active");
    }
  });
}
