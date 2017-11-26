import React from 'react'
import {connect} from 'react-redux';
import {UCDropdown} from './unControlledNavDropDown';
import {toggleProperty} from '../actions';
import {bindActionCreators} from 'redux'

import {
  Card,
  Button,
  CardTitle,
  CardText,
  CardImg,
  CardBody,
  CardSubtitle
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
  subject,
  invite,
  isJoinRequest,
  sig_id

}) => {
  let sourceClass = createVectorCSSClass(vector);
  let timeCreatedHumanReadable = NOTIFY_API.returnDate(inviteTime);
  let elapsedTimeHumanReadable = NOTIFY_API.getDateTimeSince(new Date(moment.unix(inviteTime)))
  let statusColor = status === "read"
    ? "secondary"
    : "danger"

  return (<Card color={statusColor}>
    <CardImg className="top" width="110%" src={NOTIFY_API.findAvatar(sender)} alt="Card image cap"/>
    <CardBody>
      <CardTitle width="140">{subject}</CardTitle>
      <CardSubtitle className={`${sourceClass}`}>
        <div>
          Source:  {vector}
        </div>
        <div>
          sig_id:{sig_id}
        </div>
      </CardSubtitle>
      <CardText>
        {`Created On: \n ${timeCreatedHumanReadable}`}

      </CardText>
      {
        isJoinRequest
          ? <div>
            <span>
                <Button href={inviteURL} color="primary">{status.toUpperCase()}
                  </Button>

              </span>
              <span>
                <Button onClick={() => {toggleProperty(invite, "isJoinRequest")}} >Join Now</Button>
              </span>
          </div>
          : null
      }
      <UCDropdown size="auto" elapsedTimeHumanReadable={elapsedTimeHumanReadable} inviteURL={inviteURL} color="success"></UCDropdown>

    </CardBody>
  </Card>)
}

export const mapStateToProps = (state, ownProps) => {
  const id = ownProps.inviteID;
  const subject = state.invites.invitesById[id].subject;
  const sender = state.invites.invitesById[id].sender_id;
  const isJoinRequest = state.invites.invitesById[id].isJoinRequest;
  return {subject, isJoinRequest, sender};
};

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleProperty
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(InviteComponent);
// export default InviteComponent;
