window.onload = () => {
  const links = document.querySelectorAll(".header_language-link");
  const pathName = window.location.pathname;

  links.forEach((link, index) => {
    const currentHref = link.pathname;
    if (
      (pathName.endsWith("/") && index === 0) ||
      (pathName !== "/" && currentHref === pathName)
    ) {
      link.classList.add("is-active-language");
    }
  });
};
