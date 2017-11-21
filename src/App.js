import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import logo from './static/logo.svg';
import redux_logo from './static/redux_logo.svg';
import './App.css';
import {getInvites} from './actions'
import {Container} from 'reactstrap';

import InvitesComponent from './components/invites';

import NavToolBar from './components/navbar';

class App extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('that happened');
  //   return nextProps.invites !== this.props.invites
  // }
  componentDidMount() {
    this.props.getInvites()
  }
  render() {
    return (<Container>
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

      <InvitesComponent invites={this.props.invites}></InvitesComponent>

    </Container>);
  }
}

const mapStateToProps = state => {
  const invites = state.invites
  const duplicates = state.invites.statsObj.duplicates
  const percentComplete = state.invites.statsObj.percentComplete
  return ({invites, duplicates, percentComplete})
}
const mapDispatchToProps = dispatch => bindActionCreators({
  getInvites
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
