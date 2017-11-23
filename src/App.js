import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import logo from './static/logo.svg';
import redux_logo from './static/redux_logo.svg';
import './App.css';
import {getInvites} from './actions'
import {Container} from 'reactstrap';
import {Particles} from 'react-particles-js';
import {particlesConfig} from './particlesjs-config';

import InvitesComponent from './components/invites';

import NavToolBar from './components/navbar';

// const P = Particles.default;
const P = Particles;


class App extends Component {
  // the would be normal method to accept incoming data upon mounting of main component
  // I'd probably use an render-if logic if it was a multi page app
  componentDidMount() {
    //     particlesJS.load('particles-js', 'assets/particles.json', function() {
    //   console.log('callback - particles.js config loaded');
    // });
    this.props.getInvites()
  }
  render() {
    return (<Container>
      <P params={{
        //  particlesConfig
        "particles": {
          "number": {
            "value": 80,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 6
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 3.1565905665290903,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": true,
              "rotateX": 3235.5053306923182,
              "rotateY": 2683.101981549727
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            "onclick": {
              "enable": true,
              "mode": "bubble"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        }
        //  particles: {
        //    number: {
        //      value: 150
        //    },
        //    line_linked: {
        //      shadow: {
        //        enable: false,
        //        color: "#3CA9D1",
        //        blur: 5
        //      }
        //    }
        //  }
       }} style={{
         position: "fixed",
         "z-index": 4,
         background: "#2e3250",
         top: 0,
         left: 0,
         width: "100%",
         height: "100%"
       }
     }/>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Built With React & Redux</h1>
          <span>
            <img src={logo} className="App-logo" alt="logo"/>

            <img src={redux_logo} className="App-logo" alt="redux Logo"/>
          </span>
        </header>

      </div>
      <NavToolBar percentComplete={this.props.invites.statsObj.percentComplete} unread={this.props.invites.statsObj.unread} read={this.props.invites.statsObj.read} duplicates={this.props.duplicates}>

      </NavToolBar>



    <InvitesComponent invites={this.props.invites} invitesById={this.props.invitesById} ids={this.props.ids}></InvitesComponent>

  </Container>); } } const mapStateToProps = state => {
    const invites = state.invites
    const duplicates = state.invites.statsObj.duplicates
    const percentComplete = state.invites.statsObj.percentComplete
    return ({invites, duplicates, percentComplete})
  }
  const mapDispatchToProps = dispatch => bindActionCreators({getInvites}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
