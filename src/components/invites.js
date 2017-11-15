import React from 'react'
import {InviteComponent} from './invite';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {toggle} from '../actions';
import {
  Card,
  CardImg,
  CardText,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';
import injectState from '../utils/utils';

export const InvitesComponent = ({invites, toggleBool}) => {
  let urlRegex = new RegExp(/https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,}/)
  let joinRequest = new RegExp(/\bjoin Situation\b/)
  let filterDupesObj = {};

  const invitations = invites.invites.map((invite, idx) => {

    if (!filterDupesObj[invite.sig_id]) {
      filterDupesObj[invite.sig_id] = 0
    }
    let subject = invite.invite.match(/\[[^\]]+\]/, 'g')
    let url = invite.invite.match(urlRegex, 'mg')
    let isJoinRequest = joinRequest.test(invite.invite)

    filterDupesObj[invite.sig_id]++
    if (filterDupesObj[invite.sig_id] > 1) {
      return;

    } else {

      return (<Card key={idx}>
        <InviteComponent
           inviteKey={idx}
            sender={invite.sender_id}
            inviteMsg={invite.invite}
            inviteSubject={subject[0]}
             inviteURL={url[0]}
              vector={invite.vector}
              status={invite.status}
              situationID={invite.sig_id}
             inviteSelected={invite.selected}
              inviteTime={invite.invite_time}
              invite={invite}
              isJoinRequest={isJoinRequest}
            />
      </Card>)
    }

  })


  return (<div className="col">
    {invitations}
  </div>)
}

export const mapStateToProps = (state, ownProps) => {
  const subject = ownProps.subject;

  return {subject};
};

export const mapDispatchToProps = dispatch => bindActionCreators({
  toggle
}, dispatch,);

export default injectState(connect(mapStateToProps, mapDispatchToProps)(InvitesComponent));
