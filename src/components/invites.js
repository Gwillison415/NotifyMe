import React from 'react'
import {InviteComponent} from './invite';

// export const createMessageDetailsObject = (string) => {
//   let urlRegex = new RegExp(/https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,}/)
//
//   // TODO move regex up to invites component to avoid multiple rendering
//   // TODO literal notation prevents re-compilation of RegExp
//
//   return {
//     subject : string.match(/\[[^\]]+\]/, 'g'),
//     url : string.match(urlRegex, 'mg')
//   }
// }
export const InvitesComponent = ({
  invites
}) => {
  let urlRegex = new RegExp(/https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,}/)

  var subject;
  var url;

  const invitations = invites.invites.map((invite, idx) => (
    subject = invite.invite.match(/\[[^\]]+\]/, 'g')
    url = invite.invite.match(urlRegex, 'mg')
    <InviteComponent key={idx}
      sender={invite.sender_id}
      inviteMsg={invite.invite}
      inviteSubject={subject[0]}
      inviteURL={url[0]}
      vector={invite.vector}
      status={invite.status}
      situationID={invite.sig_id}
      inviteSelected={invite.selected}/>

  ))
  // let messageDetailsObject = createMessageDetailsObject(invite.invite)
  return(
    <div className="card" >
      {invitations inviteSubject={messageDetailsObject.subject[0]}
      inviteURL={messageDetailsObject.url[0]} }
    </div>

  )
}

export default InvitesComponent;
