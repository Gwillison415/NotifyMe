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

  const invitations = invites.invites.map((invite, idx) => {
    var subject = invite.invite.match(/\[[^\]]+\]/, 'g')
    let url = invite.invite.match(urlRegex, 'mg')
    return (<Card>
      <InviteComponent key={idx}
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
              toggle={toggle}
            invite={invite}/>
            {/* <UCDropdown></UCDropdown> */}
    </Card>)
  })

  // let messageDetailsObject = createMessageDetailsObject(invite.invite)
  return (<div className="col">
    {invitations}
  </div>)
}
//
// inviteSubject={messageDetailsObject.subject[0]}
// inviteURL={messageDetailsObject.url[0]}
export const mapStateToProps = (state, ownProps) => {
  const subject = ownProps.subject;

  return {subject};
};

export const mapDispatchToProps = dispatch => bindActionCreators({
  toggle
}, dispatch,);

export default injectState(connect(mapStateToProps, mapDispatchToProps)(InvitesComponent));
