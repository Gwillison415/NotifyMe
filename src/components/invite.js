import React from 'react'
import {Grid, Media, Image} from 'react-bootstrap';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {UCDropdown} from './unControlledNavDropDown';

// import $ from 'jquery';
// import { findDOMNode } from 'react-dom';
import {
  Card,
  Button,
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
const checkMessage = (string) => {
  if (typeof string !== "string") {
    throw ("You have corrupt data, What are the backend folks doing around here anyway?")
  }
  else {
    return string;
  }
}
const statusBackground = (parameter) => {
  switch (parameter) {
    case "read":

      break;
    default:

  }
}
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
  invite,
  isJoinRequest

}) => {
  let sourceClass = createVectorCSSClass(vector);
  let timeCreatedHumanReadable = NOTIFY_API.returnDate(inviteTime);
  let elapsedTimeHumanReadable = NOTIFY_API.getDateTimeSince(new Date(moment.unix(inviteTime)))
  let statusColor = status === "read"? "secondary" : "danger"



  return (
    <Card   color={statusColor}>
    <CardImg className="top" width="110%" src={NOTIFY_API.findAvatar(sender)} alt="Card image cap"/>
    <CardBody>
      <CardTitle width="140">{inviteSubject.slice(1, inviteSubject.length -1)}</CardTitle>
      <CardSubtitle className={`${sourceClass}`}>Source: {vector}</CardSubtitle>
      <CardText> {`Created On: \n ${timeCreatedHumanReadable}`}

    </CardText>
    {isJoinRequest?
      <span>
      <Button href={inviteURL} color="primary">Join Now</Button>
      </span> : null}
    <UCDropdown elapsedTimeHumanReadable={elapsedTimeHumanReadable} inviteURL={inviteURL}>

    </UCDropdown>



    </CardBody>
  </Card>)
}

export const mapStateToProps = (state, ownProps) => {
  const isOpen = state.invites.isOpen;

  return {
    isOpen,
  }
}

export default connect(mapStateToProps, null)(InviteComponent);
// export default InviteComponent;
