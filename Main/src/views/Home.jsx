import React from 'react';
import Header from '../components/Header';


const HomeView = () => (
<div className = "App">
<Header />
  <div className="container">
    <section className="hero gradient-header">
      <div className="hero-body">
        <p className="title has-text-centered">Joshua Arceo</p>
        <p className="subtitle has-text-centered">Software Engineer & Musician</p>
      </div>
    </section>

    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3 gradient-border">
          <img src="path-to-your-image.jpg" alt="Joshua Arceo" />
        </figure>
      </div>
      <div className="card-content">
        <p className="content">
          Born and raised in Miami, I'm currently studying to be a software designer. 
          Also a musician, and on my free time, I like to work out and train boxing and muay thai.
        </p>
      </div>
      <footer className="card-footer">
        <a href="#" className="card-footer-item is-accent-color">Instagram</a>
        <a href="#" className="card-footer-item is-accent-color-2">GitHub</a>
        <a href="#" className="card-footer-item is-main-color">LinkedIn</a>
      </footer>
    </div>
    </div>
  </div>
);

export default HomeView;
