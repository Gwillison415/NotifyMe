import React from 'react'

import {UCDropdown} from './unControlledNavDropDown';

import {
  Card,
  Button,
  CardTitle,
  CardText,
  CardImg,

  CardBody,
  CardSubtitle,

} from 'reactstrap';

// import {imageContent} from '../static/imageSources';

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

export default InviteComponent;
