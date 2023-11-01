import React from 'react';

const projectsData = [
    {
        id: 1,
        title: "Project 1",
        image: "path_to_project_image1.jpg",
        link: "http://link-to-project1.com"
    },
    // ... Add more projects as needed
];

const Projects = () => {
    return (
        <div className="projects-container">
            <h1>My Projects</h1>
            {projectsData.map(project => (
                <div key={project.id} className="project-card">
                    <img src={project.image} alt={project.title} />
                    <h3>{project.title}</h3>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
            ))}
        </div>
    );
}

export default Projects;
