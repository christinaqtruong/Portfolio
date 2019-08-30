//array holding project data
var projects = [
  {
    title: "Engauge",
    dev: [
      "User logs in to access app information via Passport.js",
      "User lands on a dashboard containing charts and graphs populated using Nivo that summarizes user data",
      "Pages are populated using React.js, with specific information dynamically populated using states",
      "Data is pushed into/pulled from MongoDB using both GET and POST routes and Mongoose ORM",
    ],
    demo: "../assets/gifs/engauge_demo.gif",
    background:
      "This project was a collaborative effort with teammates <a href='https://github.com/elaintran'>Elain Tran</a>, <a href='https://github.com/i-k0n/'>Mark Baker</a>, <a href='https://github.com/Dgarza0413'>David Garza</a>, and <a href='https://github.com/bmm019'>Brittany McNulty</a>. David wanted to create an app that would have helped him in his former role as a geologist recording oil well data in the field. Under his direction, we created Enguage, which is targeted at small oil companies for tracking data.",
    description:
      "Engauge organizes data users input through forms into a mongoose database and accesses the information to dynamically create charts, maps and financial data using an API. My role involved utilizing get/post routes to dynamically populate data in tables, creating table components using React.js and building search/filter functions for better user experience and organization.",
    link: "https://serene-meadow-56536.herokuapp.com/",
    tags: ["React", "MongoDB", "Mongoose", "Passport", "Moment", "JavaScript", "Nivo", "Google Map React"],
    icon: "../assets/images/Engauge.png",
    github: "https://github.com/Dgarza0413/engauge"
  },
  {
    title: "Heroes United X: The Awakening",
    dev: [
      "User must create a username and password stored in a MySQL Database to log in and create a character",
      "User authentication via Passport.js allows previous users to relog and access stored character and chapter progress data",
      "A Node and Express Web Server is used to navgiate different stages of the game",
      "GET and POST routes retrieve and add new data to the database as chapters are completed or character stats changed",
      "Illustrator used to create svgs for head, body and leg attack selections",
      "Animations done using JavaScript and jQuery",
      "Character sprites grabbed from Nintendo's Fire Emblem game",
      "Character health bar display changes dynamically using D3.js",
      "Combat system incorporates elements of character speed, attack, defense and hit chance, enacted using JavaScript"
    ],
    demo: "../assets/gifs/heroes_united_demo.gif",
    background:
      "This was the first collaborative effort with my amazing teammates <a href='https://github.com/elaintran'>Elain Tran</a>, <a href='https://github.com/i-k0n/'>Mark Baker</a>, <a href='https://github.com/Dgarza0413'>David Garza</a>, and <a href='https://github.com/bmm019'>Brittany McNulty</a>. We all thought it would be cool to create a game with a combat system for our first big project incorporating backend data storage and came up with Heroes.",
    description:
      "Heroes is a collaborative multi-level, turn-based browser game that incorporates strategy and RPG elements. User authentication is used to access saved character statistics/game progression, jQuery for gameplay and a MySQL database for data storage. My role involved designing the game play, coding the combat system, and working with the front-end developers to tie in the game mechanics with the UI.",
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
    icon: "../assets/images/Heroes_United.png",
    github: "https://github.com/elaintran/heroes-united"
  },
  {
    title: "Lazy Timer",
    dev: 
      ["An input form is dynamically populated upon clicking the timer display",
      "Upon submit, the data is pushed to Firebase and reflected real time",
      "A snapshot of the values are used to fill in the display by default when a user does not enter a value",
      "User submission is checked for parameters (use of letters, semicolons) using regex and a warning is displayed if the requirements are not met",
      "User submission is converted into a common unit (s) using calculations performed by JavaScript",
      "The values are converted back to time format for display using Moment.js",
      "setInterval() is used for the timers, with Booleans set to determine which timer is running at any given time"
      ],
    demo: "../assets/gifs/lazy_timer_demo.gif",
    background:
      "I prefer creating apps that have real-life application, so when the time came to create my first app, I decided to look to my past experiences to see what would've helped me. When I moved back to Austin and started my first night shift job at a hospital, it completely messed up my daily routine, affecting my sleeping and active hours. I picked up interval training and calisthenics as a way to relieve stress and keep busy during my downtime. The need for two timers for my interval training inspired me to create this app.",
    description:
      "Lazy Timer is an interval training stopwatch that allows the user to set two timers that switch back and forth automatically, enabling them to transition between workout and rest periods during interval training without having to reset the timer.",
    link: "https://christinaqtruong.github.io/LazyTimer/",
    tags: ["JavaScript", "jQuery", "CSS"],
    icon: "../assets/images/Lazy_Timer.png",
    github: "https://github.com/christinaqtruong/LazyTimer"
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
    projects[0].background,
    projects[0].github
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
          projects[i].background,
          projects[i].github
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

function selectProject(title, description, link, demo, background, github) {
  //clear previous selection
  $(".title").empty();
  $(".dev").empty();
  $(".description").empty();
  $(".demo-link").empty();
  $(".demo-gif").empty();
  $(".tags").empty();
  $(".dev-process").empty();
  $(".background").empty();
  $(".github").empty();

  //display project details
  $(".title").text(title);
  $(".description").text(description);
  $(".demo-link").text(title);
  $(".demo-link").attr("href", link);
  $(".demo-gif").attr("src", demo);
  $(".background").html(background);
  $(".github").text(title + " Github").attr("href", github);
}

$(document).ready(function() {
  displayProject();
});
