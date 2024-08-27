import React from "react";
import { AwesomeButton } from 'react-awesome-button';

function Education() {
    return (
      <div className="card-container">
        <div className="project-button"><AwesomeButton type="primary" onPress={() => window.location.href = "/"}>Back To Home</AwesomeButton></div>
        <h1>Education</h1>
       <div className="card-2">
        <h2 className="card-title">Master of Science in Software Systems</h2>
        <h3 className="card-title-2">
         Kongu Engineering College Erode, Tamilnadu. Jul 2017 - Apr 2022
        </h3>
        <p className="card-description">
         2017 - Apr 2022 Graduated with a strong foundation in software
         development and system architecture. Acquired knowledge in advanced
         programming languages, data structures, and software engineering
         principles.
        </p>
       </div>
      </div>
    );
}

export default Education