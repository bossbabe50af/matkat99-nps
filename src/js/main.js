import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

// Update the link in the disclaimer
const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

// Update the title of the page
document.querySelector("head > title").textContent = parkData.fullName;

// Use the first image for the hero image
document.querySelector(".hero-banner > img").src = parkData.images[0].url;

// Template for the park name, designation, and states
function parkInfoTemplate(info) {
    return `<a href="/" class="hero-banner__title">${info.name}</a>
  <p class="hero-banner__subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
  </p>`;
}

// Update the park information in the hero
document.querySelector(".hero-banner__content").innerHTML =
    parkInfoTemplate(parkData);


