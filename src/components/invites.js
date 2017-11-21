import React from 'react'
import {InviteComponent} from './invite';
import {connect} from 'react-redux'

import {Card, CardDeck, Container, Col, Row} from 'reactstrap';

export const InvitesComponent = ({invites}) => {
  // console.log('state in Component', this.props);
  let invitations = [[], []]
  invites.forEach((invite, idx) => {

    if (invite.status === "read") {
      invitations[0].push(<Card key={idx}>
        <InviteComponent inviteID={invite.invite_id} sender={invite.sender_id} inviteMsg={invite.invite} vector={invite.vector} subject={invite.subject} status={invite.status} sig_id={invite.sig_id} inviteSelected={invite.selected} inviteURL={invite.url} inviteTime={invite.invite_time} invite={invite} isJoinRequest={invite.isJoinRequest}/>
      </Card>)
    } else {
      invitations[1].push(<Card key={idx}>
        <InviteComponent inviteID={invite.invite_id} sender={invite.sender_id} subject={invite.subject} inviteMsg={invite.invite} vector={invite.vector} status={invite.status} sig_id={invite.sig_id} inviteSelected={invite.selected} inviteURL={invite.url} inviteTime={invite.invite_time} invite={invite} isJoinRequest={invite.isJoinRequest}/>
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
          <h2 >Unread Messages</h2>
          {invitations[1]}
        </Col>
        <Col sm="6" xs={{
            size: 12,
            pull: 1
          }}>
          <h2>Read Messages</h2>
          {invitations[0]}
        </Col>
      </Row>
    </CardDeck>
  </Container>)

}

export const mapStateToProps = (state, ownProps) => {

  const invitesById = state.invites.invitesById;
  const invites = state.invites.invites

  return {invites, invitesById};
};

// export const mapDispatchToProps = dispatch =>
//   bindActionCreators(
//     {
//       retrieveMilestones,
//     },
//     dispatch,
//   );

export default connect(mapStateToProps, null)(InvitesComponent);
// export default InvitesComponent
