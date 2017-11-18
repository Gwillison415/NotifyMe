import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
  isJoinRequest,
  sig_id

}) => {
  let sourceClass = createVectorCSSClass(vector);
  let timeCreatedHumanReadable = NOTIFY_API.returnDate(inviteTime);
  let elapsedTimeHumanReadable = NOTIFY_API.getDateTimeSince(new Date(moment.unix(inviteTime)))
  let statusColor = status === "read"? "secondary" : "danger"



  return (
    <Card   color={statusColor}>
    <CardImg className="top" width="110%" src={NOTIFY_API.findAvatar(sender)} alt="Card image cap"/>
    <CardBody>
      <CardTitle width="140">{inviteSubject}</CardTitle>
      <CardSubtitle className={`${sourceClass}`}>Source: {vector} sig_id:{sig_id}</CardSubtitle>
      <CardText> {`Created On: \n ${timeCreatedHumanReadable}`}

    </CardText>
    {isJoinRequest?
      <span>
      <Button href={inviteURL} color="primary">{status.toUpperCase()} Join Now</Button>
      </span> : null}
    <UCDropdown size="auto" elapsedTimeHumanReadable={elapsedTimeHumanReadable} inviteURL={inviteURL} color="success">

    </UCDropdown>



    </CardBody>
  </Card>)
}

export const mapStateToProps = (state, ownProps) => {
  const id = ownProps.inviteID;
  const inviteSubject = state.invites.invitesById[id].subject
  const sender = state.invites.invitesById[id].sender_id;


  return {
    inviteSubject,
    sender,

  };
};

// const mapDispatchToProps = dispatch => bindActionCreators({
//   handleUpdates
// }, dispatch)

export default connect(mapStateToProps, null)(InviteComponent);
// export default InviteComponent;
