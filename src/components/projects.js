import React from "react";
import { AwesomeButton } from 'react-awesome-button';
function Projects() {
    return (
      <div>
        <div className="project-button"><AwesomeButton type="primary" onPress={() => window.location.href = "/"}>Back To Home</AwesomeButton></div>
        <div className="card">
          <h1 className="project-title">Audio & Video Call Management Platform</h1>
          <p className="project-description">
            Led the development of an audio/video-based social network platform.
            Implemented features allowing users to engage with experts via
            audio/video calls. Utilized HTML, JavaScript, React, and Tailwind CSS
            to deliver a responsive user interface.
          </p>
        </div>
      </div>
    );
}

export default Projects