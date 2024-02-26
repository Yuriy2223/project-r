document.addEventListener("DOMContentLoaded", (event) => {
  
  const linkCover = document.querySelectorAll(".cover-letter_language-link");
  const links = document.querySelectorAll(".header_language-link");

  const allLinks = [...linkCover, ...links];

  const pathName = window.location.pathname;

  allLinks.forEach((link, index) => {
    const currentHref = link.pathname;
    if (
      (pathName.endsWith("/") && index === 0) ||
      (pathName !== "/" && currentHref === pathName)
    ) {
      link.classList.add("is-active-language");
    }
  });
});


