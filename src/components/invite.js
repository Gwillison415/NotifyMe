import React from 'react'
import {Grid, Media, Image} from 'react-bootstrap';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {UCDropdown} from './unControlledNavDropDown';

// import $ from 'jquery';
// import { findDOMNode } from 'react-dom';
import {
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay,
  CardBody,
  CardSubtitle,
  ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

import {imageContent} from '../static/imageSources';
import ReactTooltip from 'react-tooltip'
// import {toggle} from '../actions';
import NOTIFY_API from '../utils/Api';
import './invite.css';

var moment = require('moment');

export const createVectorCSSClass = (source) => {
  switch (source) {
    case "Twitter":
      return "fa fa-twitter"
    case "Internal":
      return "fa fa-home"
    case "Email":
      return "fa fa-envelope-o"
    default:
      return "fa fa-chain-broken"
  }
}

// export const  findTimeElapsed = (timestamp) => {
//   let now = parseInt(Date.now() / 1000)
//   let elapsedUnixTime =  now - timestamp
//   let offset =new Date(elapsedUnixTime)
//   let m1 = moment(now)
//   let m2 = moment(new Date(timestamp))
//   console.log('starttime', NOTIFY_API.returnDate(timestamp), NOTIFY_API.returnDate(now),  m1.diff(m2, "years", true));
// }

export const InviteComponent = ({
  sender,
  inviteKey,
  inviteMsg,
  inviteSubject,
  inviteURL,
  vector,
  status,
  situationID,
  inviteTime,
  toggle,
  isOpen,
  invite

}) => {
  let sourceClass = createVectorCSSClass(vector);
  let timeCreated = NOTIFY_API.returnDate(inviteTime);
  function toggleSelect(property) {
    return !property
  }
  console.log('date since', NOTIFY_API.getDateTimeSince(new Date(moment.unix(inviteTime))));
  return (
    <Card  inverse="inverse" color="warning">
    <CardImg top="top" width="100%" src={NOTIFY_API.findAvatar(sender)} alt="Card image cap"/>
    <CardBody>
      <CardTitle>{inviteSubject}</CardTitle>
      <CardSubtitle className={`${sourceClass}`}>Source: {vector}</CardSubtitle>
      <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      <UCDropdown></UCDropdown>
    </CardText>



    </CardBody>
  </Card>)
}
//
// export const mapStateToProps = (state, ownProps) => {
//   const isOpen = state.invites.isOpen;
//
//   return {
//     isOpen,
//   }
// }
// const mapDispatchToProps = dispatch => bindActionCreators({
//   toggle,
//
// }, dispatch)
// export default connect(mapStateToProps)(InviteComponent);
export default InviteComponent;
