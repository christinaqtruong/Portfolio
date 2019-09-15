//array holding project data
var projects = [
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
      "This was the first collaborative effort with some amazing teammates from my bootcamp, <a href='https://github.com/elaintran'>Elain Tran</a>, <a href='https://github.com/i-k0n/'>Mark Baker</a>, <a href='https://github.com/Dgarza0413'>David Garza</a>, and <a href='https://github.com/bmm019'>Brittany McNulty</a>. We all thought it would be exciting to create an application users could interact with for our first big project. Our goal was to create a game where the user could customize their character, fight bad guys, potentially lose, and try again using either a different character or redistribute their custom points.",
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
    title: "Engauge",
    dev: [
      "User logs in to access app information via Passport.js",
      "User lands on a dashboard containing charts and graphs populated using Nivo that summarizes user data",
      "Pages are populated using React.js, with specific information dynamically populated using states",
      "Data is pushed into/pulled from MongoDB using both GET and POST routes",
    ],
    demo: "../assets/gifs/engauge_demo.gif",
    background:
      "This project was another collaborative effort with <a href='https://github.com/elaintran'>Elain Tran</a>, <a href='https://github.com/i-k0n/'>Mark Baker</a>, <a href='https://github.com/Dgarza0413'>David Garza</a>, and <a href='https://github.com/bmm019'>Brittany McNulty</a>. Our target was to create an app with real-life application. Engauge's core concept is to automate data collection. David's former role as a geologist required recording extensive data on oil wells in Excel sheets and on paper. With his field knowledge, we tailored Enguage to be an ideal method for consolidating and recording data for small oil companies with multiple wells.",
    description:
      "Engauge organizes data users input through forms into a Mongo database and accesses the information to dynamically create charts, maps and financial data with live data from a financial API. My role in the project involved utilizing get/post routes to dynamically populate data in tables, creating components using React.js and building search/filter functions for a better user experience and data organization.",
    link: "https://serene-meadow-56536.herokuapp.com/",
    tags: ["React", "MongoDB", "Mongoose", "Passport", "Moment", "JavaScript", "Nivo", "Google Map React"],
    icon: "../assets/images/Engauge.png",
    github: "https://github.com/Dgarza0413/engauge"
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
      "This was one of my first from-scratch projects back when I first learned JavaScript and jQuery. The inspiration for this app came from my first night shift job at the hospital. I picked up interval training and calisthenics as a way to relieve stress and keep busy during my odd schedule. Having to reset the timer between sets inspired me to create this app.",
    description:
      "Lazy Timer is an interval training stopwatch that allows the user to set two timers that switch back and forth automatically, enabling them to transition between workout and rest periods during interval training without having to reset the timer.",
    link: "https://christinaqtruong.github.io/LazyTimer/",
    tags: ["JavaScript", "jQuery", "CSS"],
    icon: "../assets/images/Lazy_Timer.png",
    github: "https://github.com/christinaqtruong/LazyTimer"
  },
  {
    title: "Rick & Morty Themed Clicky Game",
    dev: 
      [
      "A state object holds the array of image cards, score, top score, shaking feature and clicked images in an array",
      "A react component renders images on the page by mapping through the array of image cards using .map()",
      "Clicking an image randomizes the order of the array of image cards using JavaScript and sets it as the new array of images using setState()",
      "Each time an image is clicked, if its id is not already in the clicked array, then it gets added to the clicked array",
      "On click, the id of the image is compared to the clicked array and the score state changed",
      "If the image id is not in the clicked array, the score is incremented, setState() updates the score state and the new score is rendered to the page",
      "If the image id exists in the clicked array, the wrapper state changes and triggers a shaking function and the score resets"
      ],
    demo: "../assets/gifs/clicky_game_demo.gif",
    background:
      "Every developer creates their version of the classic clicky game when introduced to React.js. I modified the original concept by adding in a shaking feature whenever the user clicks the same image and incorporating my own style to the game.",
    description:
      "Clicky Clicky 3000 is a memory game rendered using React components and state. Each time an image is clicked, states are updated to reflect whether or not the image has been clicked before.",
    link: "https://christinaqtruong.github.io/RickandMortyClickyGame/",
    tags: ["React.js", "JavaScript", "CSS"],
    icon: "../assets/images/Clicky_Game.png",
    github: "https://github.com/christinaqtruong/RickandMortyClickyGame"
  }
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
    var iconContainer = $("<div>")
      .addClass("project-icon carousel-item item-" + i)
      .attr({
        "data-key": i,
        "href": "#project-section",
        "project-title": projects[i].title
      });
    
    var projectIcon = $("<img class='icon img-fluid'/>").attr({
      "src": projects[i].icon,
      "alt": projects[i].title
    });

    var carouselCaption = $("<div class='carousel-caption d-none d-md-block'></div>").attr("data-key", i);

    var caption = $("<h5></h5>").text(projects[i].title);

    carouselCaption.append(caption);
    
    iconContainer.append(projectIcon);
    iconContainer.append(carouselCaption);

    $(".project-list").append(iconContainer);

    $(".item-0").addClass("active");
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

  $(".carousel-control-prev").carousel(
    "prev"
  );

  $(".carousel-control-next").carousel(
    "next"
  );
});
