const showSection = document.querySelector(".shows");
let api = "https://project-1-api.herokuapp.com/showdates";
let apiKey = "?api_key=6ec797b6-7cc2-43bb-b996-9414bc4c339d";
let shows = [];

function showsDisplay(showsobj) {
  let showSection = document.querySelector(".shows");

  showsobj.forEach((obj) => {
    let main = document.createElement("div");
    let date = document.createElement("h3");
    let dateinfo = document.createElement("p");
    let venue = document.createElement("h3");
    let venueinfo = document.createElement("p");
    let location = document.createElement("h3");
    let locationinfo = document.createElement("p");
    let button = document.createElement("button");
    button.addEventListener("click", () => {
      console.log(obj.venue);
    });

    locationinfo.innerText = obj.location;
    venueinfo.innerText = obj.place;
    dateinfo.innerText = new Date(Number(obj.date)).toDateString();

    button.textContent = "BUY TICKETS";
    location.textContent = "LOCATION";
    venue.textContent = "VENUE";
    date.textContent = "DATES";
    main.classList.add("shows__main");

    date.classList.add("shows__date");
    dateinfo.classList.add("shows__info");
    venue.classList.add("shows__venue");
    venueinfo.classList.add("shows__info");
    location.classList.add("shows__location");
    locationinfo.classList.add("shows__info");
    button.classList.add("shows__button");
    showSection.appendChild(main);

    main.appendChild(date);
    main.appendChild(dateinfo);
    main.appendChild(venue);
    main.appendChild(venueinfo);
    main.appendChild(location);
    main.appendChild(locationinfo);
    main.appendChild(button);
  });
}

axios
  .get(api + apiKey)
  .then((response) => {
    shows = response.data;
    showsDisplay(shows);
  })
  .catch((error) => {});
