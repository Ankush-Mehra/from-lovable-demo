
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A fully responsive e-commerce platform with product filtering, cart functionality, and secure checkout process.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
    },
    {
      title: "Portfolio Website",
      description: "A modern portfolio website with smooth animations and a clean UI design to showcase professional work.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
    },
    {
      title: "Task Management App",
      description: "A productivity application for managing tasks with features like categories, due dates, and progress tracking.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["TypeScript", "React", "Firebase"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
    },
    {
      title: "Weather Dashboard",
      description: "An interactive weather application that provides real-time weather data and forecasts for locations worldwide.",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["JavaScript", "Weather API", "Chart.js"],
      githubLink: "https://github.com",
      liveLink: "https://example.com",
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 gradient-text">My Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Here are some of my recent projects. Each one was designed and developed 
            with careful attention to detail and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
