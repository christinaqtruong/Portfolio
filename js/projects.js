//array holding project data
var projects = [
    {
      title: "Project 1",
      demo: "https://media.giphy.com/media/mP94uHyKvY1nq/giphy.gif",
      description: "Project 1 Description",
      link: "Project 1 link",
      tags: "Project 1 tags",
      icon: "https://media.giphy.com/media/mP94uHyKvY2nq/giphy.gif"
    },
    {
      title: "Project 2",
      demo: "https://media.giphy.com/media/mP94uHyKvY2nq/giphy.gif",
      description: "Project 2 Description",
      link: "Project 2 link",
      tags: "Project 2 tags",
      icon: "https://media.giphy.com/media/mP94uHyKvY2nq/giphy.gif"
    },
    {
      title: "Project 3",
      demo: "https://media.giphy.com/media/mP94uHyKvY1nq/giphy.gif",
      description: "Project 3 Description",
      link: "Project 3 link",
      tags: "Project 3 tags",
      icon: "https://media.giphy.com/media/mP94uHyKvY2nq/giphy.gif"
    },
    {
      title: "Project 4",
      demo: "https://media.giphy.com/media/mP94uHyKvY1nq/giphy.gif",
      description: "Project 4 Description",
      link: "Project 4 link",
      tags: "Project 4 tags",
      icon: "https://media.giphy.com/media/mP94uHyKvY2nq/giphy.gif"
    },
  ]

  //for each item in the array, add a small icon to the projects divider
var column = "<div class='col-sm' id='project-icon'></div>"

$.each(projects, function(){
    $("#project-bar").append($(column));
    $("#project-icon").append($())
})