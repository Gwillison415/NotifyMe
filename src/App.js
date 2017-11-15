import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import logo from './static/logo.svg';
import redux_logo from './static/redux_logo.svg';
import './App.css';
import {getInvites, toggleSelected} from './actions'
import {Container, Button, Media, Row, Col} from 'reactstrap';
import { Card, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';
// import Transition from 'react-transition-group/Transition';
import InvitesComponent from './components/invites';
import Situation from './components/situationCard';
import NavToolBar from './components/navbar';
import FullDesc from './components/list';
import DropdownComponent from './components/dropdown';

class App extends Component {
  componentDidMount() {
    this.props.getInvites()
  }
  render() {
    return (
      <Container>
    <NavToolBar></NavToolBar>
    <Container>


      <InvitesComponent invites={this.props.invites}></InvitesComponent>
    

    </Container>


  </Container>

  );
  }
}

const mapStateToProps = state => ({invites: state.invites})
const mapDispatchToProps = dispatch => bindActionCreators({
  getInvites
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
