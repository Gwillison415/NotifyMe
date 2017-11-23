import {INVITES_REQUEST_STARTED, INVITES_REQUEST_SUCCESS, UPDATE_JSON, TOGGLE_JOIN, RESET_JSON, CLEAR_DATA, } from '../actions'
const initialState2 = {
  ids: [],
  invites: [],
  invitesById: {},
  fetchingInvites: true,
  statsObj: {
    read: 0,
    unread: 0,
    duplicates: 0
  }
}
const initialState = {
  ids: [],
  invites: [],
  invitesById: {},
  fetchingInvites: true,
  statsObj: {
    read: 0,
    unread: 0,
    duplicates: 0
  }
}

let urlRegex = new RegExp(/https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,}/)
let joinRequest = new RegExp(/\bjoin Situation\b/)

function createState(json, incomingState = initialState, isUpdate = false) {
let state = incomingState

  json.forEach((invite) => {
    //parse the invite message for truly relevant info given limited 'real estate'
    let subject = invite.invite.match(/\[[^\]]+\]/, 'g')
    //pull string out of RegExp OBJ - causes unexpected behavior -
    //  abandoning for now although it would have be cleaner.
    // subject = subject[0].slice(1, subject[0].length - 1)
    let url = invite.invite.match(urlRegex, 'mg')

    //bool to indicate when to put up a 'join' button
    let isJoinRequest = joinRequest.test(invite.invite)

  // we need to keep a single copy of all messages that have yet to be joined and only one.
    if (state.invitesById.hasOwnProperty(invite.sig_id)) {

      if (state.invitesById[invite.sig_id].subject === subject[0].slice(1, subject[0].length - 1)) {
        // only thing I really want to do with dupes is count them so I can potentially order them by #people who sent them -
        // this possible "high priority" indication on a dashboard represents potentially useful data to cache on the client
        state.statsObj.duplicates++
        return;
      } else {
        console.log('invite old entry', invite.status);
        if (invite.status === "unread") {
          state.statsObj.unread++;
        } else {
          state.statsObj.read++;
        }
        // write new entry into state tree
        state.invites.push(Object.assign(invite, {
          subject: subject[0].slice(1, subject[0].length - 1),
          url: url[0],
          isJoinRequest
        }))
  console.log('inside old invite');
        state.ids = state.ids.concat(invite.sig_id);
        state.invitesById[invite.sig_id] = {};
        state.invitesById[invite.sig_id].invite = invite.invite;
        state.invitesById[invite.sig_id].sender_id = invite.sender_id;
        state.invitesById[invite.sig_id].subject = invite.subject;
        state.invitesById[invite.sig_id].url = invite.url;
        state.invitesById[invite.sig_id].invite_id = invite.invite_id;
        state.invitesById[invite.sig_id].isJoinRequest = invite.isJoinRequest;
        state.invitesById[invite.sig_id].status = invite.status;
        state.invitesById[invite.sig_id].vector = invite.vector;
        state.invitesById[invite.sig_id].sig_id = invite.sig_id;
        state.invitesById[invite.sig_id].percentComplete = 0;
      }

    } else {
      // If there isn't an entry, write entry into state tree
      if (invite.status === "unread") {
        state.statsObj["unread"]++;
      } else {
        state.statsObj["read"]++;
      }
      state.invites.push(Object.assign(invite, {
        subject: subject[0].slice(1, subject[0].length - 1),
        url: url[0],
        isJoinRequest
      }))
      console.log('inside new invite');
      state.ids = state.ids.concat(invite.sig_id);
      state.invitesById[invite.sig_id] = {};
      state.invitesById[invite.sig_id].invite = invite.invite;
      state.invitesById[invite.sig_id].sender_id = invite.sender_id;
      state.invitesById[invite.sig_id].subject = invite.subject;
      state.invitesById[invite.sig_id].url = invite.url;
      state.invitesById[invite.sig_id].invite_id = invite.invite_id;
      state.invitesById[invite.sig_id].isJoinRequest = invite.isJoinRequest;
      state.invitesById[invite.sig_id].status = invite.status;
      state.invitesById[invite.sig_id].vector = invite.vector;
      state.invitesById[invite.sig_id].sig_id = invite.sig_id;

    }
    state.statsObj.percentComplete = 1 - state.statsObj.unread / (state.statsObj.unread + state.statsObj.read);
  });
  return {
    ...state
  };
}

export default(state = initialState, action) => {

  switch (action.type) {
    case INVITES_REQUEST_STARTED:
      return createState(action.response.invites, state);
    case INVITES_REQUEST_SUCCESS:
      return {
        ...state,
        fetchingInvites: false,
        // invites: action.invites,
      }
    case TOGGLE_JOIN:
      return {
        ...state,
        invites: toggleProperty(state.invites, action.invite, "someprop")
      }
    case UPDATE_JSON:
    console.log('UPDATE_JSON', initialState);
      return createState(action.response.invites);
    case RESET_JSON:
    console.log('RESET_JSON', initialState);
      return createState(action.response.invites);
    case CLEAR_DATA:
      console.log("2", initialState2, '1', initialState);
      return initialState2;
    default:
      return state
  }
}

function toggleProperty(invites, invite, property) {
  console.log(property);
  const index = invites.indexOf(invite)
  return [
    ...invites.slice(0, index), {
      ...invite,
      [property]: !invite[property]
    },
    ...invites.slice(index + 1)
  ];
}
