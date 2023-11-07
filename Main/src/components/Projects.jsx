import React from 'react';

    const Projects = () => {
        return (
        <div className="container">
          <section className="hero gradient-header">
            <div className="hero-body">
              <p className="title has-text-centered">Projects</p>
            </div>
          </section>
      
          <div className="columns is-multiline">
      
            <div className="column is-one-third">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3 gradient-border">
                    <img src="path-to-your-project-image.jpg" alt="Project Name" />
                  </figure>
                </div>
                <div className="card-content">
                  <p className="title is-4">Cruise Control</p>
                  <p className="content">
                    Short description of the project.
                  </p>
                </div>
                <footer className="card-footer">
                  <a href="#" className="card-footer-item is-main-color">View Project</a>
                </footer>
              </div>
            </div>
      
            <div className="column is-one-third">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3 gradient-border">
                    <img src="path-to-your-project-image.jpg" alt="Project Name" />
                  </figure>
                </div>
                <div className="card-content">
                  <p className="title is-4">Project Name</p>
                  <p className="content">
                    Short description of the project.
                  </p>
                </div>
                <footer className="card-footer">
                  <a href="#" className="card-footer-item is-main-color">View Project</a>
                </footer>
              </div>
            </div>
      
            <div className="column is-one-third">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3 gradient-border">
                    <img src="path-to-your-project-image.jpg" alt="Project Name" />
                  </figure>
                </div>
                <div className="card-content">
                  <p className="title is-4">Project Name</p>
                  <p className="content">
                    Short description of the project.
                  </p>
                </div>
                <footer className="card-footer">
                  <a href="#" className="card-footer-item is-main-color">View Project</a>
                </footer>
              </div>
            </div>
      
          </div>
        </div>
     
      
  );
}

export default Projects;
