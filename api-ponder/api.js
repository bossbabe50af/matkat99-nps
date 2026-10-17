//base url for the National Park Service API
const baseUrl = "https://developer.nps.gov/api/v1/";
const apiKey = "5KMfPH15bWNbVnUJOq6IzoxuAGhqfJd2MLcL9Wx2";

async function getJson(endpoint) {
    const url = baseUrl + endpoint;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "X-Api-Key": apiKey
        }
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    return data;

}

const listElement = document.getElementById('outpostList');

function listTemplate(item) {
    return `<li><a href="${item.url}">${item.fullName}</a> ${item.states}</li>`;
}
async function renderClimbingList() {
    const endpoint = "activities/parks?q=climbing";
    const data = await getJson(endpoint);
    const parks = data.data[0].parks;
    const listHtml = parks.map(listTemplate).join("");
    listElement.innerHTML = listHtml; 
}

renderClimbingList();