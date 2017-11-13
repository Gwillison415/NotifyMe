import React from 'react'
import InviteComponent from './invite';

export const InvitesComponent = ({
  invites
}) => {
  const invitations = invites.invites.map(invite => (
    invite.selected = false,
    <InviteComponent key={invite.id}
      sender={invite.sender_id}
      inviteMsg={invite.invite}
      vector={invite.vector}
      status={invite.status}
      situationID={invite.sig_id} />

  ))
  return(
    <div>
      {invitations}
    </div>

  )
}

export default InvitesComponent;
