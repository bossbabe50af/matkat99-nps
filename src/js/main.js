import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

const parkInfoLinks = [
  {
    name: "Current Conditions &#x203A;",
    link: "conditions.html",
    image:
      "https://www.nps.gov/common/uploads/grid_builder/yell/crop16_9/610D997A-D1EE-EE2E-B08F7C9E789EEDB3.jpg?width=423&quality=80&mode=crop&format=webp",
    description:
      "See what conditions to expect in the park before leaving on your trip!"
  },
  {
    name: "Fees and Passes &#x203A;",
    link: "fees.html",
    image:
      "https://www.nps.gov/common/uploads/grid_builder/yell/crop16_9/42892E15-AE6A-81EC-D35112D59E39F99C.jpg?width=423&quality=80&mode=crop&format=webp",
    description:
      "Learn about the fees and passes that are available."
  },
  {
    name: "Visitor Centers &#x203A;",
    link: "visitor_centers.html",
    image:
      "https://www.nps.gov/common/uploads/grid_builder/yell/crop16_9/619AB9C3-DA87-B968-87C2256D544EBE26.jpg?width=423&quality=80&mode=crop&format=webp",
    description:
      "Learn about the visitor centers in the park."
  }
];

// Template for the park name, designation, and states
function parkInfoTemplate(info) {
  return `<a href="/" class="hero-banner__title">${info.name}</a>
  <p class="hero-banner__subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
  </p>`;
}

// Template information cards
function mediaCardTemplate(info) {
  return `<div class="media-card">
    <a href="${info.link}">
      <img src="${info.image}" alt="${info.name}">
    </a>
    <div class="media-card__content">
      <a href="${info.link}">
        <h2>${info.name}</h2>
      </a>
      <p>${info.description}</p>
    </div>
  </div>`;
}

// Find mailing address
function getMailingAddress(addresses) {
  const mailing = addresses.find(
    (address) => address.type === "Mailing"
  );

  return mailing;
}

// Find voice phone number
function getVoicePhone(phoneNumbers) {
  const voice = phoneNumbers.find(
    (phone) => phone.type === "Voice"
  );

  return voice.phoneNumber;
}

// Footer template
function footerTemplate(info) {
  const mailing = getMailingAddress(info.addresses);
  const voice = getVoicePhone(info.contacts.phoneNumbers);

  return `<section class="contact">
    <h3>Contact Info</h3>

    <h4>Mailing Address:</h4>
    <div>
      <p>${mailing.line1}</p>
      <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p>
    </div>

    <h4>Phone:</h4>
    <p>${voice}</p>
  </section>`;
}

// Set header info
function setHeaderInfo(data) {
  const disclaimer = document.querySelector(".disclaimer > a");

  disclaimer.href = data.url;
  disclaimer.innerHTML = data.fullName;

  document.querySelector("head > title").textContent =
    data.fullName;

  document.querySelector(".hero-banner > img").src =
    data.images[0].url;

  document.querySelector(
    ".hero-banner__content"
  ).innerHTML = parkInfoTemplate(data);
}

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

// Set footer info
function setFooter(data) {
  const footerEl = document.querySelector("#park-footer");

  footerEl.innerHTML = footerTemplate(data);
}

// This runs the functions we created
setHeaderInfo(parkData);
setParkIntro(parkData);
setParkInfoLinks(parkInfoLinks);
setFooter(parkData);