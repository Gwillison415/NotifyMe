import React from 'react'
import {InviteComponent} from './invite';


import {
  Card,
  CardDeck,
} from 'reactstrap';


export const InvitesComponent = ({invites, toggleBool}) => {
  let urlRegex = new RegExp(/https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,}/)
  let joinRequest = new RegExp(/\bjoin Situation\b/)
  let filterDupesObj = {};
  let statsObj = {
    read: 0,
    unread: 0,
  };
  const invitations = [ [], [] ];

  invites.invites.forEach((invite, idx) => {
    if (invite.status === "unread") {
      statsObj["unread"]++;
    } else {
      statsObj["read"]++;
    }
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
      if (invite.status === "read") {
        invitations[0].push(<Card key={idx}>
          <InviteComponent inviteKey={idx} sender={invite.sender_id} inviteMsg={invite.invite} inviteSubject={subject[0]} inviteURL={url[0]} vector={invite.vector} status={invite.status} situationID={invite.sig_id} inviteSelected={invite.selected} inviteTime={invite.invite_time} invite={invite} isJoinRequest={isJoinRequest}/>
        </Card>)
      } else {
        invitations[1].push(<Card key={idx}>
          <InviteComponent inviteKey={idx} sender={invite.sender_id} inviteMsg={invite.invite} inviteSubject={subject[0]} inviteURL={url[0]} vector={invite.vector} status={invite.status} situationID={invite.sig_id} inviteSelected={invite.selected} inviteTime={invite.invite_time} invite={invite} isJoinRequest={isJoinRequest}/>
        </Card>)
      };
    }
  })

  return (<CardDeck>
    <div className="col">
      <h2>Unread Messages</h2>
      {invitations[1]}
    </div>
    <div className="col">
      <h2>Read Messages</h2>
      {invitations[0]}
    </div>
  </CardDeck>)
}


export default InvitesComponent
