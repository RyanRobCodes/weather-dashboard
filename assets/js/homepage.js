const form = document.querySelector(".container-fluid form");
const apiKey = "ba43daaf194c8fee9c3c0f81bb205f61";
const url = "api.openweathermap.org";


form.addEventListener("submit", e => {
    e.preventDefault();
    const inputVal = input.value;
});

fetch(url).then(response => response.json()).then(data => {
})
.catch(() => {
    msg.textContent = "This city does not exist"
});

const { main, name, sys, weather } = data;
const li = document.createElement("li");
li.classList.add("city");
const markup = `
  <h2 class="city-name" data-name="${name},${sys.country}">
    <span>${name}</span>
    <sup>${sys.country}</sup>
  </h2>
  <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup>
  </div>
  <figure>
    <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
    <figcaption>${weather[0]["description"]}</figcaption>
  </figure>
`;
li.innerHTML = markup;
list.appendChild(li);