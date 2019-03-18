import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';

class About extends Component {

  render() {
    return (
      <React.Fragment>
        <Spring className="spring-container"
          from={{ opacity: 0}}
          to={{ opacity: 1}}
          config={ {duration: 1200}}
        >
        { props => (
          <div style={props}>
            <div className="about-container">
              <div className="about-box1">
                <img className="about-image"src="https://lh3.googleusercontent.com/a-/AAuE7mDo2u80vVhUnWhQ-yK27MBR3MP2dXL4oXNxToKG=s192" />
                <h3 className="about-question"><span>Who I am ?</span><br /> Hi my name is Hugo David Luna Reyes</h3>
                <h3 className="about-position">Full Stack Web Developer</h3>
                <button className="about-cv-button">CV</button>
              </div>
              <div className="about-box2">
                <div className="about-box2-item about-item-1">
                  <h4 className="about-objective"><span>Objective:</span> Learn, collaborate, and make awesome projects that have a huge impact in the community.</h4>
                </div>
                <div className="about-box2-item about-item-2">
                  <h4 className="hobbies-tittle">Hobbies</h4>
                  <nav className="hobbies-nav">
                    <ul>
                      <li>Soccer</li>
                      <li>Read</li>
                      <li>Love my dog Nhala</li>
                    </ul>
                  </nav>
                </div>
                <div className="about-box2-item about-item-3">
                  <h2>My story</h2>
                </div>
                <div className="about-box2-item about-item-4">
                  <h4 className="software-title">Software Skills</h4>
                  <nav className="software-nav">
                    <ul>
                      <li>Html <i class="fab fa-html5"></i></li>
                      <li>CSS <i class="fab fa-css3-alt"></i></li>
                      <li>Sass <i class="fab fa-sass"></i></li>
                      <li>React <i class="fab fa-react"></i></li>
                      <li>Node.js <i class="fab fa-node-js"></i></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
        </Spring>
        <div className="carousel-container">
          <div><h1>Carouse</h1></div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
