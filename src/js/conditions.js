import "../css/style.css";
import "../css/conditions.css";
import {
  getParkData,
  getParkAlerts,
  getVisitorCenterData
} from "./parkService.mjs";

import {
  alertTemplate,
  visitorCenterTemplate
} from "./templates.mjs";

import setHeaderFooter from "./setHeaderFooter.mjs";

function setAlerts(alerts) {
  const alertsContainer = document.querySelector(".alerts > ul");

  alertsContainer.innerHTML = alerts.length
    ? alerts.map(alertTemplate).join("")
    : "<li>No current alerts reported for this park.</li>";
}

function setVisitorCenters(centers) {
  const visitorContainer = document.querySelector(".visitor ul");

  visitorContainer.innerHTML = centers
    .map(visitorCenterTemplate)
    .join("");
}

function setActivities(activities) {
  const activitiesContainer = document.querySelector(".activities ul");

  activitiesContainer.innerHTML = activities
    .map(activity => `<li>${activity.name}</li>`)
    .join("");
}

async function init() {
  const parkData = await getParkData();
  setHeaderFooter(parkData);

  const alerts = await getParkAlerts(parkData.parkCode);
  setAlerts(alerts);

  const centers = await getVisitorCenterData(parkData.parkCode);
  setVisitorCenters(centers);

  setActivities(parkData.activities);
}

init();