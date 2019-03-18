import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';
import { Transition, animated } from 'react-spring/renderprops'
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="home-grid-container">
        <div className="home-grid-item box1">
          <Transition
            native
            items={this.props.showCircles}
            from={{ opacity:0,marginTop:230}}
            enter={{ opacity: 1, marginTop:0}}
            leave={{opacity:0,marginTop:230}}
          >
          { show => show && (props => (
              <animated.div style={props}>
                <div className="item-education-circle">
                  <h2>Education</h2>
                  <i class="fas fa-university"></i>
                </div>
              </animated.div>
          ))}
          </Transition>
        </div>
        <div className="home-grid-item box2">
          <Transition
            native
            items={this.props.showCircles}
            from={{ opacity:0,marginRight:-395}}
            enter={{ opacity: 1, marginRight:0}}
            leave={{opacity:0,marginRight:-325}}
          >
          { show => show && (props => (
              <animated.div style={props}>
                <Link className="link-about-page" to="/about">
                  <div className="item-about-circle">
                    <h2>About</h2>
                    <i class="far fa-smile"></i>
                    </div>
                </Link>
              </animated.div>
          ))}
          </Transition>
        </div>
        <div className="home-grid-item box4">
          <Spring
            from={{ opacity: 0, marginTop: -500}}
            to={{ opacity: 1, marginTop:15}}
            config={ {duration: 1000}}
          >
          { props => (
            <div style={props}>
              <button className="btn-image-circle" onClick={this.props.showCirclesToggle}><img className="item--perfil-circle" src="https://pbs.twimg.com/profile_images/767837002888732673/_Z4Mey5I_400x400.jpg" alt="hugo-in-a-stadium" /></button>
            </div>
          )}
          </Spring>
        </div>
        <div className="home-grid-item box3">
          <Transition
            native
            items={this.props.showCircles}
            from={{ opacity:0,marginLeft:-300}}
            enter={{ opacity: 1, marginLeft:0}}
            leave={{opacity:0,marginLeft:-300}}
          >
          { show => show && (props => (
              <animated.div style={props}>
                <div className="item-project-circle">
                  <h2>Projects</h2>
                  <i class="fas fa-laptop-code"></i>
                </div>
              </animated.div>
          ))}
          </Transition>
        </div>
        <div className="home-grid-item box5">
          <Spring
            from={{ opacity: 0}}
            to={{ opacity: 1}}
            config={ {delay:1200}}
          >
          { props => (
            <div style={props}>
              <h3 className="welcome-text">Hi, my name is Hugo,click me to know me better</h3>
              <h4 className="work-together-text">Let's work together!</h4>
              <div>
                <nav>
                  <ul className="social-media-home">
                    <li><a><i className="fab fa-linkedin"></i></a></li>
                    <li><a><i className="far fa-envelope"></i></a></li>
                    <li><a><i className="fab fa-twitter"></i></a></li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
          </Spring>
        </div>
      </div>
    );
  }
}



export default Home;
