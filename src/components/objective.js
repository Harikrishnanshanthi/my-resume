import React, { useEffect } from "react";
import harikrishnan from "../images/harikrishnan.jpeg";
import { SocialIcon } from 'react-social-icons'
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import { Link, useNavigate  } from "react-router-dom"

const Objective = () => {

  const navigate = useNavigate()
   
    return (
      <div>
        <div className="split left">
          <div className="centered">
            <img src={harikrishnan} alt="#" className="avatar" />
            <h2>Harikrishnan</h2>
            <hr />
            <p className="title">Frontend Developer</p>
            <div className="social-icons">
              <SocialIcon
                target="_blank"
                network="github"
                url="https://github.com/Harikrishnanshanthi"
              />
              <SocialIcon
                target="_blank"
                network="linkedin"
                url="https://www.linkedin.com/in/harikrizhnan578/"
              />
              <SocialIcon
                target="_blank"
                network="x"
                url="https://x.com/home"
              />
              <SocialIcon
                target="_blank"
                network="email"
                url="harikrizhnan578@gmail.com"                
              />
              <SocialIcon
                target="_blank"
                network="whatsapp"
                url="https://wa.me/+919487781005"
              />
            </div>
          </div>
        </div>

        <div className="split right">
          <div className="objective">
            <h2 className="title-hellow">Hellow</h2>
            <p className="title-p">Here's who I am & what I do</p>
            <div className="objective-button">
              {/* <Link to="/experience" >Experience</Link> */}
              <AwesomeButton type="primary" onPress={() => navigate("/experience")}>Experience & Project</AwesomeButton>
              <AwesomeButton type="secondary" onPress={() => navigate("/education")}>Education</AwesomeButton>
            </div>
            <p className="objective-description">
              I am a Dynamic and motivated professional seeking a challenging
              position that leverages my skills in building testable, scalable,
              and efficient UI components for web-based e-commerce applications.
              Eager to contribute to a team that values innovation,
              collaboration, and continuous improvement.
            </p>
          </div>
        </div>
      </div>
    );
}

export default Objective;