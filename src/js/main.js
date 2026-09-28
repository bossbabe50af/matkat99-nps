import { getParkData, parkInfoLinks } from "./parkService.mjs";
import { mediaCardTemplate } from "./templates.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";


const parkData = getParkData();

// Set park intro
function setParkIntro(data) {
  const introEl = document.querySelector(".intro");

  introEl.innerHTML = `<h1>${data.fullName}</h1>
  <p>${data.description}</p>`;
}

// Set info cards
function setParkInfoLinks(data) {
  const infoEl = document.querySelector(".info");

  const html = data.map(mediaCardTemplate);

  infoEl.insertAdjacentHTML(
    "afterbegin",
    html.join("")
  );
}

// This runs the functions we created
setHeaderFooter(parkData);
setParkIntro(parkData);
setParkInfoLinks(parkInfoLinks);