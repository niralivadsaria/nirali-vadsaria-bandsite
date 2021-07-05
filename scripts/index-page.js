const commentsection = document.querySelector("#comment");

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
  let displayComment = document.querySelector(".display__comments");

  commentsobj.forEach((obj) => {
    let main = document.createElement("div");
    let userName = document.createElement("h3");
    let comment = document.createElement("p");
    let date = document.createElement("p");
    date.innerText = obj.date;
    comment.innerText = obj.comment;
    userName.innerText = obj.name;
    main.classList.add("display__main");
    userName.classList.add("display__name");
    comment.classList.add("display__details");
    date.classList.add("display__dates");

    displayComment.appendChild(main);
    main.appendChild(userName);

    main.appendChild(date);
    main.appendChild(comment);
  });
}
displayComment(comments);
