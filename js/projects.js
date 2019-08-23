//array holding project data
var projects = [
  {
    title: "Engauge",
    dev: [
      "Must have real life application and utility",
      "Must use React.js",
      "Must be backed by a MySQL or MongoDB Database with Sequelize or Mongoose ORM",
      "Must be deployed using Heroku (with Data)",
      "Must have both GET and POST routes",
      "Must have a polished frontend / UI",
      "Must utilize at least two libraries, packages or technologies",
      "Must allow for or involve the authentication of users",
      "Must have folder structure that meets MVC Paradigm",
      "Must meet good quality coding standards (indentation, scoping, naming)",
      "Must not expose sensitive API key information on the server"
    ],
    demo: "../assets/gifs/engauge_demo.gif",
    description:
      "Collaborative project that organizes data users input through forms into a mongoose database and accesses the information to dynamically create charts, maps and financial data using an API. Personally utilized MongoDB and get/post routes to dynamically create tables based on data retrieved from the database and built search functions.",
    link: "https://serene-meadow-56536.herokuapp.com/",
    tags: ["React", "MongoDB", "Mongoose", "Passport", "Moment", "JavaScript"],
    icon: "../assets/images/Engauge.png"
  },
  {
    title: "Heroes United X: The Awakening",
    dev: [
      "Must use a Node and Express Web Server",
      "Must be backed by a MySQL Database with a Sequelize ORM",
      "Must have both GET and POST routes for retrieving and adding new data",
      "Must be deployed using Heroku (with Data)",
      "Must utilize at least one new library, package, or technology that we haven’t discussed",
      "Must have a polished frontend / UI",
      "Must have folder structure that meets MVC Paradigm",
      "Must meet good quality coding standards (indentation, scoping, naming)",
      "Must not expose sensitive API key information on the server"
    ],
    demo: "../assets/gifs/heroes_united_demo.gif",
    description:
      "Collaborative multi-level, turn-based browser game that incorporates strategy and RPG elements. Utilizes user authentication to create and save characters, jQuery for gameplay and MySQL to store character statistics and game progress. Created the game engine and combat system.",
    link: "https://heroesunited.herokuapp.com",
    tags: [
      "Express",
      "Node",
      "MySQL",
      "Passport",
      "Sequelize",
      "JavaScript",
      "jQuery",
      "D3"
    ],
    icon: "../assets/images/Heroes_United.png"
  }
  // {
  //   title: "Lazy Timer",
  //   dev: "An interval training stopwatch",
  //   demo: "https://media.giphy.com/media/mP94uHyKvY1nq/giphy.gif",
  //   description:
  //     "The Lazy Timer allows the user to set two timers that switch back and forth automatically, enabling them to transition between workout and rest periods during interval training without having to reset the timer.",
  //   link: "https://christinaqtruong.github.io/LazyTimer/",
  //   tags: ["JavaScript", "jQuery", "CSS"],
  //   icon: "https://media.giphy.com/media/mP94uHyKvY2nq/giphy.gif"
  // },
  // {
  //   title: "Clicky Clicky 1000 Times Clicky",
  //   dev: "A Rick & Morty Style Clicky Game",
  //   demo: "https://media.giphy.com/media/mP94uHyKvY1nq/giphy.gif",
  //   description:
  //     "This is everybody's favorite memory game, created using React and component states. It's Clicky Clicky 1000 Times Clicky! A game nobody should play but everyone should code at least once when getting introduced to React.js.",
  //   link: "https://christinaqtruong.github.io/RickandMortyClickyGame/",
  //   tags: ["JavaScript", "React", "CSS", "HTML"],
  //   icon: "https://media.giphy.com/media/mP94uHyKvY2nq/giphy.gif"
  // }
];

//for each item in the array, add a small icon to the projects divider

function displayProject() {
  //display first project on page
  selectProject(
    projects[0].title,
    projects[0].dev,
    projects[0].description,
    projects[0].link,
    projects[0].demo
  );

  for (var j = 0; j < projects[0].tags.length; j++) {
    var tagContainer = $("<div>")
      .addClass("project-tag")
      .attr("project-title", projects[0].title);

    var tagDiv = $("<div class='project-tag'>").text(projects[0].tags[j]);

    $(tagContainer).append(tagDiv);

    $(".tags").append(tagContainer);
  }

  for (var k = 0; k < projects[0].dev.length; k++) {
    var devContainer = $("<ul>")
      .addClass("project-dev")
      .attr("project-title", projects[0].title);

    var devDiv = $("<li class='project-dev'>").text(projects[0].dev[k]);

    $(devContainer).append(devDiv);

    $(".dev-process").append(devContainer);
  }

  //loop through projects and display their icons
  for (var i = 0; i < projects.length; i++) {
    var iconContainer = $("<div>")
      .addClass("project-icon")
      .attr({
        "project-title": projects[i].title,
        "data-key": i
      });

    var projectIcon = $("<img class='icon'>").attr("src", projects[i].icon);

    iconContainer.append(projectIcon);

    $(".project-list").append(iconContainer);
  }

  //switch between projects
  $(".project-list").on("click", ".project-icon", function() {
    for (var i = 0; i < projects.length; i++) {
      if ($(this).attr("project-title") === projects[i].title) {
        selectProject(
          projects[i].title,
          projects[i].description,
          projects[i].link,
          projects[i].demo
        );

        //append tags based on project selected
        for (var j = 0; j < projects[i].tags.length; j++) {
          var tagContainer = $("<div>")
            .addClass("project-tag")
            .attr("project-title", projects[i].title);

          var tagDiv = $("<div class='project-tag'>").text(projects[i].tags[j]);

          $(tagContainer).append(tagDiv);

          $(".tags").append(tagContainer);
        }

        //append list of development process based on project selected
        for (var k = 0; k < projects[i].dev.length; k++) {
          var devContainer = $("<ul>")
            .addClass("project-dev")
            .attr("project-title", projects[i].title);

          var devDiv = $("<li class='project-dev'>").text(projects[i].dev[k]);

          $(devContainer).append(devDiv);

          $(".dev-process").append(devContainer);
        }
      }
    }
  });
}

function selectProject(title, description, link, demo) {
  //clear previous selection
  $(".title").empty();
  $(".dev").empty();
  $(".description").empty();
  $(".demo-link").empty();
  $(".demo-gif").empty();
  $(".tags").empty();
  $(".dev-process").empty();
  //display project details
  $(".title").text(title);
  $(".description").text(description);
  $(".demo-link").text(title);
  $(".demo-link").attr("href", link);
  $(".demo-gif").attr("src", demo);
}

$(document).ready(function() {
  displayProject();
});
