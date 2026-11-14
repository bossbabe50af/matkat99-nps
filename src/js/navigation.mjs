
function mainMenuHandler(event) {
  const navigation = document.querySelector(".global-nav");
  const menuButton = event.currentTarget;

  const isOpen = navigation.classList.toggle("show");

  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Close Menu" : "Open Menu"
  );
}

function subMenuHandler(event) {
  const button = event.currentTarget;
  const submenu = button
    .closest("li")
    .querySelector(".global-nav__submenu");

  if (!submenu) return;

  const isOpen = submenu.classList.toggle("show");

  button.setAttribute("aria-expanded", String(isOpen));
  button.querySelector(".icon").classList.toggle("rotate", isOpen);
}

export default function enableNavigation() {
  const menuButton = document.querySelector("#global-nav-toggle");
  const subMenuToggles = document.querySelectorAll(
    ".global-nav__split-button__toggle"
  );

  menuButton.addEventListener("click", mainMenuHandler);

  subMenuToggles.forEach((button) => {
    button.addEventListener("click", subMenuHandler);
  });
}
