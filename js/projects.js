//array holding project data
var projects = [
  {
    title: "Engauge",
    byline: "A data repository resource for oil companies",
    demo: "https://media.giphy.com/media/mP94uHyKvY1nq/giphy.gif",
    description:
      "Engauge is a data repository customized for oil companies that stores, organizes and visualizes data as infographics and specialized tables. This app enables the creation of well tables, shows detailed information on each well and has a dashboard for quick access to summary statistics on oil, gas and water production. Engauge also displays the location of well sites and draws financial data from an API to populate the price of oil production based on current oil production.",
    link: "https://serene-meadow-56536.herokuapp.com/",
    tags: ["React", "MongoDB", "Mongoose", "Passport", "Moment", "JavaScript"],
    icon: "https://media.giphy.com/media/mP94uHyKvY2nq/giphy.gif"
  },
  {
    title: "Heroes United X: The Awakening",
    byline: "A JavaScript game",
    demo: "../assets/gifs/heroes_united_demo.gif",
    description:
      "Heroes United is a multi-level, turn-based browser game that incorporates strategy, wit, and RPG elements. Users are prompted to login or sign up upon load, select and customize their characters, and unlock new chapters as they progress their way through the story. Characters have preset base stats according to their class, but the extra customization allows users to distribute additional stat points to any selected value.",
    link: "https://heroesunited.herokuapp.com",
    tags: ["Express", "Node", "MySQL", "Passport", "Sequelize", "JavaScript", "jQuery", "D3"],
    icon: "https://media.giphy.com/media/mP94uHyKvY2nq/giphy.gif"
  },
  {
    title: "Lazy Timer",
    byline: "An interval training stopwatch",
    demo: "https://media.giphy.com/media/mP94uHyKvY1nq/giphy.gif",
    description:
      "The Lazy Timer allows the user to set two timers that switch back and forth automatically, enabling them to transition between workout and rest periods during interval training without having to reset the timer.",
    link: "https://christinaqtruong.github.io/LazyTimer/",
    tags: ["JavaScript", "jQuery", "CSS"],
    icon: "https://media.giphy.com/media/mP94uHyKvY2nq/giphy.gif"
  },
  {
    title: "Clicky Clicky 1000 Times Clicky",
    byline: "A Rick & Morty Style Clicky Game",
    demo: "https://media.giphy.com/media/mP94uHyKvY1nq/giphy.gif",
    description:
      "This is everybody's favorite memory game, created using React and component states. It's Clicky Clicky 1000 Times Clicky! A game nobody should play but everyone should code at least once when getting introduced to React.js.",
    link: "https://christinaqtruong.github.io/RickandMortyClickyGame/",
    tags: ["JavaScript", "React", "CSS", "HTML"],
    icon: "https://media.giphy.com/media/mP94uHyKvY2nq/giphy.gif"
  }
];

//for each item in the array, add a small icon to the projects divider

function displayProject(){
  //display first project on page
  selectProject(projects[0].title, projects[0].byline, projects[0].description, projects[0].link, projects[0].demo);

  //loop through projects and display their icons
  for (var i=0; i < projects.length; i++){
    var iconContainer = $("<div>").addClass("project-icon").attr({
      "project-title": projects[i].title,
      "data-key": i
    });
    
    var projectIcon = $("<img class='icon'>").attr("src", projects[i].icon);

    iconContainer.append(projectIcon);

    $(".project-list").append(iconContainer);
  }

  //switch between projects
  $(".project-list").on("click", ".project-icon", function(){
    for (var i=0; i < projects.length; i++){
      if($(this).attr("project-title") === projects[i].title){
        selectProject(projects[i].title, projects[i].byline, projects[i].description, projects[i].link, projects[i].demo)
      }
    }
  })
}

function selectProject(title, byline, description, link, demo){
  //clear previous selection
  $(".title").empty();
  $(".byline").empty();
  $(".description").empty();
  $(".demo-link").empty();
  $(".demo-gif").empty();

  //display project details
  $(".title").text(title);
  $(".byline").text(byline);
  $(".description").text(description);
  $(".demo-link").text(title);
  $(".demo-link").attr("href", link);
  $(".demo-gif").attr("src", demo);
}

$(document).ready(function(){
  displayProject();
})

// var column = "<div class='col-sm slide'></div>";

// $.each(projects, function(index, val) {
//   var col = $(column);
//   var img = $("<img>").attr("src", val.icon);
//   col.append(img);
//   $("#project-bar").append(col);
// });
