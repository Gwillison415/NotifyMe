import React from 'react'
import {InviteComponent} from './invite';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { clearData} from '../actions'

import {Card, CardDeck, Container, Col, Row} from 'reactstrap';

export const InvitesComponent = ({invites, invitesById, ids}) => {
  console.log(ids);
  let unreadInvitations = [];
  let readInvitations = [];

  // invites.forEach((invite, idx) => {
  //
  //   if (invite.status === "read") {
  //     invitations[0].push(<Card key={idx}>
  //       <InviteComponent inviteID={invite.invite_id} sender={invite.sender_id} inviteMsg={invite.invite} vector={invite.vector} subject={invite.subject} status={invite.status} sig_id={invite.sig_id} inviteSelected={invite.selected} inviteURL={invite.url} inviteTime={invite.invite_time} invite={invite} isJoinRequest={invite.isJoinRequest}/>
  //     </Card>)
  //   } else {
  //     invitations[1].push(<Card key={idx}>
  //       <InviteComponent inviteID={invite.invite_id} sender={invite.sender_id} subject={invite.subject} inviteMsg={invite.invite} vector={invite.vector} status={invite.status} sig_id={invite.sig_id} inviteSelected={invite.selected} inviteURL={invite.url} inviteTime={invite.invite_time} invite={invite} isJoinRequest={invite.isJoinRequest}/>
  //     </Card>)
  //   };
  //
  // })

  ids.forEach((id, idx) => {

    if (invitesById[id].status === "read") {
      readInvitations.push(<Card key={idx}>
        <InviteComponent inviteID={invitesById[id].invite_id}
           sender={invitesById[id].sender_id}
            inviteMsg={invitesById[id].invite}
             vector={invitesById[id].vector}
              subject={invitesById[id].subject}
               status={invitesById[id].status}
                sig_id={invitesById[id].sig_id}
                 inviteSelected={invitesById[id].selected}
                  inviteURL={invitesById[id].url}
                   inviteTime={invitesById[id].invite_time}
                    invite={invitesById[id]}
                     isJoinRequest={invitesById[id].isJoinRequest}/>
      </Card>)
    } else {
      unreadInvitations.push(<Card key={idx}>
        <InviteComponent inviteID={invitesById[id].invite_id}
           sender={invitesById[id].sender_id}
            subject={invitesById[id].subject}
             inviteMsg={invitesById[id].invite}
              vector={invitesById[id].vector}
               status={invitesById[id].status}
                sig_id={invitesById[id].sig_id}
                 inviteSelected={invitesById[id].selected}
                  inviteURL={invitesById[id].url}
                   inviteTime={invitesById[id].invite_time}
                    invite={invitesById[id]}
                     isJoinRequest={invitesById[id].isJoinRequest}/>
      </Card>)
    };

  })

  return (<Container>
    <CardDeck width="100%">
      <Row>
        <Col sm="6" xs={{
            size: 12,
            pull: 1
          }}>
          <h2 className="text-warning">Unread Messages</h2>
          {unreadInvitations}
        </Col>
        <Col sm="6" xs={{
            size: 12,
            pull: 1
          }}>
          <h2 className="text-info">Read Messages</h2>
          {readInvitations}
        </Col>
      </Row>
    </CardDeck>
  </Container>)

}

export const mapStateToProps = (state, ownProps) => {
  const ids = state.invites.ids
  const invitesById = state.invites.invitesById;
  // const invites = state.invites.invites

  return { ids, invitesById};
};
const mapDispatchToProps = dispatch => bindActionCreators({clearData}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(InvitesComponent);
// export default InvitesComponent

// let invitations = [[], []]
// invites.forEach((invite, idx) => {
//
//   if (invite.status === "read") {
//     invitations[0].push(<Card key={idx}>
//       <InviteComponent inviteID={invite.invite_id} sender={invite.sender_id} inviteMsg={invite.invite} vector={invite.vector} subject={invite.subject} status={invite.status} sig_id={invite.sig_id} inviteSelected={invite.selected} inviteURL={invite.url} inviteTime={invite.invite_time} invite={invite} isJoinRequest={invite.isJoinRequest}/>
//     </Card>)
//   } else {
//     invitations[1].push(<Card key={idx}>
//       <InviteComponent inviteID={invite.invite_id} sender={invite.sender_id} subject={invite.subject} inviteMsg={invite.invite} vector={invite.vector} status={invite.status} sig_id={invite.sig_id} inviteSelected={invite.selected} inviteURL={invite.url} inviteTime={invite.invite_time} invite={invite} isJoinRequest={invite.isJoinRequest}/>
//     </Card>)
//   };
//
// })
