import React from 'react';
import profileImage from '../assets/images/profile.jpg';
import instagramIcon from '../assets/icons/instagram.png';
import githubIcon from '../assets/icons/github.png';
import linkedinIcon from '../assets/icons/linkedin.png';

const Home = () => {
    return (
        <div className="home-container">
            <img src={profileImage} alt="Joshua Arceo" className="profile-image" />
            
            <h1>Joshua Arceo</h1>
            <p>Born and raised in Miami, I'm currently studying to be a software designer. Also a musician, in my free time I like to work out and train boxing and Muay Thai.</p>
            
            <div className="contact-section">
                <h2>Contact Me</h2>
                <div className="social-links">
                    <a href="YOUR_INSTAGRAM_LINK" target="_blank" rel="noopener noreferrer">
                        <img src={instagramIcon} alt="Instagram" />
                    </a>
                    <a href="YOUR_GITHUB_LINK" target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="GitHub" />
                    </a>
                    <a href="YOUR_LINKEDIN_LINK" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinIcon} alt="LinkedIn" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;
