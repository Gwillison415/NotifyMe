import {INVITES_REQUEST_STARTED, INVITES_REQUEST_SUCCESS, UPDATE_JSON, TOGGLE_PROP, RESET_JSON, CLEAR_DATA, } from '../actions'
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


let urlRegex = new RegExp(/https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,}/)
let joinRequest = new RegExp(/\bjoin Situation\b/)

function createState(json, incomingState = initialState, isUpdate = false) {
let state = incomingState

  json.forEach((invite) => {
    //parse the invite message for truly relevant info given limited 'real estate'
    let subject = invite.invite.match(/\[[^\]]+\]/, 'g')
    subject = subject[0].slice(1, subject[0].length - 1)
    //pull string out of RegExp OBJ - causes unexpected behavior -
    //  abandoning for now although it would have be cleaner.
    // subject = subject[0].slice(1, subject[0].length - 1)
    let url = invite.invite.match(urlRegex, 'mg')

    //bool to indicate when to put up a 'join' button
    let isJoinRequest = joinRequest.test(invite.invite)

  // we need to keep a single copy of all messages that have yet to be joined and only one.
    if (state.invitesById.hasOwnProperty(invite.sig_id)) {

      if (state.invitesById[invite.sig_id].subject === subject) {
        // only thing I really want to do with dupes is count them so I can potentially order them by #people who sent them -
        // this possible "high priority" indication on a dashboard represents potentially useful data to cache on the client
        state.statsObj.duplicates++
        return;
      } else {
        if (invite.status === "unread") {
          state.statsObj.unread++;
        } else {
          state.statsObj.read++;
        }


        //write object into invites array - deprecated - not using invites array at all
        // state.invites.push(Object.assign(invite, {
        //   subject: subject[0].slice(1, subject[0].length - 1),
        //   url: url[0],
        //   isJoinRequest
        // }))

          // write new entry into state tree
        state.invitesById[invite.sig_id] = {};
        state.invitesById[invite.sig_id].invite = invite.invite;
        state.invitesById[invite.sig_id].sender_id = invite.sender_id;
        state.invitesById[invite.sig_id].subject = subject;
        state.invitesById[invite.sig_id].url = url;
        state.invitesById[invite.sig_id].invite_id = invite.invite_id;
        state.invitesById[invite.sig_id].isJoinRequest = isJoinRequest;
        state.invitesById[invite.sig_id].status = invite.status;
        state.invitesById[invite.sig_id].vector = invite.vector;
        state.invitesById[invite.sig_id].sig_id = invite.sig_id;
        state.invitesById[invite.sig_id].invite_time = invite.invite_time;
      }

    } else {
      // If there isn't an entry, write entry into state tree
      if (invite.status === "unread") {
        state.statsObj["unread"]++;
      } else {
        state.statsObj["read"]++;
      }
      //write object into invites array - deprecated
      // state.invites.push(Object.assign(invite, {
      //   subject: subject[0].slice(1, subject[0].length - 1),
      //   url: url[0],
      //   isJoinRequest
      // }))

        // re-write new entry from same sig_id into state tree
      state.ids = state.ids.concat(invite.sig_id);
      state.invitesById[invite.sig_id] = {};
      state.invitesById[invite.sig_id].invite = invite.invite;
      state.invitesById[invite.sig_id].sender_id = invite.sender_id;
      state.invitesById[invite.sig_id].subject = invite.subject;
      state.invitesById[invite.sig_id].url = invite.url;
      state.invitesById[invite.sig_id].invite_id = invite.invite_id;
      state.invitesById[invite.sig_id].isJoinRequest = isJoinRequest;
      state.invitesById[invite.sig_id].status = invite.status;
      state.invitesById[invite.sig_id].vector = invite.vector;
      state.invitesById[invite.sig_id].sig_id = invite.sig_id;
      state.invitesById[invite.sig_id].invite_time = invite.invite_time;
    }
    state.statsObj.percentComplete = 1 - state.statsObj.unread / (state.statsObj.unread + state.statsObj.read);
  });
  return {
    ...state
  };
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
const inviteReducer = (state = initialState, action) => {

  switch (action.type) {
    case INVITES_REQUEST_STARTED:
      return createState(action.response.invites, state);
    case INVITES_REQUEST_SUCCESS:
      return {
        ...state,
        fetchingInvites: false,
        // invites: action.invites,
      }
    case TOGGLE_PROP:
      return {
        ...state,
        invites: toggleObjectPropertImmutably(state.invitesById, action.invite, "isJoinRequest")
      }
    case UPDATE_JSON:
    console.log('UPDATE_JSON', initialState);
      return createState(action.response.invites, undefined);
    case RESET_JSON:
    console.log('RESET_JSON', initialState);
      return createState(action.response.invites);
    case CLEAR_DATA:

      return initialState2;
    default:
      return state
  }
}
function toggleObjectPropertImmutably(invite, property) {
  //Object.assign(invite, !invite[property])
  invite[property] = !invite[property]
}
function toggleArrayPropertyImmutably(invites, invite, property) {
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

export default inviteReducer;
