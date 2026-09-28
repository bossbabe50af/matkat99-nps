// Template information cards
export function mediaCardTemplate(info) {
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

// Template for the park name, designation, and states
export function parkInfoTemplate(info) {
    return `<a href="/" class="hero-banner__title">${info.name}</a>
  <p class="hero-banner__subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
  </p>`;
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
export function footerTemplate(info) {
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