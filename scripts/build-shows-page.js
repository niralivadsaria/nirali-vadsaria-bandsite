const showSection = document.querySelector(".shows");
let shows = [
  {
    dates: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    dates: "Tue Sept 21 2021",

    venue: "Pier 3 East ",

    location: "San Francisco, CA",
  },
  {
    dates: "Tue Sept 21 2021",

    venue: "Pier 3 East ",

    location: "San Francisco, CA",
  },
  {
    dates: "Fri Oct 15 2021 ",

    venue: "View Lounge ",

    location: "San Francisco, CA",
  },
  {
    dates: "Sat Nov 06 2021 ",

    venue: "Hyatt Agency ",
    location: "San Francisco, CA",
  },

  {
    dates: "Fri Nov 26 2021",

    venue: "Moscow Center ",
    location: "San Francisco, CA",
  },

  {
    dates: "Wed Dec 15 2021 ",

    venue: "Press Club ",

    location: "San Francisco, CA",
  },
];

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
    venueinfo.innerText = obj.venue;
    dateinfo.innerText = obj.dates;
    button.textContent = "BUY TICKETS";
    location.textContent = "LOCATION";
    venue.textContent = "VENUE";
    date.textContent = "Dates";
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

showsDisplay(shows);
