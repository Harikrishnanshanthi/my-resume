import React from "react";
import Projects from "./projects"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCity } from '@fortawesome/free-solid-svg-icons'

function WorkExperience() {
    return (
      <div>
        <div className="split-work left-work">
          <h1 className="work-title">Software Developer at FirstQA Systems K.K. Japan May 2022 - Jun 2024</h1>
          <h3 className="work-title-experience"><FontAwesomeIcon className="city-icon" icon={faCity} />Work Experience</h3>
          <ol>
            <li className="work-description-points">Developed and tested UI components for e-commerce applications using
            JavaScript, React, and CSS.</li>
            <li className="work-description-points">Collaborated with a geographically dispersed team to deliver scalable and
            robust solutions.</li>
            <li className="work-description-points">Maintained and extended an existing codebase, adapting to pre-existing
            patterns and tracing the code's path of execution.</li>
            <li className="work-description-points">Actively involved in ensuring application performance and adhering to best
            practices.</li>
            <li className="work-description-points">Integrated third-party APIs and developed unit tests for various components.</li>
            <li className="work-description-points">Utilized Git for version control and Webpack for module bundling.</li>
          </ol>
        </div>
        <div className="split-work right-work">
          <Projects />
        </div>
      </div>

    );
}

export default WorkExperience