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
  componentDidMount() {
    this.props.getInvites()
  }
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
  getInvites
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
