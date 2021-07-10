const api = "https://project-1-api.herokuapp.com/comments";
const post = "https://project-1-api.herokuapp.com/comments";
const apikey = "?api_key=5c02e2de-364e-4585-a85d-188a5a1c6872";
// const commentsection = document.querySelector("#comment");
let displayLocation = document.querySelector(".display__comments");

const form = document.getElementById("form");
// console.log(form);

let comments = [
  {
    name: "Connor Walton",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    date: "02/17/2021",
  },
  {
    name: "Emilie Beach",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    date: "02/17/2021",
  },

  {
    name: "Miles Acosta",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    date: "02/17/2021",
  },
];

function displayComment(commentsobj) {
  commentsobj.forEach((obj) => {
    let main = document.createElement("div");
    main.classList.add("display__main");

    let commentwrapper = document.createElement("div");
    commentwrapper.classList.add("display__commentwrapper");

    let userName = document.createElement("h3");
    userName.classList.add("display__name");

    let date = document.createElement("p");
    date.classList.add("display__dates");

    let picture = document.createElement("div");
    picture.classList.add("display__picture");

    let wrapper = document.createElement("div");
    wrapper.classList.add("display__wrapper");

    let comment = document.createElement("p");
    comment.classList.add("display__details");

    date.innerText = new Date(obj.timestamp).toLocaleDateString();
    comment.innerText = obj.comment;
    userName.innerText = obj.name;

    displayLocation.prepend(main);
    main.appendChild(commentwrapper);
    commentwrapper.appendChild(picture);

    commentwrapper.appendChild(userName);
    commentwrapper.appendChild(date);
    main.appendChild(wrapper);
    wrapper.appendChild(comment);
  });
}

axios
  .get(api + apikey)
  .then((response) => {
    let comments = response.data;
    console.log(comments);
    displayComment(comments);
  })
  .catch((error) => {
    console.log(error);
  });

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = e.target.name.value;
  const comment = e.target.comment.value;
  axios
    .post(post + apikey, {
      name: name,
      comment: comment,
    })
    .then((response) => {
      axios.get(api + apikey).then((response) => {
        let comments = response.data;
        console.log(comments);
        displayLocation.innerText = "";
        displayComment(comments);
      });

      console.log(response);
    });
  // .catch((error) => {

  //   console.log(error);
  // });

  console.log(name);
  let commentsobj = {
    name: name,
    date: new Date(),
    comment: comment,
  };
});
