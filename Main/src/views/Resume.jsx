import React from 'react';
import './ResumePage.css'; // Make sure to create a corresponding CSS file

const ResumePage = () => {
  return (
    <div className="container">
      <header className="header">
        <h1 className="name-title">Joshua Arceo</h1>
        <div className="contact-info">
          <p className="email">Email: arceojoshua94@outlook.com</p>
          <p className="phone">Phone: 407-340-1038</p>
          <p className="website">Website: <a href="http://www.reallygreatsite.com" target="_blank">www.reallygreatsite.com</a></p>
        </div>
      </header>

      <section className="education">
        <h2 className="section-title">Education</h2>
        <ul className="education-list">
          <li className="education-item">Broward College - Software Engineering (Ongoing)</li>
          <li className="education-item">University of Miami - Full Stack Development (2023)</li>
          <li className="education-item">Abundant Life Academy - High School Diploma (2011)</li>
        </ul>
      </section>

      <section className="skills">
        <h2 className="section-title">Skills</h2>
        <ul className="skills-list">
          <li>Microsoft Excel</li>
          <li>HTML</li> 
          <li>CSS</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Handlebars</li>
          <li>MySQL</li>
          <li>MongoDB</li>
          <li>Adobe Photoshop</li>
        </ul>
      </section>

      <section className="work-experience">
        <h2 className="section-title">Work Experience</h2>

        <div className="experience-item">
          <h3>Telehealth Medical Assistant</h3>
          <p>Pediatric Associates (2020-Present)</p>
          <ul>
            <li>Supervised a team of 25-100 agents, providing leadership, guidance, and coaching.</li>
            <li>Managed escalated calls and resolved complex customer concerns.</li>
            <li>Successfully de-escalated high-stress situations and managed customer expectations.</li>
            <li>Conducted team meetings to discuss performance and collaborate on improvements.</li>
            <li>Generated detailed reports to monitor team performance and identify improvement areas.</li>
            <li>Presented team metrics and proposed ideas for developments to senior management.</li>
            <li>Facilitated onboarding, training, and development of new hires.</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3>Retention Team Supervisor</h3>
          <p>Chewy (2015-2020)</p>
          <ul>
            <li>Managed virtual waiting room, checking in and triaging patients efficiently.</li>
            <li>Assisted patients with telehealth application sign-in and provided technical support.</li>
            <li>Scheduled office visits and coordinated patient appointments with clinicians.</li>
            <li>Handled tasks and requests from clinicians to ensure seamless patient care.</li>
            <li>Collaborated with medical staff for smooth virtual patient care operations.</li>
            <li>Facilitated onboarding, training, and development of new hires.</li>
          </ul>
        </div>

        {/* Add additional work experiences here */}

      </section>


      <section className="references">
        <h2 className="section-title">References</h2>
        <div className="reference-item">
          <p>Maria Vera - Pediatric Associates / Supervisor</p>
          <p>Phone: 561-574-7997</p>
          <p>Email: mvera@pediatricassociates.com</p>
        </div>
        <div className="reference-item">
          <p>Daisy Rivera - Chewy / Manager</p>
          <p>Phone: 407-717-0391</p>
          <p>Email: daisydrivera@outlook.com</p>
        </div>
        {/* Add more references as needed */}
      </section>

      <footer className="footer">
        <p>&copy; 2023 Joshua Arceo. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default ResumePage;
