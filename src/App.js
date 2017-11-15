import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import logo from './static/logo.svg';
import redux_logo from './static/redux_logo.svg';
import './App.css';
import {getInvites, toggle} from './actions'
import {Container, Button, Media, Row, Col} from 'reactstrap';
import { Card, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';
import Transition from 'react-transition-group/Transition';
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
      <CardDeck>
      <Card body inverse color="warning">
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <InvitesComponent toggle={toggle} invites={this.props.invites}></InvitesComponent>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </CardDeck>
    </Container>


  </Container>

  );
  }
}

const mapStateToProps = state => ({invites: state.invites})
const mapDispatchToProps = dispatch => bindActionCreators({
  getInvites,
  toggle
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
