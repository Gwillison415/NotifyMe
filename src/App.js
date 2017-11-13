import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import logo from './static/logo.svg';
import redux_logo from './static/redux_logo.svg';
import './App.css';
import {
  getInvites
} from './actions'
import { Button, Media } from 'react-bootstrap';
import Invites from './components/invites';
class App extends Component {
  componentDidMount() {
    this.props.getInvites()
  }
  render() {
    return (
      <div className="App">
        <div className="container">
        
          <Invites invites={this.props.invites}/>
        </div>
        <footer className="App-footer">
          <h1 className="App-title">Built With React & Redux</h1>
          <span>
            <img src={logo} className="App-logo" alt="logo" />

            <img src={redux_logo} className="App-logo" alt="redux Logo"/>
          </span>
        </footer>



      </div>
    );
  }
}

const mapStateToProps = state => ({
  invites: state.invites,
})
const mapDispatchToProps = dispatch => bindActionCreators({
  getInvites,

}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
