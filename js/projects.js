//array holding project data
var projects = [
  {
    title: "Engauge",
    dev: [
      "User logs in to access app information via user authentication",
      "User lands on a dashboard containing charts and graphs populated using Nivo that summarizes user data",
      "Pages are populated using React.js, with specific information dynamically populated using states",
      "Data is pushed into/pulled from MongoDB using both GET and POST routes and Mongoose ORM",
    ],
    demo: "../assets/gifs/engauge_demo.gif",
    background:
      "This project was a collaborative effort with teammates <a href='https://github.com/elaintran'>Elain Tran</a>, <a href='https://github.com/i-k0n/'>Mark Baker</a>, <a href='https://github.com/Dgarza0413'>David Garza</a>, and <a href='https://github.com/bmm019'>Brittany McNulty</a>. David wanted to create an app that would have helped him in his former role as a geologist recording oil well data in the field. Under his direction, we created Enguage, which is targeted at small oil companies for tracking data.",
    description:
      "Engauge organizes data users input through forms into a mongoose database and accesses the information to dynamically create charts, maps and financial data using an API. My role involved utilizing get/post routes to dynamically create populate data in tables retrieved from a Mongo database, creating table components using React.js and building search/filter functions for better user experience and organization.",
    link: "https://serene-meadow-56536.herokuapp.com/",
    tags: ["React", "MongoDB", "Mongoose", "Passport", "Moment", "JavaScript", "Nivo", "Google Map React"],
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
  },
  {
    title: "Lazy Timer",
    dev: "",
    demo: "../assets/gifs/lazy_timer_demo.gif",
    description:
      "An interval training stopwatch that allows the user to set two timers that switch back and forth automatically, enabling them to transition between workout and rest periods during interval training without having to reset the timer.",
    link: "https://christinaqtruong.github.io/LazyTimer/",
    tags: ["JavaScript", "jQuery", "CSS"],
    icon: "../assets/images/Lazy_Timer.png"
  },
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
    projects[0].description,
    projects[0].link,
    projects[0].demo,
    projects[0].background
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
    var iconContainer = $("<a>")
      .addClass("project-icon col")
      .attr({
        "project-title": projects[i].title,
        "data-key": i,
        "href": "#project-section"
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
          projects[i].demo,
          projects[i].background
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

function selectProject(title, description, link, demo, background) {
  //clear previous selection
  $(".title").empty();
  $(".dev").empty();
  $(".description").empty();
  $(".demo-link").empty();
  $(".demo-gif").empty();
  $(".tags").empty();
  $(".dev-process").empty();
  $(".background").empty();

  //display project details
  $(".title").text(title);
  $(".description").text(description);
  $(".demo-link").text(title);
  $(".demo-link").attr("href", link);
  $(".demo-gif").attr("src", demo);
  $(".background").html(background);
}

$(document).ready(function() {
  displayProject();
});
