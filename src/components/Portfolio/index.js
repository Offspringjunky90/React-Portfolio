import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'Text-Editor',
      description: 'Create notes or code snippets with or without an internet connection SO THAT I can reliably retrieve them for later use',
      link: "https://blooming-fjord-22836.herokuapp.com/",
      repo: "https://github.com/Offspringjunky90/Text-Editor"
    },
    {
      name: 'Social-Network-API',
      description: 'An API for my social network that uses a NoSQL database SO THAT my website can handle large amounts of unstructured data',
      link: "https://www.youtube.com/watch?v=cnfw_tClfTw",
      repo: "https://github.com/Offspringjunky90/Social-Network-API"
    },
    {
      name: 'Day-Planner',
      description: 'The Day-Planner calendar application allows a user to save events for each hour of the day.. This app runs in the browser and features dynamically updated HTML and CSS powered by jQuery.',
      link: "https://offspringjunky90.github.io/Day-Planner/",
      repo: "https://github.com/Offspringjunky90/Day-Planner"
    },
    {
      name: 'Team-Profile-Generator',
      description: 'Generates a webpage that displays my teams basic info SO THAT I have quick access to their emails and GitHub profiles',
      link: "https://www.youtube.com/embed/-Ak7IrCL6ac",
      repo: "https://github.com/Offspringjunky90/Team-Profile-Generator"
    },
    {
      name: 'Weather-Dashboard',
      description: 'Upon entering the city of your choice and clicking submit, you are able to instantly view the current weather along with the five day forecast.',
      link: "https://offspringjunky90.github.io/Weather-Dashboard/",
      repo: "https://github.com/Offspringjunky90/Weather-Dashboard"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
