import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import logo from './static/logo.svg';
import redux_logo from './static/redux_logo.svg';
import './App.css';
import {updateInvites} from './actions'
import {Container} from 'reactstrap';

import InvitesComponent from './components/invites';

import NavToolBar from './components/navbar';



class App extends Component {

// normally we'd have a lifecycle method listening for changes such that the redux store would react to a mounted compnent by calling the updateInvites method and populating our store
  // by creating buttons to mimic the actions of a websocket or an API call
  // componentDidMount() {
  //   this.props.updateInvites()
  // }
  render() {
    return (
        <Container>
          <div className="App">
          <header className="App-header">
            <h1 className="App-title">Built With React & Redux</h1>
            <span>
              <img src={logo} className="App-logo" alt="logo" />

              <img src={redux_logo} className="App-logo" alt="redux Logo"/>
            </span>
          </header>

        </div>
    <NavToolBar></NavToolBar>



      <InvitesComponent invites={this.props.invites}></InvitesComponent>



  </Container>

  );
  }
}

const mapStateToProps = state => ({invites: state.invites})
const mapDispatchToProps = dispatch => bindActionCreators({
  updateInvites
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
